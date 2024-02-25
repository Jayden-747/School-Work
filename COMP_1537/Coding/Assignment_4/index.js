// REQUIRES

// Imports the express module
const express = require("express");

// Creates an Express Application
const app = express();
app.use(express.json());

// Port for the server
const port = 8000;

// Imports the File System module
const fs = require("fs");

app.use("/public/css", express.static("./public/css"));
app.use("/public/js", express.static("./public/js"));
app.use("/public/img", express.static("./public/img"));

// Reads the HTML File
app.get("/", function (req, res) {
  const doc = fs.readFileSync("./app/html/main.html", "utf8");
  res.send(doc);
});

app.get("/article-lists", function (req, res) {
  const doc = fs.readFileSync("./app/html/data/article-lists.html", "utf8");

  res.send(doc);
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
