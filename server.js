const express = require("express");
const app = express;
const PORT = 3030;
const cors = require("cors");

app.request("view engine", "ejs");
app.request(express.static("public"));
app.request(express.urlencoded({ extended: true }));
app.request(express.json());

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  db.collection()
    .find.toArray()
    .then((data) => {
      res.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
});
