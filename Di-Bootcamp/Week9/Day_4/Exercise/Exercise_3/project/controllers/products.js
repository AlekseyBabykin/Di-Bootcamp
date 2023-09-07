const books = [
  { id: 1, name: "HarryPotter", category: "hystory" },
  { id: 2, name: "HarryPotter and Marry", category: "triller" },
  { id: 3, name: "HarryPotter and Nirvana", category: "comedy" },
];

const getAllbook = (req, res) => {
  res.status(200).json(todos);
};

const getAddbook = (req, res) => {
  const { name, made } = req.body;
  const newtodos = {
    id: todos.length + 1,
    name,
    made,
  };
  todos.push(newtodos);
  res.status(200).json(todos);
};

const getUpdatebook = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const { name, made } = req.body;
  console.log(req.body);
  const index = todos.findIndex((el) => el.id == id);
  todos[index] = { ...todos[index], name: name, made: made };
  res.json(todos);
};

const getDeletebook = (req, res) => {
  const { id } = Number(req.params.id);
  const todosdeleteindex = todos.findIndex((el) => el.id == id);
  todos.splice(todosdeleteindex, 1);
  res.json(todos);
};
module.exports = { getAllbook, getAddbook, getUpdatebook, getDeletebook };
