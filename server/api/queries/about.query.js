const { connection } = require('../../config/db')

async function getAboutData() {
  try {
    const db = await connection()
    const collection = db.collection('resumeProperties')

    const result = await collection.findOne({}, { 
      projection: {
        _id: 0, 
        'about.title': 1, 
        'about.paragraph': 1, 
        'about.btn': 1, 
      }
    })
    return result.about
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getAboutData }