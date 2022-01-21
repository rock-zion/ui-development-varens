import React from 'react';
import { Sidebar } from 'components/sidebar';
import classNames from 'classnames';

const Layout = ({ children }) => {
  return (
    <div className='container-fluid'>
      <Sidebar />
      <div className={classNames('main')}>{children}</div>
    </div>
  );
};

export default Layout;
