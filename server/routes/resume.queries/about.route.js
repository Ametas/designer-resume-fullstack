const express = require('express')
const router = express.Router()
const { getAboutData } = require('../../api/queries/about.query')

router.get('/', async (req, res) => {
    try {
        const data = await getAboutData()
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router
