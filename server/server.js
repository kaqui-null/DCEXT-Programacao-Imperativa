const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/api", (req, res) => {
    res.json(
        {"hospital": ["hospital 1", "hospital 2", "hospital 3"],
        "data realizacao" : ["data 1", "data 2", "data 3"],
        "data liberacao" : ["data 1", "data 2", "data 3"],
        "status geral": ["status 1", "status 2", "status 3"],
        "status por exame" : ["status 1", "status 2", "status 3", "status 4"],
        "arquivos gerais" : ["arquivo 1", "arquivo 2", "arquivo 3"],
        "arquivos por exame" : ["arquivo 1", "arquivo 2", "arquivo 3", "arquivo 4"]
        },
    )
})

app.listen(5000, () => { console.log("server started on port 5000")})