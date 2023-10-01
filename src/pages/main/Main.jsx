import React from 'react';
import MainNotice from '../../components/main/MainNotice';
import SearchBar from '../../components/main/SearchBar';
import { Container } from '@mui/material';

const Main = () => {
  return (
    <>
      <MainNotice />
      <Container maxWidth="xl">
        <SearchBar />
        Main
      </Container>
    </>
  );
};

export default Main;
