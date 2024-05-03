import "./about.css";

let about = document.createElement("div");
about.className = "about";
let title = document.createElement("h1");
let subtitle = document.createElement("h2");
let subtitle1 = document.createElement("h3");
let subtitle2 = document.createElement("h3");
let story = document.createElement("h4");
let mission = document.createElement("h4");

title.textContent = "About Us";
subtitle.textContent =
  "Welcome to MMA Gym: Forging Champions, Building Community";
subtitle1.textContent = "Our Story";
story.textContent =
  "Established in 2003, MMA Gym has been a cornerstone of the martial arts scene in Perth. What began as a passion project by our founder, James, has blossomed into a thriving hub for those seeking to challenge themselves both physically and mentally.";
subtitle2.textContent = "Our Mission";
mission.textContent =
  "Our mission is simple: to empower individuals to become the best versions of themselves through the practice of martial arts. Whether you're a seasoned competitor or a complete beginner, we welcome you with open arms and a commitment to help you achieve your goals.";

about.appendChild(title);
about.appendChild(subtitle);
about.appendChild(subtitle1); // Append subtitle1 before story
about.appendChild(story);
about.appendChild(subtitle2); // Append subtitle2 before mission
about.appendChild(mission);

export default about;
