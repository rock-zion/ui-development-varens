import React from 'react';
import { DoubleRowDetail } from './profileimages';
import style from './profile.module.scss';
import classNames from 'classnames';
import { default as Success } from 'assets/Success.svg';
import { default as Pending } from 'assets/Pending.svg';
import { default as Pickup } from 'assets/Pickup.svg';
import { default as Failed } from 'assets/Failed.svg';

export const TransactionHistory = ({
  date_time,
  invoice_no,
  status,
  remark,
  amount,
}) => {
  const getTitle = invoice => {
    if (status === 'success') return `Payment from ${invoice}`;
    if (status === 'failed') return `Failed from ${invoice}`;
    if (status === 'pending') return `Pending from ${invoice}`;
  };

  const getIcon = remark => {
    if (remark === 'Completed') return <Success />;
    if (remark === 'Declined') return <Failed />;
    if (remark === 'Pending') return <Pending />;
    if (remark === 'For Pickup') return <Pickup />;
  };

  return (
    <div
      className={classNames(
        style.thistory_wrapper,
        'mb-3',
        'd-flex',
        'justify-content-between'
      )}>
      <div className='d-flex'>
        {getIcon(remark)}
        <DoubleRowDetail
          detail1={getTitle(invoice_no, status)}
          detail2={date_time}
        />
      </div>
      <div className='d-flex flex-column align-items-end'>
        <span className='display-1 fw-bold text-dark mb-2px'>{amount}</span>
        <span className={classNames('display-1')}>{remark}</span>
      </div>
    </div>
  );
};
