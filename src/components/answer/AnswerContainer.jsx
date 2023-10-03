import React from 'react';
import { Grid } from '@mui/material';
import AnswerAudio from './AnswerAudio';

const AnswerContainer = ({ answers = [] }) => {
  return (
    <Grid container spacing={1}>
      {answers.map((answer, index) => (
        <Grid item xs={12} md={12}>
          <AnswerAudio answer={answer} />
        </Grid>
      ))}
      <Grid item xs={12} md={12}>
        <AnswerAudio />
      </Grid>
      <Grid item xs={12} md={12}>
        <AnswerAudio />
      </Grid>
    </Grid>
  );
};

export default AnswerContainer;
