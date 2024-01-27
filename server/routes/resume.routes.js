const express = require('express')
const router = express.Router()
const headerRoute = require('./resume.queries/header.route')

router.use('/header', headerRoute)
router.use('/heroText', headerRoute)



module.exports = router

//resume.router.js