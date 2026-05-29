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
// EDIT FULL DATA
// ======================
window.editFarm = async function(id){

  const name =
    prompt("Nama Kebun Baru:");

  const age =
    prompt("Umur Tanaman Baru:");

  const season =
    prompt("Musim Baru:");

  const fertilizer =
    prompt("Jenis Pupuk Baru:");

  if(!name) return;

  await db.collection("farms")
    .doc(id)
    .update({

      name:name,
      age:Number(age),
      season:season,
      fertilizer:fertilizer

    });

  loadDashboard();
};

// ======================
// DELETE FARM
// ======================
window.deleteFarm = async function(id){

  const confirmDelete =
    confirm("Hapus data kebun ini?");

  if(!confirmDelete) return;

  await db.collection("farms")
    .doc(id)
    .delete();

  loadDashboard();
};
