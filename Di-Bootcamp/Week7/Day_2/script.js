// function clicked() {
//   alert("Button was cliked");
// }

// function mouseOver() {
//   console.log("balalla");
// }
// const button = document.getElementById("clickevent");

// button.addEventListener("click", clicked);

// button.addEventListener("click", () => {
//   button.style.backgroundColor = "red";
// });

// button.onclick = clicked;

// button.onmouseover = mouseOver;
// const body = document.getElementsByTagName("tr");
// for (let i of body) {
//   let td = document.createElement("td");
//   let tekst = document.createTextNode("Row3");
//   td.appendChild(tekst);
//   i.appendChild(td);
// }
// console.log(document.querySelector("#sampleTable"));

// let x = document.getElementById("jsstyle");
// x.addEventListener("mouseover", RespondMouseOver);

// function RespondMouseOver(e) {
//   console.log("e", e);
//   // all the properties of the event object
//   console.log("My mouse is over the btn named" + e.target.innerHTML);
//   console.log("e.type: ", e.type);
//   // e.type: mouseover
//   console.log("e.target: ", e.target);
//   // e.target:  <button id=​"btn1">​Hey Hey​</button>​
//   x.style.backgroundColor = "yellow";
// }

// function getValue(event) {
//   event.preventDefault();
//   console.log(event.target.elements.fname.value);
//   console.log(event.target.elements.lname.value);
// }

// setTimeout(() => {
//   const div = document.createElement("div");
//   div.innerText = "bla bla";
//   document.body.append(div);
// }, 5000);
