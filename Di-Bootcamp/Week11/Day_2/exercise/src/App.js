// Exercise 1
// import React from "react";
// import { ThemeProvider, useTheme } from "./components/ThemeContext";
// import "./App.css";
// function ThemeSwitcher() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={`App ${theme}`}>
//       <h1>Theme Switcher Example</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <ThemeSwitcher />

//         {/* Other components here */}
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// Exercise 2

// import React, { useRef } from "react";
// import "./App.css";
// import { useState } from "react";
// function CharacterCounter() {
//   const [state, setState] = useState(null);
//   const inputRef = useRef(null);

//   const handleInputChange = () => {
//     const textLength = inputRef.current.value.length;
//     // Update the character count based on textLength

//     setState(textLength);
//   };

//   return (
//     <div>
//       <h1>Character Counter</h1>
//       <textarea
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       ></textarea>
//       <p>Character Count: {state}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// export default App;

// Exercise 3

import React, { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
