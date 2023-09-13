import { useEffect, useState } from "react";

const Text = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (props.txt === "alex") console.log(props.txt);
  }, [props.txt]);
  return (
    <div>
      <h1>Text component</h1>
      {props.txt}
    </div>
  );
};

export default Text;
