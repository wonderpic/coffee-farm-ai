window.saveFarm = async function(){

  const data = {

    name:
      document.getElementById("farmName").value,

    coffeeType:
      document.getElementById("coffeeType").value,

    altitude:
      Number(document.getElementById("altitude").value),

    age:
      Number(document.getElementById("farmAge").value),

    treeCount:
      Number(document.getElementById("treeCount").value),

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

  await db.collection("farms").add(data);

  clearForm();

  loadDashboard();
};

// ======================
// CLEAR FORM
// ======================
function clearForm(){

  document.getElementById("farmName").value = "";

  document.getElementById("altitude").value = "";

  document.getElementById("farmAge").value = "";

  document.getElementById("treeCount").value = "";

}

// ======================
// UPDATE TASK
// ======================
window.updateTask =
async function(id,task,value){

  await db.collection("farms")
    .doc(id)
    .update({

      [`tasks.${task}`]:value

    });

  loadDashboard();
};

// ======================
// EDIT FARM
// ======================
window.editFarm =
async function(id){

  const name =
    prompt("Nama Kebun Baru:");

  const age =
    prompt("Umur Baru:");

  const altitude =
    prompt("Ketinggian Baru:");

  const fertilizer =
    prompt("Jenis Pupuk Baru:");

  const season =
    prompt("Musim Baru:");

  await db.collection("farms")
    .doc(id)
    .update({

      name:name,
      age:Number(age),
      altitude:Number(altitude),
      fertilizer:fertilizer,
      season:season

    });

  loadDashboard();
};

// ======================
// DELETE FARM
// ======================
window.deleteFarm =
async function(id){

  const ok =
    confirm(
      "Hapus data kebun ini?"
    );

  if(!ok) return;

  await db.collection("farms")
    .doc(id)
    .delete();

  loadDashboard();
};
