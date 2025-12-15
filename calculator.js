const commute = document.getElementById("commute");
const electricity = document.getElementById("electricity");
const flights = document.getElementById("flights");
const meat = document.getElementById("meat");
const shopping = document.getElementById("shopping");

const totalCO2 = document.getElementById("totalCO2");
const impactLabel = document.getElementById("impactLabel");

function updateValues() {
  document.getElementById("commuteVal").innerText = commute.value;
  document.getElementById("electricityVal").innerText = electricity.value;
  document.getElementById("flightVal").innerText = flights.value;
  document.getElementById("meatVal").innerText = meat.value;
  document.getElementById("shoppingVal").innerText = shopping.value;

  calculate();
}

function calculate() {
  const commuteCO2 = commute.value * 0.192 * 365 / 1000;
  const electricityCO2 = electricity.value * 12 * 0.82 / 1000;
  const flightCO2 = flights.value * 0.09;
  const meatCO2 = meat.value * 52 * 0.007;
  const shoppingCO2 = shopping.value * 12 * 0.02;

  const total =
    commuteCO2 +
    electricityCO2 +
    flightCO2 +
    meatCO2 +
    shoppingCO2;

  totalCO2.innerText = total.toFixed(1);

  if (total > 8) {
    impactLabel.innerText = "High Emissions";
    impactLabel.className = "impact high";
  } else if (total > 4) {
    impactLabel.innerText = "Moderate Emissions";
    impactLabel.className = "impact medium";
  } else {
    impactLabel.innerText = "Low Emissions";
    impactLabel.className = "impact low";
  }
}

document.querySelectorAll("input[type=range]").forEach(slider => {
  slider.addEventListener("input", updateValues);
});

updateValues();
