function createCard(data) {

  let weatherTmin = document.createElement("div");
  let weatherTmax = document.createElement("div");
  let weatherPrain = document.createElement("div");
  let weatherSunHours = document.createElement("div");

  
  weatherTmin.textContent = `température minimale : ${data.forecast.tmin}°C`;
  weatherTmax.textContent = `température maximale : ${data.forecast.tmax}°C`;
  weatherPrain.textContent = `Humidité : ${data.forecast.probarain}%`;
  weatherSunHours.textContent = `Ensoleillement prévu dans la journée : ${displayHours(
    data.forecast.sun_hours
  )}`;

  let weatherSection = document.getElementById("weatherInformation");
  let requestSection = document.getElementById("cityForm");

  tempmin.appendChild(weatherTmin);
  tempmax.appendChild(weatherTmax);
  pluie.appendChild(weatherPrain);
  soleil.appendChild(weatherSunHours);

  let reloadButton = document.createElement("div");
  reloadButton.textContent = "Nouvelle recherche";
  reloadButton.classList.add("reloadButton");
  document.body.appendChild(reloadButton);

  reloadButton.addEventListener("click", function () {
    location.reload();
  });

  requestSection.style.display = "none";
  weatherSection.style.display = "flex";
}

function displayHours(sunHours) {
  return sunHours + (sunHours > 1 ? " heures" : " heure");
}
