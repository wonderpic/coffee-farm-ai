async function loadDashboard(){

  const snap =
    await db.collection("farms").get();

  let html = "";

  snap.forEach(doc => {

    const data = doc.data();

    html += `

    <div class="farm-card">

      <div class="farm-title">
        🌿 ${data.name}
      </div>

      <div class="info-grid">

        <div class="info-item">
          ☕ Jenis:
          <b>${data.coffeeType}</b>
        </div>

        <div class="info-item">
          ⛰️ ${data.altitude} mdpl
        </div>

        <div class="info-item">
          🌱 ${data.treeCount} pohon
        </div>

        <div class="info-item">
          📅 ${data.age} bulan
        </div>

        <div class="info-item">
          🧪 ${data.fertilizer}
        </div>

        <div class="info-item">
          🌦️ ${data.season}
        </div>

      </div>

      <div class="schedule-box">

        <h3>
          🧠 Jadwal Rekomendasi
        </h3>

        <ul>

        ${getSchedule(data.age)
          .map(item =>
            `<li>${item}</li>`
          ).join("")}

        </ul>

      </div>

      <div>

      ${getReminders(data.age)
        .map(item =>
          `<div class="warning">${item}</div>`
        ).join("")}

      </div>

      <div class="action-buttons">

        <button onclick="editFarm('${doc.id}')">
          ✏️ Edit
        </button>

        <button
          class="delete-btn"
          onclick="deleteFarm('${doc.id}')"
        >
          🗑️ Hapus
        </button>

      </div>

    </div>

    `;
  });

  document.getElementById("dashboard").innerHTML =
    html;
}
