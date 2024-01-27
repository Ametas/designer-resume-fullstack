const { connection } = require('../../config/db')

async function getHeroText() {
    try {
        const db = await connection()
        const collection = db.collection('resumeProperties')

        const result = await collection.findOne({}, { projection: { _id: 0, 'header.title': 1, 'header.suptitle': 1, 'header.paragraph': 1, 'header.btns': 1 }})

        return result.header
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getHeroText }