const express = require('express')
const app = express()
const cors = require('cors')
var fs = require('fs')

app.use(cors())

var examesOBJ;
fs.readFile('exames.json', 'utf8', function(err,data){
    if(err) throw err;
    examesOBJ = JSON.parse(data);
})

app.get("/api/examesJSON", (req, res) => {
    res.json(examesOBJ)
})

app.listen(5000, () => { console.log("server started on port 5000")})