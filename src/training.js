import "./training.css";

let training = document.createElement("div");
let title = document.createElement("h1");
let subtitle = document.createElement("h3");
let locationsTitle = document.createElement("h4");
let loc1 = document.createElement("h2");
let locDet1 = document.createElement("p");
let loc2 = document.createElement("h2");
let locDet2 = document.createElement("p");
let locCard1 = document.createElement("div");
let locCard2 = document.createElement("div");
let locations = document.createElement("div");

training.className = "training1";
locCard1.className = "locCard1";
locCard2.className = "locCard2";
locations.className = "locations";
title.textContent = "Welcome to MMA Gym";
title.className = "title";
subtitle.textContent =
  "Where Warriors Are Forged: Unleash Your Inner Strength at MMA Gym!";
locationsTitle.textContent = "Our Training Styles";
loc1.textContent = "Boxing";
locDet1.textContent =
  "Feel the power of the punch and the rhythm of the ring as you master the sweet science of boxing.";
loc2.textContent = "Kickboxing";
locDet2.textContent =
  "From the explosive kicks to the lightning-fast strikes, kickboxing ignites your passion for combat sports with every move.";

training.appendChild(title);
training.appendChild(subtitle);
training.appendChild(locationsTitle);
training.appendChild(locations);
locations.appendChild(locCard1);
locations.appendChild(locCard2);
locCard1.append(loc1);
locCard1.append(locDet1);
locCard2.append(loc2);
locCard2.append(locDet2);

export default training;
