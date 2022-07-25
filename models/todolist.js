const mongoose = require("mongoose");
const toDoListSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  priority: {
    type: Boolean,
    required: true,
  },
  deadline: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ToDoList", toDoListSchema, "tasks");
