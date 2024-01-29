const express = require('express')
const router = express.Router()
const { getTestimonials } = require('../../api/queries/testimonial.query')

router.get('/', async (req, res) => {
    try {
        const data = await getTestimonials()
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router
