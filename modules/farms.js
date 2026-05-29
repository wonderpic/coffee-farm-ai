window.saveFarm = async function(){

  try{

    const plantingDate =
      document.getElementById("plantingDate").value;

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

      schedules:
        generateSchedule({

          age:age

        }),

      created:
        new Date()

    };

    await db
      .collection("farms")
      .add(data);

    clearForm();

    loadDashboard();

  }catch(err){

    console.error(err);

    alert(
      "Gagal menyimpan kebun"
    );

  }

};

// ======================
// CLEAR
// ======================

function clearForm(){

  document.getElementById("farmName").value = "";

  document.getElementById("altitude").value = "";

  document.getElementById("treeCount").value = "";

  document.getElementById("plantingDate").value = "";

}

// ======================
// UPDATE SCHEDULE
// ======================

window.toggleSchedule =
async function(id,index,value){

  const ref =
    db.collection("farms")
      .doc(id);

  const doc =
    await ref.get();

  const data =
    doc.data();

  const schedules =
    data.schedules;

  schedules[index].done =
    value;

  await ref.update({

    schedules:schedules

  });

  loadDashboard();
};

// ======================
// EDIT
// ======================

window.editFarm =
async function(id){

  const name =
    prompt(
      "Nama Kebun Baru:"
    );

  if(!name) return;

  await db
    .collection("farms")
    .doc(id)
    .update({

      name:name

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
