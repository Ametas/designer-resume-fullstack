const { connection } = require('../../config/db')

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

async function insertOrder(order) {
  try {
    const currentDate = formatDate(new Date())
    const modifiedUserData = {...order, status: 'on-holding', orderDate: currentDate, isFavourite: false}
    const db = await connection()
    const ordersCollection = db.collection('orders')

    const result = await ordersCollection.insertOne(modifiedUserData)
    console.log(`Пользователь с ${result.insertedId} успешно записан в базу данных`)
  } catch (err) {
    console.error('Error in insertOrder:', err);
  }
}

module.exports = { insertOrder }