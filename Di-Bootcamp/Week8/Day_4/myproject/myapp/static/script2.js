(async function () {
  fetch("http://localhost:8000/books/all/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      render(data);
    })
    .catch((e) => {
      console.log(e);
    });
})();

function render(arr) {
  const html = arr.map((item) => {
    return `<div style="display:inline-block;border:1px solid #000;margin:20px;padding:20px">
       <h2 class="">${item.title}</h2>
       <p>${item.author}</p>
       <p>${item.publication_date}</p>
       <p>${item.price}</p>
      </div>`;
  });
  console.log("html=>", html);
  document.getElementById("root").innerHTML = html.join("");
}

async function add() {
  let book = {
    title: "ddd",
    author: "ddd",
    publication_date: "2002-05-01",
    price: 20,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(book),
  };

  try {
    const res = await fetch("http://localhost:8000/books/create/", options);
    const data = await res.json();
    console.log("returnin data=>", data);
  } catch (e) {
    console.log(e);
  }
}
