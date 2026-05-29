async function loadDashboard(){

  const snap =
    await db.collection("farms").get();

  let html =
    `<div class="dashboard-grid">`;

  snap.forEach(doc => {

    const data =
      doc.data();

    // ======================
    // DEFAULT SCHEDULE
    // ======================

    const schedules =
      data.schedules || [];

    html += `

    <div class="farm-card">

      <div class="farm-top">

        <div>

          <div class="farm-title">
            🌿 ${data.name || '-'}
          </div>

          <div class="farm-subtitle">
            ${data.coffeeType || '-'}
          </div>

        </div>

        <div class="farm-badge">

          ${data.age || 0} bulan

        </div>

      </div>

      <!-- INFO -->

      <div class="info-list">

        <div class="info-item">

          <span>
            ⛰️ Ketinggian
          </span>

          <b>
            ${data.altitude || 0} mdpl
          </b>

        </div>

        <div class="info-item">

          <span>
            🌱 Jumlah Pohon
          </span>

          <b>
            ${data.treeCount || 0}
          </b>

        </div>

        <div class="info-item">

          <span>
            🌦️ Musim
          </span>

          <b>
            ${data.season || '-'}
          </b>

        </div>

      </div>

      <!-- AI -->

      <div class="schedule-box">

        <h3>
          🤖 AI Recommendation
        </h3>

        <ul>

          ${
            getAIRecommendation(data)
            .map(item =>
              `<li>${item}</li>`
            ).join("")
          }

        </ul>

      </div>

      <!-- SCHEDULE -->

      <div class="schedule-box">

        <h3>
          📅 Jadwal Perawatan
        </h3>

        <div class="task-list">

          ${
            schedules.length > 0

            ?

            schedules.map((item,index)=>{

              const overdue =

                (
                  new Date(item.date)
                  <
                  new Date()
                )

                &&

                !item.done;

              return `

              <div class="
                schedule-item
                ${overdue ? 'overdue' : ''}
              ">

                <label class="task-item">

                  <input
                    type="checkbox"

                    ${item.done ? 'checked' : ''}

                    onchange="
                      toggleSchedule(
                        '${doc.id}',
                        ${index},
                        this.checked
                      )
                    "
                  >

                  <div>

                    <b>
                      ${item.type}
                    </b>

                    <br>

                    📅 ${item.date}

                  </div>

                </label>

                ${
                  overdue

                  ?

                  `
                  <div class="warning">
                    🚨 Jadwal terlewat
                  </div>
                  `

                  :

                  ''

                }

              </div>

              `;

            }).join("")

            :

            `
            <div class="warning">
              Belum ada jadwal
            </div>
            `
          }

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
