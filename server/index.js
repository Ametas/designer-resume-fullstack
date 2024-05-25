require('dotenv').config()
const express = require('express')
const path = require('path')

const IP = process.env.APP_IP || 'localhost'
const PORT = process.env.APP_PORT

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')))

const router = require('./routes/resume.routes')

app.use((req, res, next) => {
    console.log(`Request URL: ${req.method} ${req.url}`);
    next()
})
app.use('/api', router)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})


app.listen(PORT, IP, () => {
    console.log(`http://${IP}:${PORT}`);
})

//index.js