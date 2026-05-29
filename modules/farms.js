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

  loadDashboard();
};

window.editFarm = async function(id){

  const newSeason =
    prompt("Update musim:");

  if(!newSeason) return;

  await db.collection("farms")
    .doc(id)
    .update({

      season:newSeason

    });

  loadDashboard();
}
