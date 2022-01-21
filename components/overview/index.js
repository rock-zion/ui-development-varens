import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';
import { default as Gain } from 'assets/Gain.svg';
import { default as Loss } from 'assets/Loss.svg';
import { default as Sales } from 'assets/Sales.svg';
import { default as Visitor } from 'assets/Visitor.svg';
import { default as Orders } from 'assets/Orders.svg';
import { default as Refunded } from 'assets/Refunded.svg';

export const Overview = ({ overview_data }) => {
  const [isHovered, setIsHovered] = useState(0);
  
  const overview_wrapper = classNames(
    style.overview_wrapper,
    'p-4',
    'bg-white',
    'mb-2'
  );

  const handleMouseEnter = id => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(0);
  };

  return (
    <div className={style.overview_parent}>
      {overview_data.map(({ id, Img, title, amount, profit, daily_amount }) => (
        <div
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={handleMouseLeave}
          key={title}
          className={overview_wrapper}>
          <div
            className={classNames(
              style.overview_header,
              'd-flex',
              'align-items-center',
              'mb-4'
            )}>
            <Img fill={isHovered === id ? '#FFFFFF' : '#5542F6'} />
            <span className={classNames(style.title, 'd-block', ' ml-2')}>
              {title}
            </span>
          </div>
          <div className={style.detail}>
            <span className={classNames(style.overview_amount, 'text-dark')}>
              {amount}
            </span>
            <div
              className={classNames(
                style.overview_base,
                'd-flex',
                'align-items-center'
              )}>
              <span className={style.profit_stat_icon}>
                {profit?.status ? <Gain /> : <Loss />}
              </span>
              <span className={classNames(style.profit_rate, 'text-dark')}>
                {profit.rate}%
              </span>
              <span
                className={classNames(style.daily_amount, 'text-secondary')}>
                +{daily_amount} today
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Overview.defaultProps = {
  overview_data: [
    {
      id: '1',
      Img: Sales,
      title: 'Total sales',
      amount: '$391,820.75',
      profit: { status: true, rate: 21.9 },
      daily_amount: '$67k',
    },
    {
      id: '2',
      Img: Visitor,
      title: 'Visitor',
      amount: '831,071',
      profit: { status: true, rate: 13 },
      daily_amount: '7k',
    },
    {
      id: '3',
      Img: Orders,
      title: 'Total orders',
      amount: '1,042,665',
      profit: { status: true, rate: 5.7 },
      daily_amount: '5k',
    },
    {
      id: '4',
      Img: Refunded,
      title: 'Refunded',
      amount: '50,441',
      profit: { status: false, rate: 5.7 },
      daily_amount: '5k',
    },
  ],
};
