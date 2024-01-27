require('dotenv').config()
const express = require('express')

const IP = process.env.APP_IP || 'localhost'
const PORT = process.env.APP_PORT

const app = express()

app.get('/api', (req, res) => {
    res.json({
        message: 'hello'
    })
})

app.listen(PORT, IP, () => {
    console.log(`http://${IP}:${PORT}`);
})