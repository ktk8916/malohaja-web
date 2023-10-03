import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from './Template';
import Main from '../pages/main/Main';
import Oauth2Loading from '../components/header/Oauth2Loading';
import Signup from '../pages/signup/Signup';
import QuestionWriter from '../pages/write/QuestionWriter';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/" element={<Main />} />
        <Route path="/question/write" element={<QuestionWriter />} />
      </Route>
      <Route path="/auth/login/:provider" element={<Oauth2Loading />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MyRoutes;
