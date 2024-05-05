const { connection } = require('../../config/db')

async function getOrders() {
  try {
    const db = await connection()
    const collection = db.collection('orders')
    return collection.find({}).toArray()
  } catch (error) {
    console.error(error);
    throw error
  }
}

module.exports = { getOrders }