window.saveFarm = async function(){

  try{

    // ======================
    // INPUT
    // ======================

    const plantingDate =
      document.getElementById("plantingDate").value;

    // ======================
    // HITUNG UMUR
    // ======================

    const today =
      new Date();

    const planted =
      new Date(plantingDate);

    const diffTime =
      today - planted;

    const age =
      Math.floor(
        diffTime /
        (1000 * 60 * 60 * 24 * 30)
      );

    // ======================
    // DATA
    // ======================

    const data = {

      name:
        document.getElementById("farmName").value,

      coffeeType:
        document.getElementById("coffeeType").value,

      altitude:
        Number(
          document.getElementById("altitude").value
        ),

      treeCount:
        Number(
          document.getElementById("treeCount").value
        ),

      plantingDate:
        plantingDate,

      age:
        age,

      fertilizer:
        document.getElementById("fertilizer").value,

      season:
        document.getElementById("season").value,

      tasks:{
        fertilizing:false,
        pruning:false,
        pest:false,
        watering:false
      },

      created:
        new Date()

    };

    // ======================
    // SAVE
    // ======================

    await db
      .collection("farms")
      .add(data);

    // ======================
    // CLEAR
    // ======================

    clearForm();

    // ======================
    // RELOAD
    // ======================

    loadDashboard();

  }catch(err){

    console.error(err);

    alert(
      "Gagal menyimpan data kebun"
    );
  }

};

// ======================
// CLEAR FORM
// ======================

function clearForm(){

  document.getElementById("farmName").value = "";

  document.getElementById("altitude").value = "";

  document.getElementById("treeCount").value = "";

  document.getElementById("plantingDate").value = "";

}

// ======================
// UPDATE TASK
// ======================

window.updateTask =
async function(id,task,value){

  await db
    .collection("farms")
    .doc(id)
    .update({

      [`tasks.${task}`]:
        value

    });

  loadDashboard();
};

// ======================
// EDIT
// ======================

window.editFarm =
async function(id){

  const name =
    prompt("Nama Kebun Baru:");

  const season =
    prompt("Musim Baru:");

  const fertilizer =
    prompt("Pupuk Baru:");

  if(!name) return;

  await db
    .collection("farms")
    .doc(id)
    .update({

      name:
        name,

      season:
        season,

      fertilizer:
        fertilizer

    });

  loadDashboard();
};

// ======================
// DELETE
// ======================

window.deleteFarm =
async function(id){

  const ok =
    confirm(
      "Hapus kebun ini?"
    );

  if(!ok) return;

  await db
    .collection("farms")
    .doc(id)
    .delete();

  loadDashboard();
};
