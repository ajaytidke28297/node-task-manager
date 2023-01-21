const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

router.get("/", tasksController.getTasks);

router.post("/", tasksController.createTask);

router.get("/:id", tasksController.getTask);

router.patch("/:id", tasksController.updateTask);

router.delete("/:id", tasksController.deleteTask);

module.exports = router;
