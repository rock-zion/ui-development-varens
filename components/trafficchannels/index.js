import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import classNames from 'classNames';
import { DoughnutChart } from 'components/charts/doughnut';

export const TrafficChannels = () => {
  const wrapper = classNames(style.wrapper, 'wrapper', 'bg-white');
  const [atab, setTab] = useState('all');

  useEffect(() => {
    console.log('atab', atab);
  }, [atab]);

  return (
    <div className={wrapper}>
      <div>
        <span className={classNames('title', 'text-dark')}>
          {'Traffic Channels'}
        </span>
      </div>

      <div>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item'>
            <a
              onClick={() => setTab('all')}
              className={classNames(
                'nav-link',
                `${atab === 'all' ? 'show active' : ''}`
              )}
              id='all-tab'
              data-toggle='tab'
              href='#all'
              role='tab'
              aria-controls='all'
              aria-selected='true'>
              All
            </a>
          </li>
          <li className='nav-item'>
            <a
              onClick={() => setTab('direct')}
              className={classNames(
                'nav-link',
                `${atab === 'direct' ? 'show active' : ''}`
              )}
              id='direct-tab'
              data-toggle='tab'
              href='#direct'
              role='tab'
              aria-controls='direct'
              aria-selected='false'>
              Direct
            </a>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div
            className={classNames(
              'tab-pane fade',
              `${atab === 'all' ? 'show active' : ''}`
            )}
            id='all'
            role='tabpanel'
            aria-labelledby='all-tab'>
            <div className={style.chart_container}>
              <DoughnutChart />
            </div>
            <div className={style.label_wrapper}>
              <span className={style.direct}>Direct</span>
              <span className={style.organic}>Organic</span>
              <span className={style.referral}>Referral</span>
            </div>
          </div>
          <div
            className={classNames(
              'tab-pane fade',
              `${atab === 'direct' ? 'show active' : ''}`
            )}
            id='direct'
            role='tabpanel'
            aria-labelledby='direct-tab'>
            <div className={style.chart_container}>
              <DoughnutChart />
            </div>
            <div className={style.label_wrapper}>
              <span className={style.direct}>Direct</span>
              <span className={style.organic}>Organic</span>
              <span className={style.referral}>Referral</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
