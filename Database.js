const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'your_aashima';

const collectionName = 'your_collection_name';

async function generateSummary() {
  const client = new MongoClient(uri);

  try {
    
    await client.connect();

    
    const db = client.db(aashima);

    const collection = db.collection(collectionName);

    const sampleData = await collection.find().toArray();

    let onesCount = 0;
    let zerosCount = 0;
    let continuousVariations = {
      continuousZeros: 0,
      continuousOnes: 0
    };
    let currentVariation = 1;

  
    sampleData.forEach(dataPoint => {
      if (dataPoint.sample === 1) {
        onesCount++;
        continuousVariations.continuousOnes += currentVariation === 1 ? 1 : 0;
        currentVariation = 1;
      } else if (dataPoint.sample === 0) {
        zerosCount++;
        continuousVariations.continuousZeros += currentVariation === 0 ? 1 : 0;
        currentVariation = 0;
      }
    });

    console.log('Summary:');
    console.log('Number of 1s:', onesCount);
    console.log('Number of 0s:', zerosCount);
    console.log('Continuous 1s Variations:', continuousVariations.continuousOnes);
    console.log('Continuous 0s Variations:', continuousVariations.continuousZeros);

  } catch (error) {
    console.error('Error generating summary:', error);
  } finally {
    
    await client.close();
  }
}


generateSummary();
