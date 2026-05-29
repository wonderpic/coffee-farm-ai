function getReminders(data){

  let reminders = [];

  // ======================
  // UMUR
  // ======================

  if(data.age > 12){

    reminders.push(
      "🚨 Monitoring hama minggu ini belum dilakukan"
    );
  }

  // ======================
  // MUSIM
  // ======================

  if(data.season === "Musim Hujan"){

    reminders.push(
      "⚠️ Risiko jamur meningkat pada musim hujan"
    );
  }

  // ======================
  // CHECKLIST
  // ======================

  if(data.tasks){

    const unfinished =
      Object.values(data.tasks)
        .filter(v => !v).length;

    if(unfinished > 0){

      reminders.push(
        `🚨 ${unfinished} tugas kebun belum selesai`
      );
    }

  }

  return reminders;
}
