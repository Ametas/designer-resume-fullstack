const { connection } = require('../../config/db');

async function getHeaderProps() {
  try {
    const db = await connection();
    const collection = db.collection('resumeProperties');
    return collection.findOne({}, { projection : {header: 1, _id: 0 }});
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { getHeaderProps };
