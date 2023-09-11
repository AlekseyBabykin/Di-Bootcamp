import logo from "./logo.svg";
import "./App.css";
import Exercise from "./components/Exercise3";
import UserFavoriteAnimals from "./components/UserFavoriteAnimals";
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  return (
    <div className="App">
      <header className="App-header">
        <Exercise />
        {/* <div>Hello World</div>
        {myelement}
        React is {sum} times better with JSX
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3> */}
      </header>
      {/* <UserFavoriteAnimals
        firstName={user.firstName}
        lastname={user.lastName}
        favAnimals={user.favAnimals}
      /> */}
    </div>
  );
}

export default App;
