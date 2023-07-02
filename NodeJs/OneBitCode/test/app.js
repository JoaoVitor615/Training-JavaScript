const express = require('express')

const app = express()
app.use(express.json())

app.get("/test", (req, res) => {
    console.log(req.body)
    console.log(res.body)
    res.json({ "author": "João"})
})

app.listen("3001", () => {
    console.log('Servidor iniciado...')
})