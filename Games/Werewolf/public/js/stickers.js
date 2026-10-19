'use strict';

/**
 * ระบบสติ๊กเกอร์สันนิษฐานบทบาท — เก็บเฉพาะในเครื่องของผู้เล่นคนนั้น (localStorage)
 * ไม่ sync กับคนอื่น เพราะเป็นการเดาของใครของมันเอง รีรอบใหม่ (phase กลับไป lobby) ก็ลบทิ้ง
 */
const Stickers = (() => {
  function storageKey(roomCode) {
    return `ww_stickers_${roomCode}`;
  }

  function load(roomCode) {
    try {
      return JSON.parse(localStorage.getItem(storageKey(roomCode)) || '{}');
    } catch {
      return {};
    }
  }

  function save(roomCode, data) {
    try {
      localStorage.setItem(storageKey(roomCode), JSON.stringify(data));
    } catch { /* เต็ม/ปิดใช้งาน ก็ไม่เป็นไร */ }
  }

  function get(roomCode, key) {
    return load(roomCode)[key] || null;
  }

  function set(roomCode, key, roleId) {
    const data = load(roomCode);
    if (roleId) data[key] = roleId; else delete data[key];
    save(roomCode, data);
  }

  function clear(roomCode) {
    localStorage.removeItem(storageKey(roomCode));
  }

  let openPopoverEl = null;

  function closePicker() {
    if (openPopoverEl) { openPopoverEl.remove(); openPopoverEl = null; }
    document.removeEventListener('click', onOutsideClick, true);
  }

  function onOutsideClick(e) {
    if (openPopoverEl && !openPopoverEl.contains(e.target)) closePicker();
  }

  /**
   * เปิดแผงเลือกไอคอนบทบาทไว้แปะสติ๊กเกอร์ ที่ตำแหน่ง (x,y) จาก event
   * roleCatalog: [{id, nameTh}], onPick(roleIdOrNull)
   */
  function openPicker(anchorEl, roleCatalog, onPick) {
    closePicker();
    const rect = anchorEl.getBoundingClientRect();
    const pop = document.createElement('div');
    pop.className = 'sticker-popover';
    pop.style.left = `${Math.min(rect.left, window.innerWidth - 270)}px`;
    pop.style.top = `${rect.bottom + 6}px`;

    roleCatalog.forEach((r) => {
      const btn = document.createElement('button');
      btn.textContent = r.nameTh;
      btn.title = r.nameTh;
      btn.onclick = (e) => { e.stopPropagation(); onPick(r.id); closePicker(); };
      pop.appendChild(btn);
    });
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'ลบสติ๊กเกอร์';
    clearBtn.className = 'clear';
    clearBtn.onclick = (e) => { e.stopPropagation(); onPick(null); closePicker(); };
    pop.appendChild(clearBtn);

    document.body.appendChild(pop);
    openPopoverEl = pop;
    setTimeout(() => document.addEventListener('click', onOutsideClick, true), 0);
  }

  return { get, set, clear, openPicker, closePicker };
})();
