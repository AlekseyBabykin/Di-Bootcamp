const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
let category = "";
// const apiUrl = `https://api.giphy.com/v1/gifs/random?q=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

const form = document.querySelector("form");
form.addEventListener("submit", applyCategory);

async function applyCategory(event) {
  event.preventDefault();
  category = event.target.category.value;
  console.log(category);
  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    if (!resp.ok) {
      throw new Error("something");
    } else {
      const data = await resp.json();
      console.log(data);
      const choiceEl = data.data.images.original.url;
      console.log(choiceEl);
      const image = document.createElement("img");
      image.setAttribute("src", choiceEl);
      image.setAttribute("class", "image");
      document.getElementById("result").appendChild(image);
      const deletebtn = document.createElement("button");
      deletebtn.setAttribute("class", "del");
      deletebtn.textContent = "Delete";
      document.getElementById("result").appendChild(deletebtn);

      if (document.querySelectorAll(".delall")[0]) {
        document.querySelectorAll(".delall").forEach((el) => el.remove());
      }
      const deleteall = document.createElement("button");
      deleteall.setAttribute("class", "delall");
      deleteall.textContent = "Delete_ALL!!!!";
      document.getElementById("result").appendChild(deleteall);

      deletebtn.addEventListener("click", () => {
        deletebtn.remove();
        image.remove();
      });

      deleteall.addEventListener("click", () => {
        document.querySelectorAll(".del").forEach((element) => {
          element.remove();
        });
        document.querySelectorAll(".image").forEach((element) => {
          element.remove();
        });
        document.querySelectorAll(".delall").forEach((el) => el.remove());
      });
    }
  } catch (Error) {
    console.log("error", Error);
  }
}
