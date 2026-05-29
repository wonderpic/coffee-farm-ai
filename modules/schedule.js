function getSchedule(data){

  let result = [];

  // ======================
  // TANAMAN MUDA
  // ======================

  if(data.age < 12){

    result.push(
      "🌱 Penyiraman rutin 2–3 kali per minggu"
    );

    result.push(
      "🌿 Kontrol gulma di sekitar batang"
    );

    result.push(
      "🧪 Pemupukan vegetatif dosis ringan"
    );

  }

  // ======================
  // TANAMAN PRODUKTIF AWAL
  // ======================

  if(
    data.age >= 12
    &&
    data.age < 36
  ){

    result.push(
      "✂️ Pruning cabang air setiap bulan"
    );

    result.push(
      "🧪 Pemupukan NPK berkala"
    );

    result.push(
      "🦠 Monitoring jamur daun"
    );

  }

  // ======================
  // TANAMAN PRODUKTIF
  // ======================

  if(data.age >= 36){

    result.push(
      "☕ Monitoring pembentukan buah"
    );

    result.push(
      "✂️ Pemangkasan produksi"
    );

    result.push(
      "🧪 Pemupukan produksi"
    );

  }

  // ======================
  // MUSIM HUJAN
  // ======================

  if(data.season === "Musim Hujan"){

    result.push(
      "🌧️ Kurangi pemupukan saat hujan deras"
    );

    result.push(
      "🦠 Waspadai karat daun dan jamur"
    );

  }

  // ======================
  // MUSIM KEMARAU
  // ======================

  if(data.season === "Musim Kemarau"){

    result.push(
      "💧 Gunakan mulsa untuk menjaga kelembapan"
    );

    result.push(
      "🌱 Prioritaskan penyiraman bibit"
    );

  }

  // ======================
  // ARABIKA
  // ======================

  if(data.coffeeType === "Arabika"){

    result.push(
      "⛰️ Arabika optimal pada suhu dingin dan lembap"
    );

  }

  // ======================
  // ROBUSTA
  // ======================

  if(data.coffeeType === "Robusta"){

    result.push(
      "☀️ Robusta lebih tahan suhu panas"
    );

  }

  return result;
}
