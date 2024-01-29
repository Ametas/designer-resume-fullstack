const express = require('express')
const router = express.Router()

const headerRoute = require('./resume.queries/header.route')
const heroText = require('./resume.queries/hero-text.route')
const socials = require('./resume.queries/socials.route')
const about = require('./resume.queries/about.route')
const specs = require('./resume.queries/specs.route')
const services = require('./resume.queries/services.route')
const testimonial = require('./resume.queries/testimonial.route')

router.use('/header', headerRoute)
router.use('/heroText', heroText)
router.use('/socials', socials)
router.use('/about', about)
router.use('/specs', specs)
router.use('/services', services)
router.use('/testimonial', testimonial)

module.exports = router

//resume.router.js