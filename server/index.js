const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("./models/User");
const PORT = 3000;

// Accept incoming from client
app.use(cors());
app.use(bodyParser.json());

// database
const database = require("./database/config");

// localhost:3000
app.get("/", function (req, res) {
  res.send("Hi express here!");
});

app.post("/register", function (req, res) {
  const { email, password } = req.body;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      User.create({
        email: email,
        password: hash,
      })
        .then((ok) => console.log("User is created!"))
        .catch((error) => console.log(error));
    });
  });
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((match) => {
      bcrypt.compare(password, match.password, function (err, result) {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, function () {
  console.log("Server startad");
});
