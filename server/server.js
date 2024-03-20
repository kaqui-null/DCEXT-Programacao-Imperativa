const express = require('express')
const app = express()
const cors = require('cors')
var fs = require('fs')

app.use(cors())
app.use(express.json());

var examesOBJ;
fs.readFile('json_api_modules/exames.json', 'utf8', function(err,data){
    if(err) throw err;
    examesOBJ = JSON.parse(data);
})

app.get("/api/examesJSON", (req, res) => {
    res.json(examesOBJ)
})

var usersObj;
fs.readFile('json_api_modules/users.json', 'utf8', function (err, data) {
  if (err) throw err;
  usersObj = JSON.parse(data);
});

app.get("/api/usersJson", (req, res) => {
    res.json(usersObj)
})

app.get('/',(req,res) =>{
    res.send('hello world!');
});

app.listen(5000, () => {
    console.log('listening on port 5000');
});


