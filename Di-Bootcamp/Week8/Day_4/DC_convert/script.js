const url = "https://v6.exchangerate-api.com/v6/f0cf81904be092acbfc26e9e/pair";

const myform = document.getElementById("myform");
const curr1 = document.getElementById("curr1");
const curr2 = document.getElementById("curr2");
const curr1Value = "";
const curr2Value = "";
myform.addEventListener("submit", fetchCurrencies);
async function writeCurr() {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/f0cf81904be092acbfc26e9e/codes"
    );
    if (response.ok) {
      const data = await response.json();
      data["supported_codes"].forEach((el) => {
        const opt = document.createElement("option");
        opt.innerText = el[0] + "-" + el[1];
        opt.value = el[0];
        curr1.appendChild(opt);
      });
      data["supported_codes"].forEach((el) => {
        const opt2 = document.createElement("option");
        opt2.innerText = el[0] + "-" + el[1];
        opt2.value = el[0];
        curr2.appendChild(opt2);
      });
      console.log(data["supported_codes"]);
    } else {
      throw new Error();
    }
  } catch (erorr) {
    console.log("erorr", erorr);
  }
}

async function fetchCurrencies(event) {
  event.preventDefault();
  const curr1 = event.target.curr1.value;
  const curr2 = event.target.curr2.value;
  const amount = event.target.amount.value;
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/f0cf81904be092acbfc26e9e/pair/${curr1}/${curr2}`
    );
    if (response.ok) {
      const data = await response.json();
      const convertCurr = data["conversion_rate"];
      document.getElementById("out").value = data["conversion_rate"] * amount;
      console.log(typeof data["conversion_rate"]);
    } else {
      throw new Error();
    }
  } catch (erorr) {
    console.log("erorr", erorr);
  }
}
writeCurr();
