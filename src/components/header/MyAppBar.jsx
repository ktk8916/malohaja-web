import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThemeMenu from './ThemeMenu';
import { Avatar, Box, Chip, Modal } from '@mui/material';
import kakaoLogo from '../../assets/oauth2/kakao.svg';
import githubLogo from '../../assets/oauth2/github.svg';
import LoginModal from './LoginModal';

const MyAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color={'white'}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Malohaja
        </Typography>
        <Button sx={{ color: 'white' }} size="large" onClick={handleOpen}>
          Login
        </Button>
        <LoginModal open={open} handleClose={handleClose} />
        <ThemeMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
