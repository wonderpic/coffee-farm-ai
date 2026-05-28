import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

console.log("SCRIPT + FIREBASE LOADING");

const firebaseConfig = {
  apiKey: "AIzaSyAo0zYNRGCa-XaNZgqTijz0P6uz_76pKGQ",
  authDomain: "coffee-farm-ai.firebaseapp.com",
  projectId: "coffee-farm-ai",
  storageBucket: "coffee-farm-ai.firebasestorage.app",
  messagingSenderId: "450326520755",
  appId: "1:450326520755:web:19e3ed232f919adf6aa1c6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// UI dulu (jangan kompleks)
document.body.innerHTML = `
  <h1>☕ Coffee Farm AI</h1>

  <p id="status">Firebase connecting...</p>

  <input id="farmName" placeholder="Nama Kebun">
  <button id="saveBtn">Simpan</button>

  <div id="list"></div>
`;

document.getElementById("status").innerText = "Firebase Ready ✔";

// SAVE DATA
document.getElementById("saveBtn").onclick = async () => {
  const name = document.getElementById("farmName").value;

  await addDoc(collection(db, "farms"), {
    name: name,
    created: new Date()
  });

  loadData();
};

// LOAD DATA
async function loadData() {
  const snap = await getDocs(collection(db, "farms"));

  let html = "";

  snap.forEach(doc => {
    html += `<p>🌿 ${doc.data().name}</p>`;
  });

  document.getElementById("list").innerHTML = html;
}

loadData();
