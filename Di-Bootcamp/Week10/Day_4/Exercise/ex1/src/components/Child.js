import React from "react";

class Child extends React.Component {
  constructor() {
    super();
  }
  componentWillUnmount() {
    alert("Delete sucessfully");
  }
  render() {
    return (
      <>
        <h1>Hello World!</h1>
      </>
    );
  }
}

export default Child;
