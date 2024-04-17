// Define the parameters for the simulation
const numberOfDataPoints = 100; // Number of data points to generate
const minTemperature = -10; // Minimum temperature (in Celsius)
const maxTemperature = 40; // Maximum temperature (in Celsius)

// Function to generate random temperature data
function generateSampleData() {
  const sampleData = [];
  const timestamp = new Date(); // Start with the current timestamp

  for (let i = 0; i < numberOfDataPoints; i++) {
    // Generate a random temperature between minTemperature and maxTemperature
    const temperature = Math.random() * (maxTemperature - minTemperature) + minTemperature;
    
    // Add the temperature and timestamp to the sample data
    sampleData.push({ timestamp: new Date(timestamp), temperature });
    
    // Increment the timestamp by 1 hour for the next data point
    timestamp.setHours(timestamp.getHours() + 1);
  }

  return sampleData;
}

// Generate sample data
const sampleData = generateSampleData();

// Print the generated sample data
console.log('Generated Sample Data:');
console.log(sampleData);
