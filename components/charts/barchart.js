import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    y: {
      grid: {
        borderDash: [1, 4],
        color: '#84818A',
      },
      ticks: {
        stepSize: 20,
      },
    },
    x: {
      display: false,
      grid: {
        drawBorder: false,
        display: false,
      },
      barPercentage: 0.4,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const data = {
  labels,
  barThickness: 16,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      backgroundColor: 'rgba(85, 66, 246, 1)',
      barPercentage: 0.5,
      categoryPercentage: 0.5,
      borderRadius: 2
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      backgroundColor: 'rgba(200, 194, 252, 1)',
      barPercentage: 0.5,
      categoryPercentage: 0.5,
      borderRadius: 2
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
