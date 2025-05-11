import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const RootLayout = () => {
  return (
    <div>
      <Menu />
      <div className="container">
      <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
