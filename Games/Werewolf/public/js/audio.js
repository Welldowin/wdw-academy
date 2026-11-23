'use strict';

/**
 * AudioManager
 * - bgm: เพลงพื้นหลังวนซ้ำ (night / select)
 * - sfx: เสียงเอฟเฟกต์ครั้งเดียว (night / morning / win / lose)
 * - sfxThenBgm: เล่น sfx จบแล้วค่อยต่อ bgm (กลางคืน: sfx-night -> bgm-night, กลางวัน: sfx-morning -> bgm-select)
 * ไม่มีไฟล์ก็เงียบ ไม่ทำให้เกมพัง
 */
const AudioManager = (() => {
  let muted = false;
  try { muted = JSON.parse(localStorage.getItem('ww_muted') || 'false'); } catch { muted = false; }

  const bgmFiles = {
    night: 'sounds/bgm-night.mp3',
    select: 'sounds/bgm-select.mp3',
  };
  const sfxFiles = {
    night: 'sounds/sfx-night.mp3',
    morning: 'sounds/sfx-morning.mp3',
    win: 'sounds/sfx-win.mp3',
    lose: 'sounds/sfx-lose.mp3',
    flip: 'sounds/sfx-flip.mp3',
  };

  const readNum = (k, d) => {
    try { const v = parseFloat(localStorage.getItem(k)); return Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : d; } catch { return d; }
  };
  let bgmVolume = readNum('ww_bgm_vol', 0.2); // เพลงพื้นหลังเริ่มต้น 20%
  let sfxVolume = readNum('ww_sfx_vol', 0.8);

  // ตัวคูณความดังต่อเพลง: bgm-select เบากว่า (ที่แถบเพลง 20% => เหลือ 5%)
  const bgmGain = { night: 1, select: 0.25 };
  const bgmVol = (key) => bgmVolume * (bgmGain[key] ?? 1);

  let currentBgm = null;
  let currentBgmKey = null;
  let currentSfx = null;
  let seq = 0; // เพิ่มทุกครั้งที่เปลี่ยนเสียง เพื่อยกเลิกคิวเก่าที่ค้างอยู่

  function safeAudio(src) {
    const a = new Audio(src);
    a.preload = 'auto';
    a.onerror = () => { /* ไม่มีไฟล์ก็เงียบไว้ */ };
    return a;
  }

  function setMuted(val) {
    muted = val;
    try { localStorage.setItem('ww_muted', JSON.stringify(muted)); } catch { /* ignore */ }
    if (currentBgm) currentBgm.muted = muted;
    if (currentSfx) currentSfx.muted = muted;
  }

  function setBgmVolume(v) {
    bgmVolume = Math.min(1, Math.max(0, v));
    try { localStorage.setItem('ww_bgm_vol', String(bgmVolume)); } catch { /* ignore */ }
    if (currentBgm) currentBgm.volume = bgmVol(currentBgmKey);
  }

  function setSfxVolume(v) {
    sfxVolume = Math.min(1, Math.max(0, v));
    try { localStorage.setItem('ww_sfx_vol', String(sfxVolume)); } catch { /* ignore */ }
    if (currentSfx) currentSfx.volume = sfxVolume;
  }

  function toggleMute() {
    setMuted(!muted);
    return muted;
  }

  function stopSfx() {
    if (currentSfx) { currentSfx.pause(); currentSfx = null; }
  }

  function stopBgm() {
    seq += 1;
    if (currentBgm) { currentBgm.pause(); currentBgm = null; }
    currentBgmKey = null;
    stopSfx();
  }

  function startBgm(key) {
    if (!bgmFiles[key]) return;
    if (currentBgmKey === key && currentBgm) return; // เพลงเดิมเล่นต่อเนื่อง ไม่เริ่มใหม่
    if (currentBgm) currentBgm.pause();
    const a = safeAudio(bgmFiles[key]);
    a.loop = true;
    a.volume = bgmVol(key);
    a.muted = muted;
    a.play().catch(() => {});
    currentBgm = a;
    currentBgmKey = key;
  }

  function playBgm(key) {
    seq += 1;
    stopSfx();
    startBgm(key);
  }

  function playSfx(key) {
    if (!sfxFiles[key]) return null;
    const a = safeAudio(sfxFiles[key]);
    a.volume = sfxVolume;
    a.muted = muted;
    a.play().catch(() => {});
    return a;
  }

  // เล่น sfx ให้จบก่อน แล้วค่อยเริ่ม bgm (กันเสียงชนกัน)
  function sfxThenBgm(sfxKey, bgmKey) {
    seq += 1;
    const mine = seq;
    if (currentBgm) { currentBgm.pause(); currentBgm = null; currentBgmKey = null; }
    stopSfx();
    const go = () => { if (mine === seq) startBgm(bgmKey); };
    const a = sfxFiles[sfxKey] ? safeAudio(sfxFiles[sfxKey]) : null;
    if (!a) return go();
    a.volume = sfxVolume;
    a.muted = muted;
    currentSfx = a;
    a.onended = go;
    a.onerror = go;
    setTimeout(go, 12000); // กันค้าง: ถ้า sfx ไม่จบ/เล่นไม่ได้ ก็เริ่ม bgm อยู่ดี
    a.play().catch(go);
  }

  // เล่นเสียงสรุปผล (หยุดเพลงพื้นหลังก่อน)
  function playResult(key) {
    stopBgm();
    currentSfx = playSfx(key);
  }

  return { toggleMute, setMuted, isMuted: () => muted, setBgmVolume, setSfxVolume, getBgmVolume: () => bgmVolume, getSfxVolume: () => sfxVolume, playBgm, stopBgm, playSfx, sfxThenBgm, playResult };
})();
