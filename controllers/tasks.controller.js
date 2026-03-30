let tasks = [];
let currentId = 1;

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: currentId++,
    title,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }
  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
};

exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Task not found." });
  }
  tasks.splice(index, 1);
  res.status(204).send();
  //res.status(204).json({message: "Deletation was successful"});
};

//test comment to commit
