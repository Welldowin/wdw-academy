'use strict';

/**
 * นิยามบทบาททั้งหมดที่รองรับในเวอร์ชันนี้ (ชุดพื้นฐาน)
 * - id: ใช้เป็นคีย์ภายในระบบ และใช้แมปกับไฟล์ภาพ public/assets/cards/<id>.webp
 * - team: 'werewolf' | 'village' | 'tanner'
 * - night: true ถ้าตื่นตอนกลางคืน (ไม่ได้แปลว่ามี "แอคชัน" เสมอ)
 * - order: ลำดับการเรียกตอนกลางคืน (เลขน้อยเรียกก่อน) null = ไม่ถูกเรียก
 * - action: ชนิดแอคชันที่ทำได้ตอนกลางคืน (ใช้โดย engine.js), null = ไม่มี
 */
const ROLES = {
  werewolf: {
    id: 'werewolf', nameTh: 'มนุษย์หมาป่า', team: 'werewolf',
    night: true, order: 10, action: 'werewolf',
    desc: 'ถ้าเป็นหมาป่าตัวเดียว สามารถดูไพ่กลางได้ 1 ใบ ถ้ามีมากกว่า 1 ตัว จะเห็นกันเอง',
  },
  minion: {
    id: 'minion', nameTh: 'สมุนรับใช้', team: 'werewolf',
    night: true, order: 20, action: 'minion',
    desc: 'เห็นว่าใครเป็นมนุษย์หมาป่า แต่หมาป่าไม่รู้จักคุณ',
  },
  seer: {
    id: 'seer', nameTh: 'ผู้หยั่งรู้', team: 'village',
    night: true, order: 30, action: 'seer',
    desc: 'ดูไพ่ของผู้เล่นอื่น 1 คน หรือไพ่กลาง 2 ใบ',
  },
  robber: {
    id: 'robber', nameTh: 'โจร', team: 'village',
    night: true, order: 40, action: 'robber',
    desc: 'สลับไพ่ตัวเองกับผู้เล่นอื่น 1 คน แล้วดูไพ่ใหม่ของตัวเอง',
  },
  troublemaker: {
    id: 'troublemaker', nameTh: 'ผู้ก่อกวน', team: 'village',
    night: true, order: 50, action: 'troublemaker',
    desc: 'สลับไพ่ของผู้เล่นอื่น 2 คน โดยไม่ดู',
  },
  drunk: {
    id: 'drunk', nameTh: 'ขี้เมา', team: 'village',
    night: true, order: 60, action: 'drunk',
    desc: 'สลับไพ่ตัวเองกับไพ่กลาง 1 ใบ โดยไม่ดู',
  },
  insomniac: {
    id: 'insomniac', nameTh: 'คนนอนไม่หลับ', team: 'village',
    night: true, order: 70, action: 'insomniac',
    desc: 'ตื่นเป็นคนสุดท้าย ดูไพ่ตัวเองว่าเปลี่ยนไปหรือไม่',
  },
  hunter: {
    id: 'hunter', nameTh: 'นายพราน', team: 'village',
    night: false, order: null, action: null,
    desc: 'ถ้าคุณถูกโหวตตาย คนที่คุณชี้ไว้จะตายตามไปด้วย',
  },
  tanner: {
    id: 'tanner', nameTh: 'ยาจก', team: 'tanner',
    night: false, order: null, action: null,
    desc: 'ชนะคนเดียวถ้าคุณถูกโหวตตาย',
  },
  villager: {
    id: 'villager', nameTh: 'ชาวบ้าน', team: 'village',
    night: false, order: null, action: null,
    desc: 'ไม่มีความสามารถพิเศษ ใช้การพูดคุยและสังเกตเท่านั้น',
  },
};

// ลำดับการเรียกตอนกลางคืน (เฉพาะบทบาทที่ night=true) เรียงตาม order
const NIGHT_ORDER = Object.values(ROLES)
  .filter((r) => r.night)
  .sort((a, b) => a.order - b.order)
  .map((r) => r.id);

function roleInfo(id) {
  return ROLES[id] || null;
}

module.exports = { ROLES, NIGHT_ORDER, roleInfo };
