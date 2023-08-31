const myform = document.getElementById("container");
const mybtn = document.getElementById("btn");
mybtn.addEventListener("click", callData);

async function callData() {
  while (document.getElementById("result").firstChild) {
    document
      .getElementById("result")
      .removeChild(document.getElementById("result").lastChild);
  }
  timeSpin();
  const numrand = Math.floor(Math.random() * 84);
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/people/${numrand}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      await writefisrtData(data);
      document.getElementById("result").firstChild.remove();
      await writesecondData(data);
    } else {
      throw new Error("something");
    }
  } catch (Error) {
    console.log("error", Error);
  }
}
async function writefisrtData(dataobj) {
  const divname = document.createElement("div");
  const divheight = document.createElement("div");
  const divgender = document.createElement("div");
  const divbirth_year = document.createElement("div");
  divname.textContent = dataobj["result"]["properties"]["name"];
  //   console.log(dataobj["result"]["properties"]["name"]);
  divheight.textContent = dataobj["result"]["properties"]["height"];
  divgender.textContent = dataobj["result"]["properties"]["gender"];
  divbirth_year.textContent = dataobj["result"]["properties"]["birth_year"];
  document.getElementById("result").appendChild(divbirth_year);
  document.getElementById("result").appendChild(divgender);
  document.getElementById("result").appendChild(divheight);
  document.getElementById("result").appendChild(divname);
}

async function writesecondData(somedata) {
  const response = await fetch(somedata["result"]["properties"]["homeworld"]);
  if (response.ok) {
    const data = await response.json();
    const divhomeworld = document.createElement("div");
    divhomeworld.textContent = data["result"]["properties"]["name"];
    document.getElementById("result").appendChild(divhomeworld);
  } else {
    throw new Error("something yet");
  }
}
function timeSpin() {
  document.getElementById("result").innerHTML =
    '<i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>';
}
