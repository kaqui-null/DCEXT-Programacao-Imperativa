
const express = require("express");
const app = express();

var fs = require('fs');

var examesObj;
fs.readFile('json_api_modules/exames.json', 'utf8', function (err, data) {
  if (err) throw err;
  examesObj = JSON.parse(data);
});

var usersObj;
fs.readFile('json_api_modules/users.json', 'utf8', function (err, data) {
  if (err) throw err;
  usersObj = JSON.parse(data);
});

app.get("/api/examesJson", (req, res) => {
    res.json(examesObj);
})

app.get("/api/usersJson", (req, res) => {
  res.json(usersObj)
})

app.listen(5000, () => console.log("server running on port 5000"));