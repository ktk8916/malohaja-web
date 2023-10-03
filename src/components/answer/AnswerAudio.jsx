import React from 'react';
import { Avatar, Badge, Box, Chip, Grid } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const AnswerAudio = ({ answer }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={10} md={10}>
        <Chip
          avatar={<Avatar alt="profile" src={answer?.member.profileImageUri} />}
          label={answer?.member.nickname}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2} md={2}>
        <Badge badgeContent={4} color="primary">
          <ThumbUpIcon color="action" fontSize="small" />
        </Badge>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box>
          <audio controls style={{ width: '100%' }}>
            <source src={answer?.voiceUri} type="audio/mpeg" />
          </audio>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AnswerAudio;
