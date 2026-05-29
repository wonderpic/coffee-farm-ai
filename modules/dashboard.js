async function loadDashboard(){

  const snap =
    await db.collection("farms").get();

  let html = "";

  snap.forEach(doc => {

    const data = doc.data();

    html += `

    <div class="farm-card">

      <h2>
        🌿 ${data.name}
      </h2>

      <p>
        ☕ ${data.coffeeType}
      </p>

      <p>
        ⛰️ ${data.altitude} mdpl
      </p>

      <p>
        🌱 ${data.treeCount} pohon
      </p>

      <p>
        📅 ${data.age} bulan
      </p>

      <p>
        🧪 ${data.fertilizer}
      </p>

      <p>
        🌦️ ${data.season}
      </p>

      <h3>
        🧠 Jadwal Rekomendasi
      </h3>

      <ul>

      ${getSchedule(data.age)
        .map(item => `<li>${item}</li>`)
        .join("")}

      </ul>

      <h3>
        🚨 Reminder
      </h3>

      ${getReminders(data.age)
        .map(item =>
          `<div class="warning">${item}</div>`
        ).join("")}

      <button onclick="editFarm('${doc.id}')">
        Edit Data Kebun
      </button>

    </div>

    `;
  });

  document.getElementById("dashboard").innerHTML =
    html;
}
