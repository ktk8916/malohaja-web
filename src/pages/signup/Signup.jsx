import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SkillSelect from '../../components/main/SkillSelect';
import JobTypeSelect from '../../components/signup/JobTypeSelect';
import CareerTypeSelect from '../../components/signup/CareerTypeSelect';
import ProfileImageEdit from '../../components/signup/ProfileImageEdit';
import NicknameInput from '../../components/signup/NicknameInput';
import Toast from '../../components/common/Toast';
import { editTokenApi } from '../../services/apiClient';

const Signup = () => {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState('');
  const [toast, setToast] = useState({ open: false, message: '' });

  const [form, setForm] = useState({
    nickname: '',
    jobType: '',
    careerType: '',
    introduction: '',
  });

  const [nicknameCheck, setNicknameCheck] = useState(false);

  const [skills, setSkills] = useState([]);

  const cancel = () => {
    nav('/');
  };

  const signup = async () => {
    if (!formValidCheck()) {
      setToast({ open: true, message: '필수 항목이 없습니다!' });
      return;
    }
    const data = await editTokenApi(
      `api/v1/member/signup`,
      'POST',
      {
        ...form,
        skills: skills,
      },
      accessToken,
    );
    nav('/');
  };

  const formValidCheck = () => {
    return nicknameCheck && form.jobType !== '' && form.careerType !== '';
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nav = useNavigate();

  useEffect(() => {
    if (location.state) {
      setAccessToken(location.state.accessToken);
    } else {
      nav('/');
    }
  }, [location]);

  return (
    <Container maxWidth="sm">
      <Grid container marginTop={2} spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ProfileImageEdit />
        </Grid>
        <NicknameInput
          onChangeHandler={onChangeHandler}
          setNicknameCheck={setNicknameCheck}
        />
        <Grid item xs={6} md={6}>
          <JobTypeSelect onChangeHandler={onChangeHandler} />
        </Grid>
        <Grid item xs={6} md={6}>
          <CareerTypeSelect onChangeHandler={onChangeHandler} />
        </Grid>
        <Grid item xs={12} md={12}>
          <SkillSelect setSkills={setSkills} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="introduction"
            name="introduction"
            label="소개글"
            fullWidth
            multiline
            rows={4}
            onChange={onChangeHandler}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={cancel}
            sx={{ color: '#AAAAAA', borderColor: '#AAAAAA' }}
          >
            취소
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button fullWidth variant="outlined" size="large" onClick={signup}>
            회원가입
          </Button>
        </Grid>
      </Grid>
      <Toast toast={toast} setToast={setToast} />
    </Container>
  );
};

export default Signup;
