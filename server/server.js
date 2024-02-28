const express = require('express')
const App = express()

App.get("/api", (req, res) => {
    res.json(
        {"users": ["userOne", "userTwo", "userThree"],
        "teste" : ["teste1", "teste2"]
        },
    )
})

App.listen(5000, () => { console.log("server started on port 5000")})