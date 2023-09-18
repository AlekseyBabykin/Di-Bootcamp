import React from "react";
import TodoListcss from "./TodoListcss.css";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: ["By some milk", "Do my homework"] };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const inputText = document.getElementById("input-text").value;
    this.setState({ todos: [...this.state.todos, inputText] });
    document.getElementById("input-text").value = "";
  };
  handleClick = (todoDelete) => {
    this.setState({
      todos: this.state.todos.filter((el) => el !== todoDelete),
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Todos</h1>
        <div className="todo-list">
          {this.state.todos.map((el) => (
            <div key={el} className="todo" onClick={() => this.handleClick(el)}>
              {el}
            </div>
          ))}
        </div>
        {this.state.todos.length === 0 && <p>You have no todos left, yay!</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input-text">add new todo:</label>
          <br />
          <input type="text" id="input-text" />
        </form>
      </div>
    );
  }
}
export default TodoList;
