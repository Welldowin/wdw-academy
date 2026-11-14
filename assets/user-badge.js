/* user-badge.js — แสดง "ชื่อจริง–นามสกุล" ของผู้ใช้ที่ล็อกอิน ไว้มุมขวาบน
   ให้เหมือนกันทุกหน้า (index, courses, contact, about, member ...)
   - ไม่ใช้ position:absolute ทับเมนู : ฝังไว้ในแถบเมนูโดยตรง
   - รองรับทั้งจอคอมและมือถือ/แท็บเล็ต (มีรายการในเมนู ☰ ด้วย)
   โหลดคู่กับ assets/user-badge.css  ->  <script src="assets/user-badge.js" defer></script>
*/
(function () {
  'use strict';

  var PROFILE_API_URL =
    'https://script.google.com/macros/s/AKfycbz0SSt8SDKtSEGwJ3PCpcLKCi7CcTs0l6tPEci7VMqsh0GrPX5hRo1bAizju63LFiKi/exec';

  var userId = localStorage.getItem('userId');
  var userEmail = (localStorage.getItem('userEmail') || '').trim();

  function readProfile() {
    try {
      return JSON.parse(localStorage.getItem('studentProfile') || 'null') || {};
    } catch (e) {
      return {};
    }
  }

  function fullNameFrom(p) {
    if (!p) return '';
    return ((p.firstName || '').trim() + ' ' + (p.lastName || '').trim()).trim();
  }

  // ลำดับความสำคัญ: ชื่อจริง-นามสกุล > userDisplayName > อีเมล > "สมาชิก"
  function resolveName() {
    return (
      fullNameFrom(readProfile()) ||
      (localStorage.getItem('userDisplayName') || '').trim() ||
      userEmail ||
      'สมาชิก'
    );
  }

  function logout(e) {
    if (e) e.preventDefault();
    ['userId', 'userEmail', 'userDisplayName', 'studentProfile', 'userProfile', 'profileCompleted']
      .forEach(function (k) { localStorage.removeItem(k); });
    window.location.href = 'index.html';
  }

  function buildBadge(modifier) {
    var wrap = document.createElement('div');
    wrap.className = 'wdw-userbadge ' + modifier;

    var wave = document.createElement('span');
    wave.className = 'wdw-userbadge__wave';
    wave.setAttribute('aria-hidden', 'true');
    wave.textContent = '👋';

    var name = document.createElement('span');
    name.className = 'wdw-userbadge__name';
    name.id = 'userNameDisplay'; // คงชื่อ id เดิมไว้ เผื่อสคริปต์หน้าอื่นอ้างถึง
    name.textContent = currentName;

    var out = document.createElement('a');
    out.className = 'wdw-userbadge__logout';
    out.href = '#';
    out.textContent = 'ออกจากระบบ';
    out.addEventListener('click', logout);

    wrap.appendChild(wave);
    wrap.appendChild(name);
    wrap.appendChild(out);
    return wrap;
  }

  var currentName = resolveName();

  function mount() {
    if (!userId) {
      // ยังไม่ล็อกอิน: เอาแบดจ์เก่าที่ค้างออก แล้วปล่อยปุ่มเข้าสู่ระบบไว้ตามเดิม
      document.querySelectorAll('.wdw-userbadge').forEach(function (n) { n.remove(); });
      return;
    }

    var onLightBar = !!document.querySelector('.topbar');
    var theme = onLightBar ? 'wdw-userbadge--light' : 'wdw-userbadge--dark';

    // ----- จุดวางบนจอคอม (เลือกตามโครงหน้า) -----
    var cta = document.querySelector('.topbar .nav .cta');       // contact / about
    var authButtons = document.querySelector('.auth-buttons');   // index / courses
    var legacyMenu = document.querySelector('.user-menu');       // member / dashboard

    if (!document.querySelector('.wdw-userbadge:not(.wdw-userbadge--drop)')) {
      if (cta) {
        cta.innerHTML = '';
        cta.appendChild(buildBadge(theme));
        cta.style.display = '';
      } else if (authButtons) {
        authButtons.innerHTML = '';
        authButtons.appendChild(buildBadge(theme));
        authButtons.style.display = '';
      } else if (legacyMenu) {
        legacyMenu.innerHTML = '';
        legacyMenu.appendChild(buildBadge(theme));
        legacyMenu.style.display = 'flex';
      }
    }

    // ซ่อนปุ่ม login/register ที่อาจยังโผล่อยู่
    if (authButtons && !authButtons.querySelector('.wdw-userbadge')) authButtons.style.display = 'none';

    // ----- รายการในเมนูมือถือ ☰ -----
    var drop = document.getElementById('mobileDropdown') || document.querySelector('.mobile-dropdown');
    if (drop && !drop.querySelector('.wdw-userbadge--drop')) {
      drop.insertBefore(buildBadge('wdw-userbadge--drop'), drop.firstChild);
      drop.querySelectorAll('a').forEach(function (a) {
        if (/login\.html|register\.html/i.test(a.getAttribute('href') || '')) a.style.display = 'none';
      });
    }
  }

  function setName(nm) {
    currentName = nm;
    document.querySelectorAll('.wdw-userbadge__name').forEach(function (el) { el.textContent = nm; });
  }

  function refreshFromServer() {
    if (!userId && !userEmail) return;
    var qs = new URLSearchParams({ action: 'getDashboard', userId: userId || '', email: userEmail || '' });
    fetch(PROFILE_API_URL + '?' + qs.toString())
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j || j.status !== 'ok' || !j.profile) return;
        var p = j.profile;
        var merged = Object.assign(readProfile(), {
          firstName: p.firstName || '',
          lastName: p.lastName || '',
          nickname: p.nickname || '',
          level: p.level || '',
          school: p.school || '',
          phone: p.phone || '',
          parentPhone: p.parentPhone || ''
        });
        try { localStorage.setItem('studentProfile', JSON.stringify(merged)); } catch (e) {}
        var fresh = fullNameFrom(p);
        if (fresh && fresh !== currentName) setName(fresh);
      })
      .catch(function () {});
  }

  function init() {
    mount();
    if (userId) refreshFromServer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
