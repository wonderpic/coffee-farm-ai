function getReminders(age){

  let reminders = [];

  if(age > 12){
    reminders.push(
      "🚨 Monitoring hama minggu ini belum dilakukan"
    );
  }

  if(age > 6){
    reminders.push(
      "🚨 Jadwal pemupukan mendekat"
    );
  }

  return reminders;
}
