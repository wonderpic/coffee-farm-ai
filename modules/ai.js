function getAIRecommendation(data){

  let result = [];

  // ======================
  // ARABIKA
  // ======================

  if(
    data.coffeeType === "Arabika"
    &&
    data.altitude < 1000
  ){

    result.push(
      "⚠️ Arabika ideal di atas 1000 mdpl menurut pedoman Puslitkoka"
    );
  }

  // ======================
  // ROBUSTA
  // ======================

  if(
    data.coffeeType === "Robusta"
    &&
    data.altitude > 1000
  ){

    result.push(
      "⚠️ Robusta kurang optimal pada mdpl terlalu tinggi"
    );
  }

  // ======================
  // UMUR
  // ======================

  if(data.age < 12){

    result.push(
      "🌱 Fokus pembentukan akar dan pertumbuhan vegetatif"
    );
  }

  if(data.age >= 12){

    result.push(
      "☕ Monitoring cabang produksi mulai diperlukan"
    );
  }

  // ======================
  // MUSIM
  // ======================

  if(data.season === "Musim Hujan"){

    result.push(
      "🌧️ Waspadai jamur daun dan kelembapan berlebih"
    );

    result.push(
      "🧪 Hindari pemupukan saat hujan terlalu deras"
    );
  }

  if(data.season === "Musim Kemarau"){

    result.push(
      "💧 Gunakan mulsa untuk menjaga kelembapan tanah"
    );
  }

  // ======================
  // PUPUK
  // ======================

  if(data.fertilizer === "Organik"){

    result.push(
      "♻️ Organik membantu struktur tanah jangka panjang"
    );
  }

  if(data.fertilizer === "Kimia"){

    result.push(
      "🧪 Kontrol dosis NPK agar tidak over-fertilizing"
    );
  }

  // ======================
  // KEPADATAN
  // ======================

  if(data.treeCount > 1000){

    result.push(
      "🌿 Kebun padat memerlukan monitoring hama lebih rutin"
    );
  }

  return result;
}
