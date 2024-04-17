const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017';

const dbName = 'sample_database';

const collectionName = 'raw_data';

// 
const sampleData = [
  { timestamp: new Date('2024-04-16T12:00:00Z'), sample: 1 },
  { timestamp: new Date('2024-04-16T13:00:00Z'), sample: 0 },
  { timestamp: new Date('2024-04-16T14:00:00Z'), sample: 1 },
  { timestamp: new Date('2024-04-16T15:00:00Z'), sample: 1 },
  
];


async function insertSampleData() {
  const client = new MongoClient(uri);

  try {
    
    await client.connect();

    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    const result = await collection.insertMany(sampleData);
    console.log(`${result.insertedCount} documents inserted.`);
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    
    await client.close();
  }
}

insertSampleData();
