const express = require('express')
const router = express.Router()
const { getStats } = require('../api/queries/stats.query')

router.get('/', async (req, res) => {
  try {
    const data = await getStats()
    res.json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

module.exports = router