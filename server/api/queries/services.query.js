const { connection } = require('../../config/db')

async function getServicesData() {
    try {
        const db = await connection()
        const collection = db.collection('resumeProperties')

        const result = await collection.findOne({}, { 
            projection: {
                _id: 0, 
                'services': 1, 
            }
        })
        return result.services
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getServicesData }