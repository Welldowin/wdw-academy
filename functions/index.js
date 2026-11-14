const functions = require("firebase-functions");

// ฟังก์ชัน HTTP ง่าย ๆ
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Well-Do-Win Academy!");
});
