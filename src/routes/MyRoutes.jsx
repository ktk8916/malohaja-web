import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from './Template';
import Main from '../pages/main/Main';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
