import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {

  let resultPage = `
    <h1 style="background-color: black; color: red; padding: 200px;">You will be killed at ${req.body.street} by ${req.body.pet}.</h1>
  `;

  res.send(resultPage);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
