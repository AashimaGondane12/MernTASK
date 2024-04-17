const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Third-party weather API endpoint
const weatherAPIKey = 'YOUR_WEATHER_API_KEY';
const weatherAPIEndpoint = 'http://api.openweathermap.org/data/2.5/weather';

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to get temperature for a location
app.get('/api/temperature', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    // Make a request to the weather API
    const response = await axios.get(weatherAPIEndpoint, {
      params: {
        lat,
        lon,
        appid: weatherAPIKey,
        units: 'metric', // Specify units as Celsius
      },
    });

    // Extract temperature from the API response
    const temperature = response.data.main.temp;

    // Return temperature in the response
    res.json({ temperature });
  } catch (error) {
    console.error('Error fetching temperature:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
