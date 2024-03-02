
const express = require("express");
const app = express();

var fs = require('fs');

var examesObj;
fs.readFile('exames.json', 'utf8', function (err, data) {
  if (err) throw err;
  examesObj = JSON.parse(data);
});

app.get("/api", (req, res) => {
    res.json(examesObj);
})

app.listen(5000, () => console.log("server running on port 5000"));