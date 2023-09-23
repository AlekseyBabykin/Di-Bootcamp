import SubCounter from "./SubCounter";
import { useContext } from "react";
import { AppContext } from "../App";

const Counter = (props) => {
  const { setCount, count } = useContext(AppContext);
  return (
    <>
      <h2>Counter component</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <SubCounter />
    </>
  );
};

export default Counter;
