import React from 'react';
import { Filter } from 'components/filter/filter';

export const Header = () => {
  return (
    <div>
      <div>
        <h2 className='text-dark'>Welcome back, {'Max'}</h2>
        <span className='text-secondary'>
          Here&apos;s what&apos;s happening with your store today.
        </span>
      </div>
      <div>
        <Filter />
      </div>
    </div>
  );
};
