import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
      apiKey: "AIzaSyBEEb59wVHs_uHKW87P6n54A6NRzSlyElE",
      authDomain: "well-do-win-academy.firebaseapp.com",
      projectId: "well-do-win-academy",
      appId: "1:804445893350:web:935fedc5735f504636c127"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.firebaseAuth = auth;
window.firebaseOnAuthStateChanged = onAuthStateChanged;

export { auth, onAuthStateChanged };