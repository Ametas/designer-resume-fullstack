const express = require('express')
const router = express.Router()

const { getFavourite } = require('../api/queries/get-favourite.query')

router.get('/', async (req, res) => {
  try {
    const data = await getFavourite()
    res.json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

module.exports = router