const express = require('express')
const router = express.Router()

const headerRoute = require('./resume.queries/header.route')
const heroText = require('./resume.queries/hero-text.route')
const socials = require('./resume.queries/socials.route')
const about = require('./resume.queries/about.route')
const specs = require('./resume.queries/specs.route')
const services = require('./resume.queries/services.route')
const testimonial = require('./resume.queries/testimonial.route')

const insertOrder = require('./insert-order.route')
const isFavouriteToggle = require('./isFavourite-toggle')
const getOrder = require('./get-orders.route')
const getFavourite = require('./get-favourite.route')
const orderStatus = require('./change-status')
const getStats = require('./stats.route')
const getChartStats = require('./chart-stats.route')

router.use('/header', headerRoute)
router.use('/heroText', heroText)
router.use('/socials', socials)
router.use('/about', about)
router.use('/specs', specs)
router.use('/services', services)
router.use('/testimonial', testimonial)

router.use('/order', insertOrder)
router.use('/orders', isFavouriteToggle)
router.use('/orderStatus', orderStatus)
router.use('/getFavourite', getFavourite)
router.use('/getOrders', getOrder)
router.use('/stats', getStats)
router.use('/chartStats', getChartStats)

module.exports = router

//resume.router.js