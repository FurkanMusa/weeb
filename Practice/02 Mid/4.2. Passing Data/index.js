import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {info: "<h1>What is your na me?</h1>"});
});

app.post("/submit", (req, res) => {

  var info = req.body.fName.length + req.body.lName.length;
  info = "<h1>It apperars your name has " + info + " characters. Which is lame :(</h1>";

  res.render("index.ejs", {info: info})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
