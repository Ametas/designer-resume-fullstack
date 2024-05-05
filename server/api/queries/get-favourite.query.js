const { connection } = require('../../config/db')

async function getFavourite() {
  try {
    const db = await connection()
    const collection = db.collection('orders')
    const query = { isFavourite: true };

    return collection.find(query).toArray()
  } catch (error) {
    console.error(error);
    throw error
  }
}

module.exports = { getFavourite }