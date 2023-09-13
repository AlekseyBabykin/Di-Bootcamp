import { useState } from "react";

const Events = () => {
  const [isToggleOn, setisToggleOn] = useState("ON");
  const change = () => {
    if (isToggleOn === "ON") {
      setisToggleOn("OFF");
    } else {
      setisToggleOn("ON");
    }
  };
  return (
    <div>
      <button type="button" onClick={change}>
        {isToggleOn}
      </button>
      <button type="button" onClick={clickMe} />
      <input onKeyDown={handleKeyDown} />
    </div>
  );
};

const clickMe = () => {
  alert("i was clicked");
};

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    alert(e.target.value);
  }
};
export default Events;
