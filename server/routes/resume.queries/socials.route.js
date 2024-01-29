const express = require('express')
const router = express.Router()
const { getSocialLinks } = require('../../api/queries/socials.query')

router.get('/', async (req, res) => {
    try {
        const data = await getSocialLinks()
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router