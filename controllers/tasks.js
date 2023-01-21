exports.getTasks = (req, res, next) => {
  res.send("All Items");
};

exports.createTask = (req, res, next) => {
  res.send("Create Task");
};

exports.getTask = (req, res, next) => {
  res.send("Get Task");
};

exports.updateTask = (req, res, next) => {
  res.send("Update Task");
};

exports.deleteTask = (req, res, next) => {
  res.send("delete Task");
};
