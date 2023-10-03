import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CareerTypeSelect = ({ onChangeHandler }) => {
  const [careerType, setCareerType] = useState('');

  const handleChange = (e) => {
    setCareerType(e.target.value);
    onChangeHandler(e);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="careerType">경력</InputLabel>
      <Select
        labelId="careerType"
        id="careerType"
        name="careerType"
        value={careerType}
        label="경력"
        onChange={handleChange}
      >
        <MenuItem value={'BEGINNER'}>신입</MenuItem>
        <MenuItem value={'JUNIOR'}>주니어 (1~3년)</MenuItem>
        <MenuItem value={'MIDDLE'}>미들 (4~8년)</MenuItem>
        <MenuItem value={'SENIOR'}>시니어 (9년 이상)</MenuItem>
        <MenuItem value={'LEAD'}>Lead 레벨</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CareerTypeSelect;
