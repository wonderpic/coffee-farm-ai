import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

console.log("Firebase ready ✔");

// 👇 UI sederhana
document.body.innerHTML += `
  <hr>
  <h3>🌱 Tambah Kebun</h3>
  <input id="farmName" placeholder="Nama Kebun">
  <button id="saveBtn">Simpan</button>

  <h3>📊 Daftar Kebun</h3>
  <div id="list"></div>
`;

// ➕ SIMPAN KE FIRESTORE
document.addEventListener("click", async (e) => {
  if (e.target.id === "saveBtn") {
    const name = document.getElementById("farmName").value;

    if (!name) return alert("Isi nama kebun dulu");

    await addDoc(collection(db, "farms"), {
  name: name,
  age: Number(age),
  created: new Date()
});
    });

    document.getElementById("farmName").value = "";

    loadFarms();
  }
});

// 📊 AMBIL DATA
async function loadFarms() {
  const querySnapshot = await getDocs(collection(db, "farms"));

  let html = "";

  querySnapshot.forEach((doc) => {
    html += `<p>🌿 ${doc.data().name}</p>`;
  });

  document.getElementById("list").innerHTML = html;
}

loadFarms();
