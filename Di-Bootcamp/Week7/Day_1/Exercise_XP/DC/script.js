const solar_system_planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

// let Mercury_div = document.createElement(div);
let change_colors = "0123456789ABCDEF";
let color = "#";
for (let i of solar_system_planets) {
  color += change_colors[Math.floor(Math.random() * 16)];
  let div = document.createElement("div");
  div.classList.add("planet");
  div.classList.add(i);
  div.style.background = color;
  console.log(div);
  let section = document.querySelector(".listPlanets");
  section.appendChild(div);
}
