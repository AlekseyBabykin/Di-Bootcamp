import { useEffect, useState } from "react";

const Color = () => {
  const [favoriteColor, setColor] = useState("red");
  const change = () => {
    setColor("Blue");
  };
  useEffect(() => {
    alert("useEffect reached");
    setColor("yellow");
  }, []);
  return (
    <div>
      <div>My Favorite Color is {favoriteColor}</div>
      <button onClick={change} />
    </div>
  );
};

export default Color;
