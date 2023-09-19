import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UserForm from "./component/UserForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: null };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:3001/api/hello");
      const data = await res.text();
      console.log(data);
      this.setState({ display: data });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <>
        <UserForm
          setMessage={(message) => this.setState({ display: message })}
        />
        <div>
          Massage display: <b>{this.state.display}</b>
        </div>
      </>
    );
  }
}

export default App;
