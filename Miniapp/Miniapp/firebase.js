// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// 🔥 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAIgnpl1kL7JsnBsxUD_8QM-OrnHA4JaAA",
  authDomain: "miniapp-f641f.firebaseapp.com",
  databaseURL: "https://miniapp-f641f-default-rtdb.firebaseio.com",
  projectId: "miniapp-f641f",
  storageBucket: "miniapp-f641f.firebasestorage.app",
  messagingSenderId: "650123816960",
  appId: "1:650123816960:web:dec31803b3cb73a0ba68e5"
};

// 🔥 Initialize
const app = initializeApp(firebaseConfig);

// 🔥 Realtime Database
export const db = getDatabase(app);
