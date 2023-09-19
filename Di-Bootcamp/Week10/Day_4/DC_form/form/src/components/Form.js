import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    dist: "",
    nuts: "",
    lactose: "",
    vegan: "",
  });

  const handlInputs = (e) => {
    // e.target.cheked
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=>", inputs);
  };
  const fullname = `${inputs.fname} ${inputs.lname}`;
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          First name:
          <input name="fname" onChange={(e) => handlInputs(e)} />
          <br />
          Last name: <input name="lname" onChange={(e) => handlInputs(e)} />
          <br />
          Age: <input name="age" onChange={(e) => handlInputs(e)} />
          <br />
          <br />
          <div>
            Male:{""}
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => handlInputs(e)}
            />
          </div>
          <div>
            Female:{""}
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => handlInputs(e)}
            />
          </div>
          Select your destination
          <select name="dist" onChange={(e) => handlInputs(e)}>
            <option value="1">tailand</option>
            <option value="2">Moscow</option>
            <option value="3">Brazil</option>
          </select>
          <div>
            <div>Dietary restriction</div>
          </div>
          <div>
            Nuts free:{""}
            <input
              type="checkbox"
              name="nuts"
              onChange={(e) => handlInputs(e)}
            />
          </div>
          <div>
            Lactose free:{""}
            <input
              type="checkbox"
              name="lactose"
              onChange={(e) => handlInputs(e)}
            />
          </div>
          <div>
            Vegan:{""}
            <input
              type="checkbox"
              name="vegan"
              onChange={(e) => handlInputs(e)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>NAME:{fullname}</div>

        <div>AGE:{inputs.age}</div>
        <div>GENDER: {inputs.gender}</div>
        <div>Your Destination:{inputs.dist}</div>
        <div>NUTS: {inputs.nuts ? "Yes" : "No"}</div>
        <div>LACTOSE: {inputs.lactose ? "Yes" : "No"}</div>
        <div>VEGAN: {inputs.vegan ? "Yes" : "No"}</div>
      </header>
    </div>
  );
};

export default Form;
