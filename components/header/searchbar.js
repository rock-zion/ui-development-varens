import React, { useState } from 'react';
import style from './style.module.scss';
import { default as SmSearch } from 'assets/SmSearch.svg';
import classNames from 'classnames';
import Notification from 'assets/Notification.svg';
import { ProfileImage } from 'components/profiles/profileimages';
import { Dropdown } from 'components/dropdown';

export const Searchbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const search_header = classNames(
    style.search_header,
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );
  return (
    <div className={search_header}>
      <div
        className={classNames(
          style.input_wrapper,
          'h-100 d-flex align-items-center'
        )}>
        <SmSearch />
        <Search />
      </div>
      <div className='d-flex align-items-center'>
        <span className='position-relative mr-3'>
          <Notification />
          <span className='notification_alert d-block position-absolute'></span>
        </span>
        <div className='d-flex'>
          <span className='img-bg mr-2'>
            <ProfileImage
              size='sm'
              src='https://res.cloudinary.com/rock-zion/image/upload/v1642741576/ben-parker-OhKElOkQ3RE-unsplash.jpg'
            />
          </span>
          <Dropdown
            title={"Maxbert"}
            showDropDown={showDropDown}
            setShowDropDown={setShowDropDown}
          />
        </div>
      </div>
    </div>
  );
};

export const Search = () => {
  return (
    <input
      className={classNames(style.search_input, 'border-0 ml-2')}
      type='text'
      placeholder='Search...'
    />
  );
};
