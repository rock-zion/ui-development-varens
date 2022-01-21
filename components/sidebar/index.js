import React, { useState, useContext, useEffect } from 'react';
import style from './style.module.scss';
import { default as Overview } from 'assets/sidebar/Overview.svg';
import { default as Products } from 'assets/sidebar/Products.svg';
import { default as Orders } from 'assets/sidebar/Orders.svg';
import { default as Customers } from 'assets/sidebar/Customers.svg';
import { default as ManageReviews } from 'assets/sidebar/ManageReviews.svg';
import { default as Checkout } from 'assets/sidebar/Checkout.svg';
import { default as Setting } from 'assets/sidebar/Settings.svg';
import { default as Brand } from 'assets/sidebar/Logo.svg';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetPro } from 'components/getpro/getpro';

// LinkItem
const LinkItem = React.forwardRef(
  ({ getActiveColor, linkIsActive, text, onClick, IMG, href }, ref) => {
    //
    const link_wrapper = classNames('d-flex', 'px-3', style.link_wrapper, {
      'bg-primary_light text-dark': linkIsActive(href),
    });

    const link = classNames(
      style.link,
      'text-secondary',
      'd-flex',
      'align-items-center',
      {
        'text-dark': linkIsActive(href),
      }
    );

    return (
      <div className={link_wrapper} ref={ref}>
        <div className='d-flex'>
          <div className='mr-3 align-items-center'>
            <IMG fill={getActiveColor(href)} />
          </div>
          <a className={link} onClick={onClick} href={href}>
            {text}
          </a>
        </div>
      </div>
    );
  }
);

// Sidebar
export const Sidebar = ({ sidebar_links }) => {
  let { pathname } = useRouter();
  pathname = pathname.slice(1);

  const nav_style = classNames(style.aside, 'd-flex bg-white', {});

  const linkIsActive = link => {
    const isActive = pathname?.includes(link.slice(1)) ? true : false;
    return isActive;
  };

  const getActiveColor = link => {
    const isActive = pathname?.includes(link.slice(1)) ? '#5542F6' : '#84818A';
    return isActive;
  };

  return (
    <aside className={nav_style}>
      <div className={(style.brand_wrapper, 'd-flex mb-5')}>
        <Brand />
      </div>
      <div className={style.nav_wrapper}>
        <div className={style.nav}>
          {sidebar_links.map((data, index) => (
            <Link passHref key={index} href={data.url}>
              <LinkItem
                linkIsActive={linkIsActive}
                getActiveColor={getActiveColor}
                IMG={data.IMG}
                text={data.title}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className={style.sidebar_footer}>
        <GetPro />
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {
  sidebar_links: [
    { title: 'Overview', url: '/overview', IMG: Overview },
    { title: 'Product', url: '/products', IMG: Products },
    { title: 'Orders', url: '/orders', IMG: Orders },
    { title: 'Customers', url: '/customers', IMG: Customers },
    { title: 'Manage Reviews', url: '/managereviews', IMG: ManageReviews },
    { title: 'Checkout', url: '/checkout', IMG: Checkout },
    { title: 'Settings', url: '/settings', IMG: Setting },
  ],
};

// https://stackoverflow.com/questions/54519654/how-do-i-add-color-to-my-svg-image-in-react
