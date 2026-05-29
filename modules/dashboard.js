async function loadDashboard(){

  const snap =
    await db.collection("farms").get();

  let html = `
    <div class="dashboard-grid">
  `;

  snap.forEach(doc => {

    const data = doc.data();

    const tasks = data.tasks || {

      fertilizing:false,
      pruning:false,
      pest:false,
      watering:false

    };

    const unfinished =
      Object.values(tasks)
        .filter(v => !v).length;

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

      <div class="schedule-box">

        <h3>
          ✅ Checklist Perawatan
        </h3>

        <label>
          <input
            type="checkbox"
            ${tasks.fertilizing ? "checked" : ""}
            onchange="
              updateTask(
                '${doc.id}',
                'fertilizing',
                this.checked
              )
            "
          >
          Pemupukan
        </label>

        <br><br>

        <label>
          <input
            type="checkbox"
            ${tasks.pruning ? "checked" : ""}
            onchange="
              updateTask(
                '${doc.id}',
                'pruning',
                this.checked
              )
            "
          >
          Pruning
        </label>

        <br><br>

        <label>
          <input
            type="checkbox"
            ${tasks.pest ? "checked" : ""}
            onchange="
              updateTask(
                '${doc.id}',
                'pest',
                this.checked
              )
            "
          >
          Monitoring Hama
        </label>

        <br><br>

        <label>
          <input
            type="checkbox"
            ${tasks.watering ? "checked" : ""}
            onchange="
              updateTask(
                '${doc.id}',
                'watering',
                this.checked
              )
            "
          >
          Penyiraman
        </label>

      </div>

      ${
        unfinished > 0
        ?
        `
        <div class="warning">

          🚨 ${unfinished}
          pekerjaan belum selesai

        </div>
        `
        :
        `
        <div class="warning"
          style="
            background:#d1e7dd;
            color:#0f5132;
          "
        >

          ✅ Semua pekerjaan selesai

        </div>
        `
      }

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
