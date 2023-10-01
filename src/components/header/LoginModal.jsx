import React from 'react';
import { Avatar, Box, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import kakaoLogo from '../../assets/oauth2/kakao.svg';
import githubLogo from '../../assets/oauth2/github.svg';
import Oauth2Button from './Oauth2Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 200,
  borderRadius: '5%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
        >
          소셜 계정으로 계속
        </Typography>
        <Oauth2Button />
      </Box>
    </Modal>
  );
};

export default LoginModal;
