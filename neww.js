

import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.timestamp),
    datasets: [{
      label: 'Sample Data',
      data: data.map(entry => entry.value),
      backgroundColor: data.map(entry => {
        if (entry.value === 0) return 'yellow';
        else if (entry.value === 1) return 'green';
        else return 'red';
      }),
      borderColor: 'black',
      borderWidth: 1,
    }]
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'hour'
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Chart;
