import React from 'react';
import style from './style.module.scss';
import { default as Refresh } from 'assets/Refresh.svg';
import { default as ViewMore } from 'assets/ViewMore.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { default as ArrowForward } from 'assets/ArrowForward.svg';

export const Transaction = ({
  title,
  hasToolbar,
  hasFooter,
  link,
  children,
}) => {
  const wrapper = classNames(
    style.wrapper,
    'bg-white',
    'wrapper',
    'd-flex',
    'flex-column'
    // 'justify-content-between'
  );
  return (
    <div className={wrapper}>
      <div
        className={classNames(
          'd-flex',
          'justify-content-between',
          'align-items-center',
          'mb-3'
        )}>
        <span className='title'>{title}</span>
        {hasToolbar && (
          <div>
            <button className='btn'>
              <Refresh />
            </button>
            <button className='btn'>
              <ViewMore />
            </button>
          </div>
        )}
      </div>

      {children}

      {hasFooter && (
        <div
          className={classNames(
            style.footer,
            'w-100',
            'd-flex',
            'justify-content-center',
            'align-items-center',
            'pt-2'
          )}>
          <Link href={link?.href}>
            <a className='display-2 text-secondary fw-bold'>
              {link?.title}
              <span className='ml-2'>
                <ArrowForward />
              </span>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
