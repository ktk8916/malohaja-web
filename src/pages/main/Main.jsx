import React from 'react';
import MainNotice from '../../components/main/MainNotice';
import SearchBar from '../../components/main/SearchBar';
import { Container } from '@mui/material';
import QuestionContainer from '../../components/question/QuestionContainer';

const Main = () => {
  return (
    <>
      <MainNotice />
      <Container maxWidth="xl">
        <SearchBar />
        <QuestionContainer />
      </Container>
    </>
  );
};

export default Main;
