import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { noTokenApi } from '../../services/apiClient';
import { nicknameRegex } from '../../utils/regex';
import Toast from '../common/Toast';

const NicknameInput = ({ onChangeHandler, setNicknameCheck }) => {
  const [toast, setToast] = useState({ open: false, message: '' });

  const [isValidNickname, setIsValidNickname] = useState(false);

  const [nickname, setNickname] = useState('');

  const handleChange = (e) => {
    setNickname(e.target.value);
    onChangeHandler(e);
  };

  const nicknameCheck = async () => {
    if (!nicknameRegex.test(nickname)) {
      setToast({
        ...toast,
        open: true,
        message: '닉네임은 1~8글자, 특수문자를 포함할 수 없습니다.',
      });
      return;
    }

    const { isDuplicated } = await noTokenApi(
      `/api/v1/member/nickname/check`,
      'POST',
      {
        nickname,
      },
    );

    if (isDuplicated === false) {
      setIsValidNickname(true);
      setNicknameCheck(true);
    } else {
      setToast({ ...toast, open: true, message: '중복 닉네임 입니다' });
    }
  };

  const cancel = () => {
    setIsValidNickname(false);
    setNicknameCheck(false);
  };

  return (
    <>
      <Grid item xs={9} md={9}>
        <TextField
          required
          id="nickname"
          name="nickname"
          label="닉네임"
          disabled={isValidNickname}
          value={nickname}
          fullWidth
          variant="outlined"
          onChange={handleChange}
          helperText="1~8글자, 특수문자를 포함할 수 없습니다."
        />
      </Grid>
      {isValidNickname ? (
        <Grid item xs={3} md={3}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{ height: '100%' }}
            onClick={cancel}
          >
            수정
          </Button>
        </Grid>
      ) : (
        <Grid item xs={3} md={3}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{ height: '100%' }}
            onClick={nicknameCheck}
          >
            확인
          </Button>
        </Grid>
      )}
      <Toast toast={toast} setToast={setToast} />
    </>
  );
};

export default NicknameInput;
