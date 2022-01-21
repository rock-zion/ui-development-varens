import React from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { numberWithCommas as formatNum } from 'utils';
import { default as SmGain } from 'assets/SmGain.svg';
import { default as SmLoss } from 'assets/SmLoss.svg';

export const TopProducts = ({ table_content }) => {
  const wrapper = classNames(
    style.tp_wrapper,
    'bg-white',
    'wrapper',
    'd-flex',
    'flex-column',
    'table-responsive'
  );
  const tr_td = classNames(
    'display-2',
    'fw-bold',
    'text-secondary',
    'px-0',
    'align-middle',
    'text-nowrap'
  );

  const tr_th = classNames(
    'border-bottom display-1 fw-bold text-secondary p-0 pb-2',
    'pr-24'
  );
  const table_row = classNames(style.table_row);
  return (
    <div className={wrapper}>
      <span className='title'>Top Products</span>
      <div className='table-responsive table-responsive-sm'>
        <table className='mt-auto table table-hove table-borderless'>
          <thead>
            <tr>
              <th className={tr_th} scope='col-1'>
                ITEM
              </th>
              <th className={tr_th} scope='col-1'>
                CHANGE
              </th>
              <th className={tr_th} scope='col-1'>
                PRICE
              </th>
              <th className={tr_th} scope='col-1'>
                SOLD
              </th>
              <th className={tr_th} scope='col-1'>
                SALES
              </th>
            </tr>
          </thead>
          <tbody>
            {table_content.map(item => (
              <tr key={item.item} className={table_row}>
                <td className={tr_td}>{item.item}</td>
                <td className={tr_td}>
                  {item.gain ? <SmGain /> : <SmLoss />}
                  {item.change}%
                </td>
                <td className={tr_td}>${item.price}</td>
                <td className={tr_td}>{formatNum(item.sold)}</td>
                <td className={tr_td}>${formatNum(item.sales)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TopProducts.defaultProps = {
  table_content: [
    {
      img: 'https://res.cloudinary.com/rock-zion/image/upload/v1642767002/echo.png',
      item: 'Amazon Echo Plus (3nd Gen) - Premium…',
      change: 5.7,
      gain: true,
      price: 49,
      sold: 5951,
      sales: 15302.0,
    },
    {
      item: 'Aedle VK-X - Premium Customisable Wir…',
      change: 11,
      gain: false,
      price: 49,
      sold: 6643,
      sales: 10331.7,
    },
    {
      item: 'Nikon D750 FX-format',
      change: 1.7,
      gain: true,
      price: 49,
      sold: 4609,
      sales: 7715.89,
    },
    {
      item: 'Minimalist wireless headphone',
      change: 7.0,
      gain: true,
      price: 49,
      sold: 5002,
      sales: 9917.45,
    },
    {
      item: 'Shinobi watch 2 - Cream white',
      change: 17,
      gain: false,
      price: 49,
      sold: 7545,
      sales: 8466.02,
    },
    {
      item: 'Polaroid Pronto 600',
      change: 9.7,
      gain: true,
      price: 49,
      sold: 4714,
      sales: 1302.0,
    },
  ],
};
