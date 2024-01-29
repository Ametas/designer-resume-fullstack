const { connection } = require('../../config/db')

async function getSocialLinks() {
    try {
        const db = await connection()
        const collection = db.collection('resumeProperties')

        const result = await collection.findOne({}, { 
            projection: {
                _id: 0, 
                'header.socials': 1, 
            }
        })
        return result.header
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getSocialLinks }