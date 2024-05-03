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

title.textContent = "Welcome to MMA Gym";
subtitle.textContent =
  "Where Warriors Are Forged: Unleash Your Inner Strength at MMA Gym!";
locationsTitle.textContent = "Locations";
loc1.textContent = "Rising Sun MMA";
locDet1.textContent =
  "Boasting state-of-the-art training facilities, including a spacious mat area, top-of-the-line equipment, and dedicated weightlifting zones.";
loc2.textContent = "Thunderbolt Fight Club";
locDet2.textContent =
  "Equipped with a rugged yet functional training environment, featuring heavy bags, sparring rings, and strength training apparatus.";

content.appendChild(title);
content.appendChild(subtitle);
content.appendChild(locationsTitle);
content.appendChild(locations);
locations.appendChild(locCard1);
locations.appendChild(locCard2);
locCard1.append(loc1);
locCard1.append(locDet1);
locCard2.append(loc2);
locCard2.append(locDet2);
