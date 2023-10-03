import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const MainNotice = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '25vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1"></Typography>
    </Box>
  );
};

export default MainNotice;
