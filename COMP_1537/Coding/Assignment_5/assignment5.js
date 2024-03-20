const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// Express Functions
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

// Sends text stream
app.get("/", function (req, res) {
  res.send(fs.readFileSync("./app/html/main.html", "utf-8"));
});

app.get("/user", function (req, res) {
  // MySql Functions
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assignment5",
  });
  // Selects the tables form the database and prints them to the console.
  connection.connect(function (error) {
    if (error) throw err;
    connection.query(
      "SELECT user_name, first_name, last_name, email_address, StudentID FROM A01064647_user WHERE StudentID IN (SELECT StudentID FROM a01064647_user_timeline WHERE PostID = '1')",
      function (error, result, fields) {
        if (error) throw err;
        console.log(result);
        res.send(result);
      }
    );
    console.log("Connected!");
  });
});

app.get("/user-timeline", function (req, res) {
  // MySql Functions
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assignment5",
  });
  // Selects the tables form the database and prints them to the console.
  connection.connect(function (error) {
    if (error) throw err;
    connection.query(
      "SELECT * FROM A01064647_user_timeline",
      function (error, result, fields) {
        if (error) throw err;
        console.log(result);
        res.send(result);
      }
    );
    console.log("Connected!");
  });
});

// Printed when the Node server starts.
let port = 8000;
app.listen(port, function () {
  console.log("Listening on port " + port + "!");
});
