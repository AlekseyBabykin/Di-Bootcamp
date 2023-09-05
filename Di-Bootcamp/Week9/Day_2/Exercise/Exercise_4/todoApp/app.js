const TodoList = require("./todo.js");

const a = new TodoList();
a.addTask("i want to home");
a.addTask("i want to food");
a.addTask("i want to zoo");

a.completeTask(1);
a.listTasks();
