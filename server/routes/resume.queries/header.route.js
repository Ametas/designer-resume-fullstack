const express = require('express')
const router = express.Router()
const { getHeaderProps } = require('../../api/queries/header.query')

router.get('/', async (req, res) => {
    try {
        const headerProps = await getHeaderProps()
        res.json(headerProps)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        })
    }
})

module.exports = router

//header.route.js