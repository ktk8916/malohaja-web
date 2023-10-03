import React from 'react';
import { Grid } from '@mui/material';
import SearchInput from './SearchInput';
import SortSelect from './SortSelect';
import SkillSelect from './SkillSelect';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const nav = useNavigate();
  return (
    <Grid container marginTop={2} spacing={2}>
      <Grid item xs={12} md={6}>
        <SkillSelect setSkills={console.log} />
      </Grid>
      <Grid item xs={4} md={1}>
        <SortSelect />
      </Grid>
      <Grid item xs={8} md={3}>
        <SearchInput />
      </Grid>
      <Grid item xs={6} md={1}>
        <Button variant="outlined" sx={{ height: '100%', width: '100%' }}>
          <SearchOutlinedIcon color="primary" />
        </Button>
      </Grid>
      <Grid item xs={6} md={1}>
        <Button
          variant="outlined"
          sx={{ height: '100%', width: '100%' }}
          onClick={() => nav('/question/write')}
        >
          질문작성
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
