import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TimelineComponent = () => {
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/sampledata');
        setSampleData(response.data);
      } catch (error) {
        console.error('Error fetching sample data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="timeline">
      {sampleData.map((dataPoint) => (
        <div
          key={dataPoint.timestamp}
          className="data-point"
          style={{ backgroundColor: getColorForSample(dataPoint.sample) }}
        ></div>
      ))}
    </div>
  );
};

const getColorForSample = (sample) => {
  switch (sample) {
    case 0:
      return 'yellow';
    case 1:
      return 'green';
    default:
      return 'red';
  }
};

export default TimelineComponent;
