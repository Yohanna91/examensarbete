const express = require("express")
const app = express();
const PORT = 3000

// database
const database = require("./database/config");

// localhost:3000
app.get("/", function(req, res) {
    res.send("Hi express here!")
})

app.listen(PORT, function() {
    console.log("Server startad")
})