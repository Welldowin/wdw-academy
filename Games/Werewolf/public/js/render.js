'use strict';

/**
 * ฟังก์ชันช่วยวาด UI ล้วน ๆ ไม่ยุ่งกับ socket (เทสแยกได้ถ้าต้องการ)
 */
const Render = (() => {
  // ที่นั่งของ "ฉัน" อยู่ล่างสุดเสมอ ที่เหลือกระจายตามเข็มนาฬิกา (รองรับ 3-10 ที่นั่ง)
  function seatPosition(mySeat, targetSeat, totalSeats) {
    const offset = ((targetSeat - mySeat) % totalSeats + totalSeats) % totalSeats;
    const angleDeg = 180 + offset * (360 / totalSeats); // 180° = ล่างสุด (ฉัน), วนตามเข็มนาฬิกา
    const rad = (angleDeg * Math.PI) / 180;
    const R = 40; // % ของ container
    const x = 50 + R * Math.sin(rad);
    const y = 50 - R * Math.cos(rad);
    return { x, y };
  }

  function roleCardImg(roleId, className) {
    const img = document.createElement('img');
    img.className = className || '';
    img.alt = roleId || '';
    img.src = roleId ? `assets/cards/${roleId}.webp` : 'assets/cards/card-back.webp';
    img.onerror = () => {
      img.onerror = null;
      img.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = (className || '') + ' card-fallback';
      fallback.textContent = roleId ? roleId.slice(0, 2).toUpperCase() : '??';
      fallback.style.cssText = 'display:flex;align-items:center;justify-content:center;background:#3a2060;color:#f3c94c;font-weight:700;border-radius:6px;';
      img.parentNode && img.parentNode.insertBefore(fallback, img);
    };
    return img;
  }

  function fmtClock(ms) {
    if (ms <= 0) return '00:00';
    const totalSec = Math.ceil(ms / 1000);
    const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const s = (totalSec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  return { seatPosition, roleCardImg, fmtClock };
})();
