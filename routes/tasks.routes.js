const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

//GET /tasks
router.get("/", getTasks);
//GET /tasks/:get
router.get("/:id", getTaskById);
//POST /tasks
router.post("/", createTask);
//PATCH /tasks/:id
router.patch("/:id", updateTask);
//DELETE /tasks/:id
router.delete("/:id", deleteTask);

module.exports = router;
