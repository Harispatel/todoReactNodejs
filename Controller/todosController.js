const Todo = require("../Model/tododata");
module.exports = {
  getTodos: async function (req, res) {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getSpecTodo: async function (req, res) {
    const id = req.query._id;
    try {
      const getTodo = await Todo.findOne({ _id: id });
      res.status(201).send(getTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createTodo: async (req, res) => {
    const createTodo = new Todo(req.body);
    try {
      await createTodo.save();
      res.status(201).json(createTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteTodo: async function (req, res) {
    const id = req.query._id;
    try {
      await Todo.findOneAndDelete({ _id: id });
      res.status(201).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  updateTodo: async function (req, res) {
    const id = req.query._id;
        try {
            const updTodo = await Todo.findOneAndUpdate({ _id: id }, req.body, { new: true });
            res.status(200).json(updTodo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
  },
};
