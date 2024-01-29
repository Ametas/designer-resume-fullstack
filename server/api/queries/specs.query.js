const { connection } = require('../../config/db')

async function getSpecs() {
    try {
        const db = await connection()
        const collection = db.collection('resumeProperties')

        const result = await collection.findOne({}, { 
            projection: {
                _id: 0, 
                'about.specs': 1, 
            }
        })
        return result.about
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getSpecs }