import "./styles.css";
import training from "./training";
import about from "./about";

let training1 = document.querySelector("#training");
let homediv = document.createElement("div");
let about1 = document.querySelector("#about");
let home = document.querySelector("#home");
let content = document.querySelector("#content");
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

locCard1.className = "locCard1";
locCard2.className = "locCard2";
locations.className = "locations";
title.textContent = "Welcome to MMA Gym";
title.className = "title";
subtitle.textContent =
  "Where Warriors Are Forged: Unleash Your Inner Strength at MMA Gym!";
locationsTitle.textContent = "Locations";
loc1.textContent = "Rising Sun MMA";
locDet1.textContent =
  "Boasting state-of-the-art training facilities, including a spacious mat area, top-of-the-line equipment, and dedicated weightlifting zones.";
loc2.textContent = "Thunderbolt Fight Club";
locDet2.textContent =
  "Equipped with a rugged yet functional training environment, featuring heavy bags, sparring rings, and strength training apparatus.";

homediv.appendChild(title);
homediv.appendChild(subtitle);
homediv.appendChild(locationsTitle);
homediv.appendChild(locations);
locations.appendChild(locCard1);
locations.appendChild(locCard2);
locCard1.append(loc1);
locCard1.append(locDet1);
locCard2.append(loc2);
locCard2.append(locDet2);
content.appendChild(homediv);

training1.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(training);
});
about1.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(about);
});

home.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(homediv);
});
