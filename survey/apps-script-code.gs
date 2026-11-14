/**
 * Google Apps Script backend for the Loei business survey system.
 * Deploy from Extensions > Apps Script inside the target Google Sheet
 * (Deploy > New deployment > type "Web app", Execute as "Me",
 * Who has access "Anyone"). Paste the resulting /exec URL into:
 *   - survey/index.html         (SUBMIT_URL)          — form 1
 *   - survey/tiktok-live.html   (SUBMIT_URL)           — form 2
 *   - survey/admin.html         (REPORT_ENDPOINT)
 *
 * After editing this file, use Deploy > Manage deployments > pencil icon
 * > "New version" > Deploy, so the exec URL stays the same (a brand-new
 * deployment would get a different URL and break the pages above).
 *
 * Handles two forms in one script, each in its own sheet tab:
 *   1. Business direction survey       -> sheet "Responses"
 *   2. TikTok live-selling registration -> sheet "TikTokLiveResponses"
 *      (also saves the two uploaded images to a Drive folder)
 */

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

// ---------- Form 1: business direction survey ----------

const SHEET_NAME = 'Responses';
const HEADERS = [
  'timestamp',
  'businessType', 'businessTypeOther',
  'customerGroups', 'customerGroupsOther',
  'onlineTools', 'onlineToolsOther',
  'toolReasons', 'toolReasonsOther'
];

// ---------- Form 2: TikTok live-selling registration ----------

const TIKTOK_SHEET_NAME = 'TikTokLiveResponses';
const TIKTOK_HEADERS = [
  'timestamp', 'name', 'phone', 'productType',
  'labelImageId', 'labelImageUrl',
  'sourceImageId', 'sourceImageUrl',
  'shipping'
];
const TIKTOK_IMAGE_FOLDER_NAME = 'TikTok Live Survey Images';

// ---------- entry points ----------

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.formType === 'tiktok_live') {
      return handleTiktokLiveSubmit(data);
    }
    return handleSurvey1Submit(data);
  } catch (err) {
    return jsonResponse({ok: false, error: err.message});
  }
}

function doGet(e) {
  const action = e.parameter.action;

  if (action === 'report') {
    if (e.parameter.username !== ADMIN_USERNAME || e.parameter.password !== ADMIN_PASSWORD) {
      return jsonResponse({error: 'unauthorized'});
    }
    return jsonResponse({responses: getSurvey1Responses()});
  }

  if (action === 'tiktokReport') {
    if (e.parameter.username !== ADMIN_USERNAME || e.parameter.password !== ADMIN_PASSWORD) {
      return jsonResponse({error: 'unauthorized'});
    }
    try {
      const docxUrl = generateTiktokDocxReport();
      return jsonResponse({ok: true, docxUrl});
    } catch (err) {
      return jsonResponse({ok: false, error: err.message});
    }
  }

  return jsonResponse({ok: true, message: 'Business survey API is running'});
}

// ---------- Form 1 logic (unchanged behavior) ----------

function handleSurvey1Submit(data) {
  const sheet = getSheet();
  sheet.appendRow([
    new Date(),
    data.businessType || '',
    data.businessTypeOther || '',
    (data.customerGroups || []).join('; '),
    data.customerGroupsOther || '',
    (data.onlineTools || []).join('; '),
    data.onlineToolsOther || '',
    (data.toolReasons || []).join('; '),
    data.toolReasonsOther || ''
  ]);
  return jsonResponse({ok: true});
}

function getSurvey1Responses() {
  const sheet = getSheet();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1); // skip header row
  return rows
    .filter((r) => r[1]) // skip fully blank rows
    .map((r) => ({
      businessType: r[1],
      businessTypeOther: r[2],
      customerGroups: r[3] ? String(r[3]).split('; ').filter(Boolean) : [],
      customerGroupsOther: r[4],
      onlineTools: r[5] ? String(r[5]).split('; ').filter(Boolean) : [],
      onlineToolsOther: r[6],
      toolReasons: r[7] ? String(r[7]).split('; ').filter(Boolean) : [],
      toolReasonsOther: r[8]
    }));
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

// ---------- Form 2 logic (TikTok live-selling) ----------

function handleTiktokLiveSubmit(data) {
  const folder = getTiktokImageFolder();
  const label = saveImage(data.labelImage, folder);
  const source = saveImage(data.sourceImage, folder);

  const sheet = getTiktokSheet();
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.productType || '',
    label.id, label.url,
    source.id, source.url,
    data.shipping || ''
  ]);
  return jsonResponse({ok: true});
}

function getTiktokSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(TIKTOK_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(TIKTOK_SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(TIKTOK_HEADERS);
  }
  return sheet;
}

function getTiktokImageFolder() {
  const folders = DriveApp.getFoldersByName(TIKTOK_IMAGE_FOLDER_NAME);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(TIKTOK_IMAGE_FOLDER_NAME);
}

// Saves a {filename, mimeType, base64} image object to Drive and returns
// {id, url}. Sharing is set to "anyone with the link can view" so the
// links work when opened from the admin dashboard or the generated .docx.
function saveImage(imgObj, folder) {
  if (!imgObj || !imgObj.base64) return {id: '', url: ''};
  const bytes = Utilities.base64Decode(imgObj.base64);
  const blob = Utilities.newBlob(bytes, imgObj.mimeType || 'image/jpeg', imgObj.filename || 'image.jpg');
  const file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return {id: file.getId(), url: file.getUrl()};
}

// Builds a Google Doc (font Angsana New, size 16) with every response's
// data + both images, plus a short summary section, shares it so the
// export link works without login, and returns the .docx export URL.
function generateTiktokDocxReport() {
  const sheet = getTiktokSheet();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1).filter((r) => r[1]); // has a name

  const doc = DocumentApp.create('TikTok Live Survey Report ' + formatDateTh(new Date()));
  const body = doc.getBody();

  const title = body.appendParagraph('รายงานผลการลงทะเบียนไลฟ์สดขายสินค้าผ่าน TikTok');
  title.setHeading(DocumentApp.ParagraphHeading.TITLE);
  styleText(title, 22);

  const total = rows.length;
  const upphohkCount = rows.filter((r) => r[3] === 'อุปโภค').length;
  const boriphokCount = rows.filter((r) => r[3] === 'บริโภค').length;
  const flashCount = rows.filter((r) => r[8] === 'Flash').length;
  const jtCount = rows.filter((r) => r[8] === 'J&T').length;

  const summaryHeading = body.appendParagraph('สรุปภาพรวม');
  summaryHeading.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  styleText(summaryHeading, 18);

  appendLine(body, 'จำนวนผู้ลงทะเบียนทั้งหมด: ' + total + ' ราย');
  appendLine(body, 'สินค้าอุปโภค: ' + upphohkCount + ' ราย, สินค้าบริโภค: ' + boriphokCount + ' ราย');
  appendLine(body, 'ขนส่ง Flash Express: ' + flashCount + ' ราย, J&T Express: ' + jtCount + ' ราย');

  body.appendPageBreak();

  const detailHeading = body.appendParagraph('รายละเอียดผู้ลงทะเบียนรายบุคคล');
  detailHeading.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  styleText(detailHeading, 18);

  rows.forEach((r, idx) => {
    const [timestamp, name, phone, productType, labelId, , sourceId] = r;
    const shipping = r[8];

    const nameHeading = body.appendParagraph((idx + 1) + '. ' + name);
    nameHeading.setHeading(DocumentApp.ParagraphHeading.HEADING2);
    styleText(nameHeading, 16);

    appendLine(body, 'วันที่ลงทะเบียน: ' + formatDateTh(timestamp));
    appendLine(body, 'เบอร์โทรศัพท์: ' + phone);
    appendLine(body, 'ประเภทสินค้า: ' + productType);
    appendLine(body, 'บริษัทขนส่ง: ' + shipping);

    appendLine(body, (productType === 'บริโภค' ? 'รูปฉลากสินค้า อย.:' : 'รูปฉลากสินค้า:'));
    insertImageById(body, labelId);

    appendLine(body, 'รูปแหล่งผลิตสินค้า:');
    insertImageById(body, sourceId);

    body.appendHorizontalRule();
  });

  doc.saveAndClose();
  const file = DriveApp.getFileById(doc.getId());
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return 'https://docs.google.com/document/d/' + doc.getId() + '/export?format=docx';
}

function appendLine(body, text) {
  const p = body.appendParagraph(text);
  styleText(p, 16);
  return p;
}

function styleText(paragraph, fontSize) {
  paragraph.editAsText().setFontFamily('Angsana New').setFontSize(fontSize);
}

function insertImageById(body, fileId) {
  if (!fileId) {
    appendLine(body, '(ไม่มีรูปภาพ)');
    return;
  }
  try {
    const blob = DriveApp.getFileById(fileId).getBlob();
    const img = body.appendImage(blob);
    const maxWidth = 320;
    if (img.getWidth() > maxWidth) {
      const ratio = maxWidth / img.getWidth();
      img.setWidth(maxWidth);
      img.setHeight(Math.round(img.getHeight() * ratio));
    }
  } catch (err) {
    appendLine(body, '(ไม่สามารถโหลดรูปภาพได้: ' + err.message + ')');
  }
}

function formatDateTh(date) {
  return Utilities.formatDate(new Date(date), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
}

// ---------- shared helper ----------

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
