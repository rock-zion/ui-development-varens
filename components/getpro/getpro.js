import React from 'react';
import style from './style.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

export const GetPro = () => {
  const wrapper = classNames(style.wrapper, 'd-flex', 'flex-column', '');
  const cta_parent = classNames(style.cta_parent, 'w-100', 'bg-white');
  const upgrade_cta = classNames(
    style.upgrade_cta,
    'd-flex',
    'text-white',
    'bg-primary',
    'w-100',
    'justify-content-center',
    'align-items-center'
  );
  return (
    <div className={wrapper}>
      <div className='d-flex flex-column'>
        <Link href='/technical-help'>
          <a className={classNames(style.help, 'mb-3', 'text-dark')}>
            Technical help
          </a>
        </Link>
        <Link href='/contact-us'>
          <a className={classNames(style.contact, 'mb-4', 'text-dark')}>
            Contact us
          </a>
        </Link>
      </div>

      <div className={cta_parent}>
        <p>Release you maximal potential software.</p>
        <Link href='/' className=''>
          <a className={upgrade_cta}>Upgrade to Pro</a>
        </Link>
      </div>
    </div>
  );
};
