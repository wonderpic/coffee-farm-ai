function analyze() {
  const result = document.getElementById("result");

  const diseases = [
    {
      name: "Coffee Leaf Rust",
      severity: "High",
      action: "Remove infected leaves + apply fungicide",
      color: "red"
    },
    {
      name: "Nitrogen Deficiency",
      severity: "Medium",
      action: "Apply NPK fertilizer",
      color: "yellow"
    },
    {
      name: "Healthy Leaf",
      severity: "Low",
      action: "Maintain current care",
      color: "green"
    }
  ];

  const pick = diseases[Math.floor(Math.random() * diseases.length)];

  result.innerHTML = `
    <h3>${pick.name}</h3>
    <p><b>Severity:</b> <span class="${pick.color}">${pick.severity}</span></p>
    <p><b>Action:</b> ${pick.action}</p>
    <button onclick="alert('Saved to log!')">Save to Log</button>
  `;
}
