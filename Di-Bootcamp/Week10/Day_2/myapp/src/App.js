import logo from "./logo.svg";
import Hello from "./components/Hello";
import users from "./data.json";
import User from "./components/User";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const users = [];
  const [txt, setText] = useState("Hello ");
  console.log("uswer=>", users);
  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <>
      <h2>{txt}</h2>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={(e) => getData(e)}>Get Users </button>
      <div>
        {users.map((item) => {
          return <User info={item} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default App;
