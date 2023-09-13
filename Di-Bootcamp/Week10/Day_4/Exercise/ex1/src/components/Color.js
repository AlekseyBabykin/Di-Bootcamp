import { useEffect, useState } from "react";
import React from "react";
import Child from "./Child";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red", show: true };
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (nextProp.favoriteColor !== this.props.favoriteColor) {
      return false;
    }
    return true;
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ favoriteColor: "yellow" }),
      2000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log("after update");
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }
  delete = () => {
    this.setState({ show: false });
  };

  render() {
    let comp;
    if (this.state.show) {
      comp = (
        <div>
          <Child />
          <button onClick={this.delete}>Delete</button>
        </div>
      );
    }
    return (
      <div>
        <header>{comp}</header>

        <div>My Favorite Color is {this.state.favoriteColor}</div>
        <button
          onClick={() => this.setState((state) => ({ favoriteColor: "blue" }))}
        >
          Blalal
        </button>
      </div>
    );
  }
}

// const Color = () => {
//   const [favoriteColor, setColor] = useState("red");
//   const change = () => {
//     setColor("Blue");
//   };
//   // useEffect(() => {
//   //   alert("useEffect reached");
//   //   setColor("yellow");
//   // }, []);
//   return (
//     <div>
//       <div>My Favorite Color is {favoriteColor}</div>
//       <button onClick={change} />
//     </div>
//   );
// };

export default Color;
