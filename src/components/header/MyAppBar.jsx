import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThemeMenu from './ThemeMenu';
import LoginModal from './LoginModal';
import { useNavigate } from 'react-router-dom';
import { useLoginUserStore } from '../../stores/store';
import jwtDecode from 'jwt-decode';
import { Avatar, Chip } from '@mui/material';

const MyAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nav = useNavigate();

  const { user, setUser } = useLoginUserStore();
  const [me, setMe] = useState(user);

  const jwtValidCheck = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        const tokenInfo = jwtDecode(accessToken);
        setUser({ ...tokenInfo, accessToken: accessToken, isLogin: true });
        setMe({ ...tokenInfo, accessToken: accessToken, isLogin: true });
      } catch (error) {
        localStorage.clear();
        nav('/');
      }
    }
  };

  useEffect(() => {
    jwtValidCheck();
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color={'white'}
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => nav('/')}
        >
          Malohaja
        </Typography>
        {!me.isLogin ? (
          <Button sx={{ color: 'white' }} size="large" onClick={handleOpen}>
            Login
          </Button>
        ) : (
          <Chip
            avatar={<Avatar alt="profile" src={me.profileImageUri} />}
            label={me.nickname}
          />
        )}

        <LoginModal open={open} handleClose={handleClose} />
        <ThemeMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
