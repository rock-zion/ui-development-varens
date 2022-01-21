import React, { useContext, useEffect } from 'react';
import { DrawerContext } from 'hooks/drawer';
import { Sidebar } from 'components/sidebar';
import classNames from 'classnames';

const Layout = ({ children }) => {
  return (
    <div className='container-fluid'>
      <Sidebar />
      <div className={'main'}>{children}</div>
    </div>
  );
};

export default Layout;
