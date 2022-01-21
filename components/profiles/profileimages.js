import React from 'react';
import classNames from 'classnames';
import style from './profile.module.scss';

export const ProfileImage = ({ size, src, first_name, last_name }) => {
  const sizes = classNames(
    'bg-light_blue text-white',
    { [`${style.sm_img_wrapper}`]: size === 'sm' },
    { [`${style.lg_img_wrapper}`]: size === 'lg' }
  );
  return (
    <>
      {src && (
        <div className={classNames(sizes)}>
          {/* eslint-disable-next-line */}
          <img alt="" src={src} />
        </div>
      )}
      {!src && (
        <div className={classNames(sizes)}>
          <span className='display-1 fw-bold'>
            {first_name[0]}
            {last_name[0]}
          </span>
        </div>
      )}
    </>
  );
};

export const DoubleRowDetail = ({ detail1, detail2 }) => {
  return (
    <div className={classNames('d-flex', 'ml-2', ' flex-column')}>
      <span className={style.detail1}>{detail1}</span>
      <span className={style.detail2}>{detail2}</span>
    </div>
  );
};
