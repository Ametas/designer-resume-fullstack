const { connection } = require('../../config/db')

async function getStats() {
  try {
    const db = await connection()
    const collection = db.collection('orders')

    const documentsCount = await collection.countDocuments({}, 
      function(err, count) {
        if(err) throw err
        return count
    })
    const completedCount = await collection.countDocuments({ status: 'completed' }, 
      function(err, completed) {
        if(err) throw err
        return completed
    })
    const holdingCount = await collection.countDocuments({ status: 'on-holding' }, 
      function(err, holding) {
        if(err) throw err
        return holding
    })
    const cancelledCount = await collection.countDocuments({ status: 'rejected' }, 
      function(err, rejected) {
        if(err) throw err
        return rejected
    })
    const res = {
      count: documentsCount,
      completed: completedCount,
      onHolding: holdingCount,
      rejected: cancelledCount
    }

    return res;
  } catch (error) {
    console.log(error);
    throw error
  }
}

module.exports = { getStats }