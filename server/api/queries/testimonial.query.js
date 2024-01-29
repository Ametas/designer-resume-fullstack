const { connection } = require('../../config/db')

async function getTestimonials() {
    try {
        const db = await connection()
        const collection = db.collection('resumeProperties')

        const result = await collection.findOne({}, { 
            projection: {
                _id: 0, 
                'testimonial': 1, 
            }
        })
        return result.testimonial
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getTestimonials }