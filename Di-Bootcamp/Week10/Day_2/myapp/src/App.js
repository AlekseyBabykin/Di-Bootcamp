import logo from "./logo.svg";
import Hello from "./components/Hello";
import users from "./data.json";
import User from "./components/User";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";

function App() {
  console.log("uswer=>", users);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button variant="contained">Contained</Button>
        </div>
        {users.map((item) => {
          return <User info={item} key={uuidv4()} />;
        })}
      </header>
    </div>
  );
}

export default App;
