const express = require('express')
const router = express.Router()
const { getSpecs } = require('../../api/queries/specs.query')

router.get('/', async (req, res) => {
    try {
        const data = await getSpecs()
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router
