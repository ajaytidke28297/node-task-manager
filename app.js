const express = require("express");

const mongoose = require("mongoose");

const app = express();

const tasks = require("./routes/tasks");

app.use(express.json());

app.get("/hello", (req, res, next) => {
  res.send("Task Manager app");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

mongoose
  .connect("mongodb+srv://ajay:ajay123@cluster0.ohqbmka.mongodb.net/store")
  .then((result) => {
    app.listen(port, console.log(`server is listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
