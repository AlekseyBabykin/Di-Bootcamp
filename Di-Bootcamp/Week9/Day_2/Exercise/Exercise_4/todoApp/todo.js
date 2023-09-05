class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Method to add a task
  addTask(task) {
    this.tasks.push({
      task,
      completed: false,
    });
  }

  // Method to mark a task as complete
  completeTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      this.tasks[taskIndex]["completed"] = true;
    } else {
      console.error("Invalid task index.");
    }
  }

  // Method to list all tasks
  listTasks() {
    console.log("Tasks:");
    this.tasks.forEach((task, index) => {
      //   const status = task.completed ? " (Completed)" : " (Incomplete)";
      console.log(task);
    });
  }
}

module.exports = TodoList;
