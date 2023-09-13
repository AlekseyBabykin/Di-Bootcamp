//GET
async function getEmj() {
  const response = await fetch("http://localhost:5000/");
  const movies = await response.json();
  console.log(movies);
}

getEmj();
