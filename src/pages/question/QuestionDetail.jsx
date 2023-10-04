import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Modal,
} from '@mui/material';
import { format } from 'date-fns';
import SkillChips from '../../components/common/SkillChips';
import Typography from '@mui/material/Typography';
import AnswerContainer from '../../components/answer/AnswerContainer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MicIcon from '@mui/icons-material/Mic';
import AnswerRecord from '../../components/question/AnswerRecord';
import { skillInfo } from '../../constants/skillInfo';
import { noTokenApi } from '../../services/apiClient';

const QuestionDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({});

  const listToObject = (skills = []) => {
    return skills.map((skill) => {
      const skillKey = skill.toLowerCase();
      return skillInfo[skillKey];
    });
  };

  const getQuestion = async () => {
    const data = await noTokenApi(`/api/v1/question/${id}`, 'GET', {});
    console.log(data);
    setQuestion(data);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <Container maxWidth="md" marginTop={2}>
      <Grid marginTop={2} container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card sx={{ minHeight: 300 }}>
            <CardHeader
              avatar={
                <Avatar alt="profile" src={question?.member?.profileImageUri} />
              }
              title={question?.member?.nickname}
              subheader={
                question?.createdAt
                  ? format(new Date(question.createdAt), 'yyyy-MM-dd HH:mm')
                  : ''
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  {listToObject(question?.skills).map((skill, index) => (
                    <SkillChips key={index} skill={skill} />
                  ))}
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6">{question?.content}</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <ThumbUpIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <BookmarkIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          댓글
        </Grid>
        <Grid item xs={12} md={6}>
          음성 답변
          <AnswerContainer answers={question?.bestAnswers} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuestionDetail;
