function getAIRecommendation(data){

  let result = [];

  // ======================
  // VARIETAS VS MDPL
  // ======================

  if(
    data.coffeeType === "Arabika"
    &&
    data.altitude < 1000
  ){

    result.push(
      "⚠️ Arabika biasanya optimal di atas 1000 mdpl"
    );
  }

  if(
    data.coffeeType === "Robusta"
    &&
    data.altitude > 1000
  ){

    result.push(
      "⚠️ Robusta kurang optimal di mdpl terlalu tinggi"
    );
  }

  // ======================
  // UMUR TANAMAN
  // ======================

  if(data.age < 12){

    result.push(
      "🌱 Fokus pertumbuhan vegetatif dan pembentukan akar"
    );
  }

  if(data.age >= 12){

    result.push(
      "☕ Mulai monitoring pembentukan cabang produksi"
    );
  }

  // ======================
  // MUSIM
  // ======================

  if(data.season === "Musim Hujan"){

    result.push(
      "🌧️ Hindari pemupukan saat hujan terlalu deras"
    );

    result.push(
      "🦠 Waspadai jamur dan kelembapan berlebih"
    );
  }

  if(data.season === "Musim Kemarau"){

    result.push(
      "💧 Prioritaskan kelembapan tanah dan mulsa"
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
      "🧪 Pastikan dosis NPK tidak berlebihan"
    );
  }

  // ======================
  // JUMLAH POHON
  // ======================

  if(data.treeCount > 1000){

    result.push(
      "🌿 Monitoring hama perlu lebih rutin pada kebun padat"
    );
  }

  return result;
}
