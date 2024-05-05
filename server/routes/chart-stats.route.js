const express = require('express')
const router = express.Router()

const { getOrderCounts } = require('../api/queries/chart-stats.query')

router.get('/', async (req, res) => {
  const data = await getOrderCounts()
  res.json(data)
})

module.exports = router