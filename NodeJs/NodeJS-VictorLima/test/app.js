const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log(req.body)
    res.json({"name": "joao"})
})

app.listen(3000, () => {
    "Servidor iniciado"
})