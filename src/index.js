const express = require("express");
const morgan = require("morgan");
const engine = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Templace engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log("req: ", req.query);
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
