import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import BuggyCounter from "./BuggyCounter/BuggyCounter";
import CounterOne from "./components/CounterOne";
import Color from "./components/Color";
function App() {
  return (
    <div className="App">
      <Color />
      {/* <BuggyCounter>
        <div>
          <CounterOne />
        </div>
        <div>
          <CounterOne />
        </div>
      </BuggyCounter>
      <hr></hr>
      <div>
        <div>
          <BuggyCounter>
            <CounterOne />
          </BuggyCounter>
        </div>
        <div>
          <BuggyCounter>
            <CounterOne />
          </BuggyCounter>
        </div>
      </div>
      <hr></hr>
      <CounterOne /> */}
    </div>
  );
}

export default App;
