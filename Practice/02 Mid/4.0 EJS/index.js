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

    var name = req.body.name;
    var age = req.body.age;
    

    var seed = 0;
    for (let i = 0; i < name.length; i++) {
        seed += name.charCodeAt(i);
    }
    seed = seed % 100;

    var left = Math.ceil(age*1618/365*seed);

    var isName = name.length > 0
    if (!isName) name = "-unknown entity-";

    var isNumber = !isNaN(age) && !isNaN(parseFloat(age))
    if (!isNumber) {
        age = "-unknown-";
        left = "-unknown-";
    }

    res.render("index.ejs", { name: name, age: age, left: left });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
