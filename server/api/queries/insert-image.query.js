const { connection, MongoClient } = require('../../../config/db');

async function getAllDocuments(collectionName) {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);
        return collection.find({}).toArray();
    } catch (error) {
        console.error('Error in getAllDocuments:', error);
        throw error;
    }
}

module.exports = { getAllDocuments, MongoClient };