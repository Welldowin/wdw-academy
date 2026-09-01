/* audio.js — ตัวจัดการเสียง (BGM + SFX)
 * วางไฟล์เสียงจริงไว้ที่ public/sounds/ ตามชื่อด้านล่างได้เลย
 */
window.AudioManager = (() => {
  const files = {
    bgm: 'sounds/bgm.mp3',       // เพลงพื้นหลัง (loop) โทนสดใส
    correct: 'sounds/correct.mp3', // ทายถูก (ประกาย/ติ๊ง)
    wrong: 'sounds/wrong.mp3',     // ทายผิด (บัซเซอร์/ตุ้บเบา ๆ)
    slide: 'sounds/slide.mp3',     // เลื่อน/จั่วไพ่
    win: 'sounds/win.mp3',         // พลุ + เสียงเชียร์ตอนชนะ
  };
  const cache = {};
  let muted = false;
  let bgm = null;

  function el(name) {
    if (!cache[name]) {
      const a = new Audio(files[name]);
      a.preload = 'auto';
      cache[name] = a;
    }
    return cache[name];
  }

  function play(name) {
    if (muted || !files[name]) return;
    try {
      const base = el(name);
      const a = base.cloneNode();
      a.volume = name === 'win' ? 0.6 : 0.5;
      a.play().catch(() => {});
    } catch (_) {}
  }

  function startBgm() {
    if (bgm) return;
    try {
      bgm = el('bgm');
      bgm.loop = true;
      bgm.volume = 0.22;
      bgm.play().catch(() => {});
    } catch (_) {}
  }

  function toggleMute() {
    muted = !muted;
    if (bgm) bgm.muted = muted;
    return muted;
  }

  return { play, startBgm, toggleMute, isMuted: () => muted };
})();
