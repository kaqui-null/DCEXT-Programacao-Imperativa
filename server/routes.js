const express = require('express');

const routes = express.Router();

routes.get('/usersCadastro', (req,res) => {
    const {nome, email, cpf, data, telefone, password} = req.body;
    res.send(nome)
});

module.exports = routes;