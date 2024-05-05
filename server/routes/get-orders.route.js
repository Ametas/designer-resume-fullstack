const express = require('express')
const router = express.Router()

const { getOrders } = require('../api/queries/get-order.query')

router.get('/', async (req, res) => {
  try {
    const data = await getOrders()
    res.json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

module.exports = router