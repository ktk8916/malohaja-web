import React, { useState } from 'react';
import { Container, Grid, TextField } from '@mui/material';
import SkillSelect from '../../components/main/SkillSelect';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { editTokenApi } from '../../services/apiClient';
import { useLoginUserStore } from '../../stores/store';

const QuestionWriter = () => {
  const [content, setContent] = useState('');
  const [skills, setSkills] = useState([]);

  const { user } = useLoginUserStore();

  const nav = useNavigate();
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onClickHandler = async () => {
    try {
      const data = await editTokenApi(
        `api/v1/question`,
        'POST',
        { content: content, skills: skills },
        localStorage.getItem('accessToken'),
      );
      nav('/');
    } catch (e) {}
  };

  return (
    <Container maxWidth="sm">
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} md={12}>
          <SkillSelect setSkills={setSkills} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid item xs={12} md={12}>
            <TextField
              id="content"
              name="content"
              label="내용"
              fullWidth
              multiline
              rows={8}
              onChange={onChangeHandler}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="outlined" fullWidth onClick={onClickHandler}>
            작성
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuestionWriter;
