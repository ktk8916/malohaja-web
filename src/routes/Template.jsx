import { Outlet } from 'react-router-dom';
import MyHeader from './MyHeader';
import React from 'react';

const Template = () => {
  return (
    <>
      <MyHeader />
      <Outlet />
    </>
  );
};

export default Template;
