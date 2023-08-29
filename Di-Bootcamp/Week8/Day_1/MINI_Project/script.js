function createGrid(amount) {
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.classList = "grid-item";
    document.querySelector(".grid-container").appendChild(div);
  }
}
createGrid(64 * 40);
