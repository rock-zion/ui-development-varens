import classNames from 'classnames';
import React from 'react';
import style from './style.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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
        borderDash: [1, 4],
        color: '#84818A',
      },
      ticks: {
        stepSize: 100,
      },
    },
    x: {

      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: 'rgba(85, 66, 246, 1)',
      backgroundColor: 'rgba(85, 66, 246, 1)',
      tension: 0.3,
    },
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: 'rgba(32, 201, 172, 1)',
      backgroundColor: 'rgba(32, 201, 172, 1)',
      tension: 0.3,
    },
  ],
};

export const RevenueVsOrders = () => {
  const wrapper = classNames(
    style.wrapper,
    "wrapper",
    'bg-white',
    'd-flex',
    'flex-column',
    'justify-content-between'
  );
  return (
    <div className={wrapper}>
      <div className='d-flex justify-content-between align-items-center'>
        <span className={classNames('title', 'text-dark')}>
          {'Revenue vs Orders'}
        </span>
        <div className='d-flex'>
          <span className={style.revenue_title}>Revenue</span>
          <span className={style.order_title}>Orders</span>
        </div>
      </div>

      <div className={style.chart_container}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
