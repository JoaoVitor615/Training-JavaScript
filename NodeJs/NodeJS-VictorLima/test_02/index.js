const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", (req, res) => {
    res.send("Bem vindo ao meu blog")
})

app.get("/ola/:nome/:cargo/:cor", (req, res) => {
    res.send(`Ola ${req.params.nome}, Seu cargo é ${req.params.cargo}, Sua cor favorita é ${req.params.cor}`)
    
})

app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081")
})