import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  cutout: 75,
  responsive: true,
  maintainAspectRatio: false,
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
        drawBorder: false,
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export const data = {
  labels: ['Direct', 'Organic', 'Referral'],
  datasets: [
    {
      label: '# of Votes',
      data: [50, 40, 10],
      backgroundColor: [
        'rgba(85, 66, 246, 1)',
        'rgba(32, 201, 172, 1)',
        'rgba(0, 165, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut options={options} data={data} />;
}
