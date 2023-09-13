import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Parent from "./Components/Parent";
import Child from "./Components/Child";
import Counter from "./Components/Counter";

import ErrorBoundary from "./ErorBoundary/ErorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <h1>Something...</h1>
      {/* <Parent user="admin">
        <Child />
      </Parent> */}
    </>
  );
}

export default App;
