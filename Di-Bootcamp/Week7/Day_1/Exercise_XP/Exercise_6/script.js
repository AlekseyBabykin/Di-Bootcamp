const body = document.body.firstElementChild.setAttribute(
  "id",
  "#socialNetworkNavigation"
);

let new_li = document.createElement("li");
let textNode = document.createTextNode("Logout");
new_li.appendChild(textNode);
document.body.querySelector("ul").appendChild(new_li);

console.log(document.body.querySelector("ul").firstElementChild.textContent);
console.log(document.body.querySelector("ul").lastElementChild.textContent);
