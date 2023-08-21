let allBooks = [
  {
    title: "Book 1",
    author: "Author 1",
    image: "https://example.com/book1.jpg",
    alreadyRead: true,
  },
  {
    title: "Book 2",
    author: "Author 2",
    image:
      "https://wallpaperbat.com/img/356204-hexagon-cover-photo-facebook.jpg",
    alreadyRead: false,
  },
];

for (let i of allBooks) {
  let new_ul = document.createElement("ul");
  document.body.querySelector(".listBooks").appendChild(new_ul);

  let new_li_title = document.createElement("li");
  let textNode_title = document.createTextNode(i["title"]);
  new_li_title.appendChild(textNode_title);

  let new_li_author = document.createElement("li");
  let textNode_author = document.createTextNode(i["author"]);
  new_li_author.appendChild(textNode_author);

  let new_li_image = document.createElement("li");
  let textNode_image = document.createTextNode(i["image"]);
  new_li_image.appendChild(textNode_image);

  let new_li_alreadyRead = document.createElement("li");
  let textNode_alreadyRead = document.createTextNode(i["alreadyRead"]);
  new_li_alreadyRead.appendChild(textNode_alreadyRead);

  document.body.querySelector("ul").appendChild(new_li_title);
  document.body.querySelector("ul").appendChild(new_li_author);
  document.body.querySelector("ul").href = new_li_image;
  document.body.querySelector("ul").appendChild(new_li_image).style.width =
    "100px";
  if (i["alreadyRead"] === true) {
    document.body.querySelector("ul").appendChild(new_li_alreadyRead);
    document.body
      .querySelector("ul")
      .appendChild(new_li_alreadyRead).style.color = "red";
  } else {
    document.body.querySelector("ul").appendChild(new_li_alreadyRead);
  }
}
