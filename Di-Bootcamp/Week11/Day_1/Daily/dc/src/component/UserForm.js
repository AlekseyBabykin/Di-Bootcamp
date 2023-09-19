import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const text = document.getElementById("search").value;
    console.log(text);
    const postText = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    };
    try {
      const resJson = await fetch("http://localhost:3001/api/world", postText);
      const res = await resJson.json();
      console.log(res);
      this.props.setMessage(res.message);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="search" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserForm;
