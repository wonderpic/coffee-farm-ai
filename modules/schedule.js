function generateSchedule(data){

  const today =
    new Date();

  const schedules = [];

  // ======================
  // PEMUPUKAN
  // ======================

  const fertilizing =
    new Date(today);

  fertilizing.setDate(
    fertilizing.getDate() + 7
  );

  schedules.push({

    type:"Pemupukan",

    date:
      fertilizing
        .toISOString()
        .split("T")[0],

    done:false

  });

  // ======================
  // PRUNING
  // ======================

  const pruning =
    new Date(today);

  pruning.setDate(
    pruning.getDate() + 14
  );

  schedules.push({

    type:"Pruning",

    date:
      pruning
        .toISOString()
        .split("T")[0],

    done:false

  });

  // ======================
  // HAMA
  // ======================

  const pest =
    new Date(today);

  pest.setDate(
    pest.getDate() + 5
  );

  schedules.push({

    type:"Monitoring Hama",

    date:
      pest
        .toISOString()
        .split("T")[0],

    done:false

  });

  // ======================
  // PENYIRAMAN
  // ======================

  const watering =
    new Date(today);

  watering.setDate(
    watering.getDate() + 2
  );

  schedules.push({

    type:"Penyiraman",

    date:
      watering
        .toISOString()
        .split("T")[0],

    done:false

  });

  return schedules;
}
