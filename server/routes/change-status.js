const { connection } = require('../config/db')
const express = require('express')
const router = express.Router()
const mongodb = require('mongodb')

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { status } = req.body

  try {
    const db = await connection()
    const collection = db.collection('orders')

    await collection.updateOne(
      { _id: new mongodb.ObjectId(id) }, 
      { $set: { status: status } }
    )
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error in changeStatus:', error);
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router