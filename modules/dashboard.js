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

      <div class="farm-top">

        <div>

          <div class="farm-title">
            🌿 ${data.name}
          </div>

          <div class="farm-subtitle">
            ${data.coffeeType}
          </div>

        </div>

        <div class="farm-badge">

          ${data.age} bulan

        </div>

      </div>

      <div class="info-list">

        <div class="info-item">
          <span>⛰️ Ketinggian</span>
          <b>${data.altitude} mdpl</b>
        </div>

        <div class="info-item">
          <span>🌱 Jumlah Pohon</span>
          <b>${data.treeCount}</b>
        </div>

        <div class="info-item">
          <span>🧪 Pupuk</span>
          <b>${data.fertilizer}</b>
        </div>

        <div class="info-item">
          <span>🌦️ Musim</span>
          <b>${data.season}</b>
        </div>

      </div>

      <!-- AI RECOMMENDATION -->
      <div class="schedule-box">

        <h3>
          🤖 AI Recommendation
        </h3>

        <ul>

          ${getAIRecommendation(data)
            .map(item =>
              `<li>${item}</li>`
            ).join("")}

        </ul>

      </div>

      <!-- TASK -->
      <div class="schedule-box">

        <h3>
          ✅ Checklist Perawatan
        </h3>

        <div class="task-list">

          <label class="task-item">

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

          <label class="task-item">

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

          <label class="task-item">

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

          <label class="task-item">

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

      </div>

      ${
        unfinished > 0
        ?
        `
        <div class="warning">
          🚨 ${unfinished} pekerjaan belum selesai
        </div>
        `
        :
        `
        <div class="success">
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
