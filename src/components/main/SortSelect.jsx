import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SortSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value={10}>최신순</MenuItem>
        <MenuItem value={20}>추천순</MenuItem>
        <MenuItem value={20}>답변순</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
