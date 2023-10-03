import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const JobTypeSelect = ({ onChangeHandler }) => {
  const [jobType, setJobType] = useState('');

  const handleChange = (e) => {
    setJobType(e.target.value);
    onChangeHandler(e);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="jobType">직무</InputLabel>
      <Select
        labelId="jobType"
        id="jobType"
        name="jobType"
        value={jobType}
        label="직무"
        onChange={handleChange}
      >
        <MenuItem value={'FRONTEND'}>프론트엔드</MenuItem>
        <MenuItem value={'BACKEND'}>백엔드</MenuItem>
        <MenuItem value={'IOS'}>IOS</MenuItem>
        <MenuItem value={'ANDROID'}>안드로이드</MenuItem>
        <MenuItem value={'DESIGNER'}>디자이너</MenuItem>
        <MenuItem value={'PLANNER'}>기획자</MenuItem>
        <MenuItem value={'GAME_CLIENT'}>게임 클라이언트</MenuItem>
        <MenuItem value={'GAME_SERVER'}>게임 서버</MenuItem>
        <MenuItem value={'ETC'}>기타</MenuItem>
      </Select>
    </FormControl>
  );
};

export default JobTypeSelect;
