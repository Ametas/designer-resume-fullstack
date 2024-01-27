const express = require('express')
const router = express.Router()
const { getHeroText } = require('../../api/queries/hero-text.query')

router.get('/', async (req, res) => {
    try {
        const heroTextProps = await heroTextProps()
        res.json(heroTextProps)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router

//header.route.js