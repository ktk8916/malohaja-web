import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AnswerContainer from '../answer/AnswerContainer';
import { skillInfo } from '../../constants/skillInfo';
import SkillChips from '../common/SkillChips';
import { format } from 'date-fns';
import MicIcon from '@mui/icons-material/Mic';
import AnswerRecord from './AnswerRecord';

const QuestionCard = ({ question }) => {
  const listToObject = (skills = []) => {
    return skills.map((skill) => {
      const skillKey = skill.toLowerCase(); // 스킬 이름을 소문자로 변환하여 key로 사용
      return skillInfo[skillKey]; // skillInfo 객체에서 해당하는 스킬 객체 가져오기
    });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ minHeight: 300 }}>
      <CardHeader
        avatar={<Avatar alt="profile" src={question?.member.profileImageUri} />}
        title={question?.member.nickname}
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
          <Grid item xs={12} md={6}>
            <Typography variant="h6">{question?.content}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnswerContainer answers={question?.bestAnswers} />
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
        <IconButton aria-label="add to favorites">
          <MicIcon onClick={handleOpen} />
        </IconButton>
      </CardActions>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AnswerRecord />
        </Box>
      </Modal>
    </Card>
  );
};

export default QuestionCard;
