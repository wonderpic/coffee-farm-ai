async function loadDashboard(){

  const snap =
    await db.collection("farms").get();

  let html = `
    <div class="dashboard-grid">
  `;

  snap.forEach(doc => {

    const data = doc.data();

    html += `

    <div class="farm-card">

      <div class="farm-title">
        🌿 ${data.name}
      </div>

      <div class="info-list">

        <div class="info-item">
          ☕ Jenis Kopi:
          <b>${data.coffeeType}</b>
        </div>

        <div class="info-item">
          ⛰️ Ketinggian:
          <b>${data.altitude} mdpl</b>
        </div>

        <div class="info-item">
          🌱 Jumlah Pohon:
          <b>${data.treeCount}</b>
        </div>

        <div class="info-item">
          📅 Umur:
          <b>${data.age} bulan</b>
        </div>

        <div class="info-item">
          🧪 Pupuk:
          <b>${data.fertilizer}</b>
        </div>

        <div class="info-item">
          🌦️ Musim:
          <b>${data.season}</b>
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

      ${getReminders(data.age)
        .map(item =>
          `<div class="warning">${item}</div>`
        ).join("")}

      <div class="action-buttons">

        <button
          class="edit-btn"
          onclick="editFarm('${doc.id}')"
        >
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

  html += `</div>`;

  document.getElementById("dashboard").innerHTML =
    html;
}
