const express = require('express')
const router = express.Router()

const { insertOrder } = require('../api/queries/insert-order')

router.post('/', (req, res) => {
  const formData = req.body
  insertOrder(formData)
})

module.exports = router