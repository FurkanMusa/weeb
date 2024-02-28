import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Example",
        seconds: new Date().getSeconds(),
        items: ["Ali", "Veli", "49", "50"],
        htmlContent: "<em>S.A.</em>",
    };
    res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
