'use strict';

/**
 * AudioManager: โหลดไฟล์เสียงแบบขี้เกียจ (lazy) ถ้าไม่มีไฟล์จริงใน public/sounds/
 * ก็แค่เงียบ ไม่ทำให้เกมพัง ดูรายชื่อไฟล์ที่ต้องมีได้ใน public/sounds/README.md
 */
const AudioManager = (() => {
  let muted = JSON.parse(localStorage.getItem('ww_muted') || 'false');
  const bgmFiles = {
    lobby: 'sounds/bgm-lobby.mp3',
    night: 'sounds/bgm-night.mp3',
    day: 'sounds/bgm-day.mp3',
    vote: 'sounds/bgm-vote.mp3',
  };
  const sfxFiles = {
    'night-start': 'sounds/sfx-howl.mp3',
    'day-start': 'sounds/sfx-rooster.mp3',
    'vote-start': 'sounds/sfx-drum.mp3',
    'win-village': 'sounds/sfx-win-village.mp3',
    'win-werewolf': 'sounds/sfx-win-werewolf.mp3',
    'win-tanner': 'sounds/sfx-win-tanner.mp3',
    flip: 'sounds/sfx-flip.mp3',
    click: 'sounds/sfx-click.mp3',
    tick: 'sounds/sfx-tick.mp3',
  };

  let currentBgm = null;
  const sfxCache = {};

  function safeAudio(src) {
    const a = new Audio(src);
    a.onerror = () => { /* ไม่มีไฟล์ก็เงียบไว้ ไม่ throw */ };
    return a;
  }

  function setMuted(val) {
    muted = val;
    localStorage.setItem('ww_muted', JSON.stringify(muted));
    if (currentBgm) currentBgm.muted = muted;
  }

  function toggleMute() {
    setMuted(!muted);
    return muted;
  }

  function playBgm(key) {
    if (!bgmFiles[key]) return;
    if (currentBgm) { currentBgm.pause(); currentBgm = null; }
    const a = safeAudio(bgmFiles[key]);
    a.loop = true;
    a.volume = 0.35;
    a.muted = muted;
    a.play().catch(() => {});
    currentBgm = a;
  }

  function stopBgm() {
    if (currentBgm) { currentBgm.pause(); currentBgm = null; }
  }

  function playSfx(key) {
    if (muted || !sfxFiles[key]) return;
    const a = safeAudio(sfxFiles[key]);
    a.volume = 0.7;
    a.play().catch(() => {});
  }

  return { toggleMute, setMuted, isMuted: () => muted, playBgm, stopBgm, playSfx };
})();
