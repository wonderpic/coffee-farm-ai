console.log("Coffee Farm AI START");

// ==========================
// FIREBASE CONFIG
// ==========================
const firebaseConfig = {
  apiKey: "AIzaSyAo0zYNRGCa-XaNZgqTijz0P6uz_76pKGQ",
  authDomain: "coffee-farm-ai.firebaseapp.com",
  projectId: "coffee-farm-ai",
  storageBucket: "coffee-farm-ai.firebasestorage.app",
  messagingSenderId: "450326520755",
  appId: "1:450326520755:web:19e3ed232f919adf6aa1c6"
};

// INIT FIREBASE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ==========================
// STATUS APP
// ==========================
document.getElementById("status").innerText =
  "☕ Coffee Farm AI Ready ✔";

// ==========================
// SAVE FARM
// ==========================
window.saveFarm = async function () {
  const name = document.getElementById("farmName").value;
  const age = Number(document.getElementById("farmAge").value);

  if (!name) {
    alert("Masukkan nama kebun");
    return;
  }

  await db.collection("farms").add({
    name: name,
    age: age,
    created: new Date()
  });

  document.getElementById("farmName").value = "";
  document.getElementById("farmAge").value = "";

  loadData();
};

// ==========================
// STATUS KEBUN
// ==========================
function getStatus(age) {
  if (age < 6) {
    return "🌱 Bibit (Perlu perawatan intensif)";
  }

  if (age < 24) {
    return "🌿 Produktif awal (stabil)";
  }

  return "☕ Produktif (monitoring rutin)";
}

// ==========================
// JADWAL PERAWATAN
// ==========================
function getSchedule(age) {
  if (age < 6) {
    return [
      "Penyiraman rutin",
      "Kontrol kelembapan",
      "Naungan tanaman"
    ];
  }

  if (age < 24) {
    return [
      "Pemupukan NPK",
      "Penyiangan gulma",
      "Monitoring daun"
    ];
  }

  return [
    "Pemangkasan produksi",
    "Monitoring hama",
    "Pemupukan rutin",
    "Kontrol buah kopi"
  ];
}

// ==========================
// LOAD DASHBOARD
// ==========================
async function loadData() {
  const snap = await db.collection("farms").get();

  let html = `
    <h2>📊 Dashboard Kebun</h2>
  `;

  snap.forEach(doc => {
    const data = doc.data();

    html += `
      <div style="
        border:1px solid #ddd;
        border-radius:16px;
        padding:16px;
        margin:12px 0;
        background:#f9f9f9;
      ">

        <h3>🌿 ${data.name}</h3>

        <p>
          📅 Umur:
          <b>${data.age || 0}</b> bulan
        </p>

        <p>
          📌 Status:
          <b>${getStatus(data.age || 0)}</b>
        </p>

        <p>🧠 Jadwal Perawatan:</p>

        <ul>
          ${getSchedule(data.age || 0)
            .map(item => `<li>${item}</li>`)
            .join("")}
        </ul>

      </div>
    `;
  });

  document.getElementById("list").innerHTML = html;
}

// LOAD SAAT APP DIBUKA
loadData();
