import { useState } from "react";

const Phone = () => {
  const [brand, setbrand] = useState("Samsung");
  const [model, setmodel] = useState("Galaxy S20");
  const [color, setcolor] = useState("black");
  const [year, setyaer] = useState(2000);

  return (
    <div>
      <h3>My phone is {brand}</h3>
      <h6>
        It is a {color} {model} from {year}
      </h6>
      <button type="button" onClick={() => setcolor("blue")}>
        Change color
      </button>
    </div>
  );
};

export default Phone;
