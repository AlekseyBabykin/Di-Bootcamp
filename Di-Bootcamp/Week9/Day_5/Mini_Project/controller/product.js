const fs = require("fs");

const readTasks = () => {
  try {
    const data = fs.readFileSync("controller/tasks.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const writeTask = (tasks) => {
  try {
    let dataJson = JSON.stringify(tasks);
    fs.writeFileSync("controller/tasks.json", dataJson);
    console.log("You tasks written successfully");
  } catch (err) {
    console.error(err);
  }
};

const getAlltasks = (req, res) => {
  const tasks = readTasks();
  res.send(tasks);
};

const getAddtasks = (req, res) => {
  const { task, description } = req.body;
  let tasks = readTasks();
  console.log(tasks);
  const newtask = {
    id: tasks.length + 1,
    task,
    description,
  };

  tasks.push(newtask);
  writeTask(tasks);
  res.status(200).json(tasks);
};

const getUpdatetasks = (req, res) => {
  const id = Number(req.params.id);

  const { task, description } = req.body;
  let tasks = readTasks();
  const index = tasks.findIndex((el) => el.id == id);
  tasks[index] = { ...tasks[index], task: task, description: description };
  res.json(tasks);
  writeTask(tasks);
};

const getDeletetasks = (req, res) => {
  const { id } = Number(req.params.id);
  let tasks = readTasks();
  const index = tasks.findIndex((el) => el.id == id);
  tasks.splice(index, 1);
  res.json(tasks);
  writeTask(tasks);
};
module.exports = { getAlltasks, getAddtasks, getUpdatetasks, getDeletetasks };
