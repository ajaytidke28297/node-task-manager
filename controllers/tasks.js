const Task = require("../models/Task");

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(403).json({ message: "Validation Failed" });
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(new Task(req.body));
    if (!task) {
      throw new Error("Task not found");
    }
    res.status(201).json(task);
  } catch (err) {
    res.status(403).json({ message: "Validation Failed" });
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Validation Failed" });
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      throw new Error("Task not found");
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Validation Failed" });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      throw new Error("Task not found");
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Validation Failed" });
  }
};
