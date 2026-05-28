console.log("APP START");

const firebaseConfig = {
  apiKey: "AIzaSyAo0zYNRGCa-XaNZgqTijz0P6uz_76pKGQ",
  authDomain: "coffee-farm-ai.firebaseapp.com",
  projectId: "coffee-farm-ai",
  storageBucket: "coffee-farm-ai.firebasestorage.app",
  messagingSenderId: "450326520755",
  appId: "1:450326520755:web:19e3ed232f919adf6aa1c6"
};

// INIT FIREBASE (compat version)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("status").innerText = "Firebase Ready ✔";

window.saveFarm = async function () {
  const name = document.getElementById("farmName").value;

  await db.collection("farms").add({
  name: name,
  age: 12,
  created: new Date()
});
  });

  loadData();
};

async function loadData() {
  const snap = await db.collection("farms").get();

  let html = "";

  snap.forEach(doc => {
    html += `<p>🌿 ${doc.data().name}</p>`;
  });

  document.getElementById("list").innerHTML = html;
}

loadData();
