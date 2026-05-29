function getSchedule(age){

  if(age < 6){

    return [
      "Penyiraman rutin",
      "Kontrol naungan",
      "Pemupukan awal"
    ];
  }

  if(age < 24){

    return [
      "Pemupukan vegetatif",
      "Penyiangan gulma",
      "Monitoring daun"
    ];
  }

  return [
    "Pemangkasan produksi",
    "Monitoring hama",
    "Pemupukan rutin"
  ];
}
