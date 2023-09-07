// Sample in-memory database for storing to-do items
const todos = [
  { id: 1, name: "Suzuka", made: "Japony" },
  { id: 2, name: "BMW", made: "Germany" },
  { id: 3, name: "Merseses", made: "GBR" },
];

const getAlltodos = (req, res) => {
  res.status(200).json(todos);
};

const getAddtodos = (req, res) => {
  const { name, made } = req.body;
  const newtodos = {
    id: todos.length + 1,
    name,
    made,
  };
  todos.push(newtodos);
  res.status(200).json(todos);
};

const getUpdatetodos = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const { name, made } = req.body;
  console.log(req.body);
  const index = todos.findIndex((el) => el.id == id);
  todos[index] = { ...todos[index], name: name, made: made };
  res.json(todos);
};

const getDeletetodos = (req, res) => {
  const { id } = Number(req.params.id);
  const todosdeleteindex = todos.findIndex((el) => el.id == id);
  todos.splice(todosdeleteindex, 1);
  res.json(todos);
};
module.exports = { getAlltodos, getAddtodos, getUpdatetodos, getDeletetodos };
