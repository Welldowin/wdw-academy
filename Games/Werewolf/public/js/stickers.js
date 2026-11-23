'use strict';

/**
 * แผงเลือกโทเคนบทบาท (ใช้แปะสันนิษฐานบนผู้เล่น/ไพ่กลาง) — ข้อมูลโทเคนเก็บที่เซิร์ฟเวอร์ ทุกคนเห็นเหมือนกัน
 * ไฟล์นี้ทำแค่ UI ของแผงเลือก
 */
const Stickers = (() => {
  let openPopoverEl = null;

  function closePicker() {
    if (openPopoverEl) { openPopoverEl.remove(); openPopoverEl = null; }
    document.removeEventListener('click', onOutsideClick, true);
  }

  function onOutsideClick(e) {
    if (openPopoverEl && !openPopoverEl.contains(e.target)) closePicker();
  }

  /**
   * roles: [{id, nameTh, icon, count, placed}]  onPick(roleIdOrNull)  (null = ล้างโทเคนที่ตำแหน่งนี้)
   */
  function openPicker(anchorEl, roles, onPick, title) {
    closePicker();
    const rect = anchorEl.getBoundingClientRect();
    const pop = document.createElement('div');
    pop.className = 'sticker-popover';
    if (title) {
      const h = document.createElement('div');
      h.className = 'sticker-title';
      h.textContent = title;
      pop.appendChild(h);
    }
    const grid = document.createElement('div');
    grid.className = 'sticker-grid';
    roles.forEach((r) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.title = r.nameTh;
      btn.innerHTML = `<span class="ic">${r.icon}</span><span class="nm">${r.nameTh}</span>${r.count > 1 ? `<span class="cnt">×${r.count}</span>` : ''}`;
      if (r.placed) btn.classList.add('placed');
      btn.onclick = (e) => { e.stopPropagation(); onPick(r.id); closePicker(); };
      grid.appendChild(btn);
    });
    pop.appendChild(grid);
    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.textContent = 'ล้างโทเคนตรงนี้';
    clearBtn.className = 'clear';
    clearBtn.onclick = (e) => { e.stopPropagation(); onPick(null); closePicker(); };
    pop.appendChild(clearBtn);

    document.body.appendChild(pop);
    const w = pop.offsetWidth;
    const h = pop.offsetHeight;
    pop.style.left = `${Math.max(8, Math.min(rect.left + rect.width / 2 - w / 2, window.innerWidth - w - 8))}px`;
    const below = rect.bottom + 8;
    pop.style.top = `${below + h > window.innerHeight - 8 ? Math.max(8, rect.top - h - 8) : below}px`;
    openPopoverEl = pop;
    setTimeout(() => document.addEventListener('click', onOutsideClick, true), 0);
  }

  return { openPicker, closePicker };
})();
