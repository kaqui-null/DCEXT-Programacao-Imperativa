
const express = require("express");
const app = express();

var fs = require('fs');

var examesObj;
fs.readFile('exames.json', 'utf8', function (err, data) {
  if (err) throw err;
  examesObj = JSON.parse(data);
});

app.get("/api/examesJson", (req, res) => {
    res.json(examesObj);
})
app.get("/api/usersJson", (req, res) => {
  res.json({"users": ["usr1", "usr2", "usr3", "usr4"]})
})

app.listen(5000, () => console.log("server running on port 5000"));