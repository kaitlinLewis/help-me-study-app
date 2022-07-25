const express = require("express");
const app = express;
const PORT = 3030;
const cors = require("cors");
const mongoose = require("mongoose");
const toDoList = require("./models/todolist");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Connected to database!");
  }
);

app.get("/", async (req, res) => {
  try {
    toDoList.find({}, (err, tasks) => {
      res.render("index.ejs", {
        TaskList: tasks,
      });
    });
  } catch (err) {
    if (err) return res.status(500).send(err);
  }
  //db.collection("tasks")
  //  .find.toArray()
  //  .then((data) => {
  //    res.render("index.ejs", { info: data });
  //  })
  //  .catch((error) => console.error(error));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
