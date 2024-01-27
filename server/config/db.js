require('dotenv').config()
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL;

const client = new MongoClient(url);

const dbName = 'designer-resume'

async function connection() {
  try {
    await client.connect();
    console.log('Connected to the database success');

    return client.db(dbName)
    } catch (e) {
        console.log('DB connect error', e);
        throw error;
    }
}

module.exports = { connection, MongoClient }
