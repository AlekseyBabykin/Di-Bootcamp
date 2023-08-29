form.addEventListener("submit", convert);

function convert(event) {
  event.preventDefault();
  const h2 = document.createElement("h2");
  h2.textContent = JSON.stringify({
    name: event.target.fname.value,
    lastname: event.target.lname.value,
  });
  form.appendChild(h2);
}
