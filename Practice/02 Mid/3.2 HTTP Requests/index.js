import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1 style=\"color:red;\">Home <br><a href=\"/about\">about me</a></h1>");
})

app.get("/about", (req, res) => {
  res.send("<h1>Yes its me</h1>");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

