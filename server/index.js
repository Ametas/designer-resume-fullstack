require('dotenv').config()
const express = require('express')

const IP = process.env.APP_IP || 'localhost'
const PORT = process.env.APP_PORT

const app = express()
const router = require('./routes/resume.routes')

app.use('/api', router)

app.listen(PORT, IP, () => {
    console.log(`http://${IP}:${PORT}`);
})

//index.js