import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export const Dropdown = ({ title, showDropDown, setShowDropDown }) => {
  return (
    <div className='dropdown bg-transparent'>
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className='btn btn-secondary bg-transparent border-0 dropdown-toggle'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        {title}
      </button>
      <div
        className={classNames('dropdown-menu', `${showDropDown ? 'show' : ''}`)}
        aria-labelledby='dropdownMenuButton'>
        <a
          onClick={() => setShowDropDown(!showDropDown)}
          className='dropdown-item'
          href='#'>
          Logout
        </a>
      </div>
    </div>
  );
};
