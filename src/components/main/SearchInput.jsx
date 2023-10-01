import React, { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const onChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      onSubmitHandler();
    }
  };

  const onSubmitHandler = () => {
    console.log(keyword);
  };
  return (
    <TextField
      id="input-with-sx"
      label="Search"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="start" onClick={onSubmitHandler}>
            <SearchOutlinedIcon color="primary" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      value={keyword}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default SearchInput;
