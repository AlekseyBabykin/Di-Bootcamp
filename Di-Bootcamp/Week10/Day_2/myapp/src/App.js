import logo from "./logo.svg";
import Hello from "./components/Hello";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Jhon", email: "jjj@mail.com" },
    { id: 2, name: "Marry", email: "lll@mail.com" },
    { id: 3, name: "Den", email: "hhhh@mail.com" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {users.map((item) => {
          return <Hello name={item.name} email={item.email} />;
        })}
      </header>
    </div>
  );
}

export default App;
