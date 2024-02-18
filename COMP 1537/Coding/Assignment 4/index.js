// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.use(express.static("public"));
app.use("/public/css", express.static("./public/css"));
app.use("/public/js", express.static("./public/js"));
app.use("/public/img", express.static("./public/img"));

app
  .get("/", function (req, res) {
    res.sendFile(__dirname + "/app/html/main.html");
  })

  .listen(8000);
