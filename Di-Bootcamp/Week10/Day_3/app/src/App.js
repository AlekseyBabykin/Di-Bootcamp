import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Text from "./components/Text";

function App() {
  const [txt, setText] = useState("some text");
  useEffect(() => {
    console.log(txt);
  }, [txt]);
  return (
    <>
      {/* <h1>{txt}</h1> */}
      <Text txt={txt} />
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
    </>
  );
}

export default App;
