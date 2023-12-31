import React from 'react';
import { Avatar, Box } from '@mui/material';
import Button from '@mui/material/Button';
import kakaoLogo from '../../assets/oauth2/kakao.svg';
import githubLogo from '../../assets/oauth2/github.svg';

const Oauth2Button = () => {
  const kakaoLogin = () => {
    console.log(process.env.REACT_APP_KAKAO_OAUTH2_URI);
    window.location.assign(
      'https://kauth.kakao.com/oauth/authorize?client_id=75feb0a1961beae6832bbf29b94af0be&redirect_uri=http://localhost:3000/auth/login/kakao&response_type=code',
    );
  };
  const githubLogin = () => {
    window.location.assign(process.env.REACT_APP_GITHUB_OAUTH2_URI);
  };
  return (
    <Box
      id="modal-modal-description"
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '80%',
      }}
    >
      <Button
        size="large"
        sx={{
          background: 'yellow',
          color: 'black',
          borderRadius: '12px',
        }}
        onClick={kakaoLogin}
      >
        <Avatar alt="kakao" src={kakaoLogo} />
        카카오 계정으로 로그인
      </Button>
      <Button
        size="large"
        sx={{
          background: 'white',
          color: 'black',
          borderRadius: '12px',
          border: '1px solid black',
        }}
        onClick={githubLogin}
      >
        <Avatar alt="github" src={githubLogo} />
        깃허브 계정으로 로그인
      </Button>
    </Box>
  );
};

export default Oauth2Button;
