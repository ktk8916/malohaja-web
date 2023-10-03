import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import { Grid } from '@mui/material';
import { noTokenApi } from '../../services/apiClient';

const QuestionContainer = () => {
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    const data = await noTokenApi(`/api/v1/question`, 'GET', {});
    console.log(data);
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <Grid marginTop={2} container spacing={2}>
      {questions.map((question, index) => (
        <Grid item xs={12} md={6} key={index}>
          <QuestionCard question={question} />
        </Grid>
      ))}

      <Grid item xs={12} md={6}>
        <QuestionCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <QuestionCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <QuestionCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <QuestionCard />
      </Grid>
    </Grid>
  );
};

export default QuestionContainer;
