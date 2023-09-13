// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);
  const count = (indx) => {
    console.log(indx);
    const arr = [...languages];
    const addvotes = { name: arr[indx].name, votes: arr[indx].votes + 1 };
    arr.splice(indx, 1, addvotes);
    console.log(arr);
    setLanguages(arr);
  };
  return (
    <div>
      <div>
        {languages.map((el, indx) => (
          <div key={el.name}>
            {el.votes} {el.name}
            <button type="button" onClick={() => count(indx)}>
              click
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
