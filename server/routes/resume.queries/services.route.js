const express = require('express')
const router = express.Router()
const { getServicesData } = require('../../api/queries/services.query')

router.get('/', async (req, res) => {
    try {
        const data = await getServicesData()
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router
