async function loadDashboard(){

  const snap =
    await db.collection("farms").get();

  let html =
    `<div class="dashboard-grid">`;

  snap.forEach(doc => {

    const data =
      doc.data();

    const tasks =
      data.tasks || {};

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

      <!-- INFO -->

      <div class="info-list">

        <div class="info-item">

          <span>
            ⛰️ Ketinggian
          </span>

          <b>
            ${data.altitude} mdpl
          </b>

        </div>

        <div class="info-item">

          <span>
            🌱 Jumlah Pohon
          </span>

          <b>
            ${data.treeCount}
          </b>

        </div>

        <div class="info-item">

          <span>
            🌦️ Musim
          </span>

          <b>
            ${data.season}
          </b>

        </div>

        <div class="info-item">

          <span>
            🧪 Pupuk
          </span>

          <b>
            ${data.fertilizer}
          </b>

        </div>

      </div>

      <!-- AI -->

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

      <!-- SCHEDULE -->

      <div class="schedule-box">

        <h3>
          📅 Jadwal Perawatan
        </h3>

        <ul>

          ${getSchedule(data)
            .map(item =>
              `<li>${item}</li>`
            ).join("")}

        </ul>

      </div>

      <!-- TASK -->

      <div class="schedule-box">

        <h3>
          ✅ Checklist
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

        </div>

      </div>

      <!-- ACTION -->

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
