import logo from "./logo.svg";
import "./App.css";
import { useRef, useEffect } from "react";
import { createContext, useState, useReducer } from "react";

// import Counter from "./components/Counter";
// import Text from "./components/Text";

// useContex - state managent
//App
//useRef
//useReducer
// export const AppContext = createContext();
// export const AppTextContext = createContext();
// export const AppProductsContex = createContext();
const iniState = {
  result: 0,
  title: "Simple Reducer",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return { ...state, result: state.result + action.payload };
    case "MINUS":
      return { ...state, result: state.result - 1 };
    case "MULTIPLY":
      return { ...state, result: state.result * 2 };
    case "DIVIDE":
      return { ...state, result: state.result / 2 };
    default:
      return { ...state };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, iniState);
  // const [count, setCount] = useState(10);
  // const [txt, setTxt] = useState("Bal bal bla");

  // const inputRef = useRef(null);
  // const inputEmailref = useRef(null);
  // const txt = useRef("set your name");
  // let txtOne = "text one";
  // useEffect(() => {
  //   console.log(inputRef);
  //   inputRef.current.value = "hjgdkgh";
  // }, []);
  // const handleClick = () => {
  //   inputRef.current.focus();
  //   console.log(inputEmailref.current.value, inputRef.current.value);
  // };

  // const handleRef = () => {
  //   txt.current = txt.current + "0";
  //   txtOne = "text two";
  //   console.log(txt.current, txtOne);
  //   setCount(count + 1);
  // };
  // const reRender = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple calculator {state.title}</h2>
        Result:{state.result}
        <button onClick={() => dispatch({ type: "PLUS", payload: 5 })}>
          Plus 1
        </button>
        <button onClick={() => dispatch({ type: "MINUS" })}>Minus 1</button>
        <button onClick={() => dispatch({ type: "MULTIPLY" })}>Multiply</button>
        <button onClick={() => dispatch({ type: "DIVIDE" })}>Divide</button>
        {/* <h2>useRef</h2>
        <h4>{txt.current}</h4>
        <h4>{count}</h4> */}
        {/* <input ref={inputRef} />
        <input type="email" ref={inputEmailref} /> */}
        {/* <h4>{txtOne}</h4>
        <button onClick={handleRef}>input focus</button>
        <button onClick={reRender}>reRender</button> */}
        {/* <h2>Counter</h2>
        {txt}
        <AppContext.Provider value={{ count, setCount, title: "Aleks" }}>
          <Counter name={"John"} />
        </AppContext.Provider>
        <AppTextContext.Provider value={{ setTxt }}>
          <Text />
        </AppTextContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
