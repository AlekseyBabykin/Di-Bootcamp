const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");

const form = document.getElementById("libform");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    noun.value &&
    adjective.value &&
    person.value &&
    verb.value &&
    place.value
  ) {
    const div = document.createElement("div");
    div.innerText = `In ${place.value}, ${person.value}, a ${noun.value} of grace, joined gymnastics.  ${adjective.value} and dedicated, she practiced daily. At the Olympics, her routines amazed. 
      Mia name ${verb.value} in gold—a symbol of unwavering verb.`;

    document.getElementById("story").append(div);
  } else {
    alert("you have emty");
  }
});
