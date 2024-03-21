const express = require('express')
const app = express()
const cors = require('cors')
var fs = require('fs')
const routes = require('./routes')

app.use(cors())
app.use(express.json());
app.use(routes)

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

app.post("/api/usersCadastro", (req, res) => {
    res.json(usersObj)
    usersObj[0]=req.body
    fs.writeFileSync('json_api_modules/users.json', JSON.stringify(usersObj));
})



app.get('/',(req,res) =>{
    res.send('hello world!');
});

app.get('/asset', function(req, res) {
    var pdf= fs.readFileSync("./json_api_modules/test.pdf")
    res.contentType("application/pdf")
    res.send(pdf)
})


app.listen(5000, () => {
    console.log('listening on port 5000');
});


