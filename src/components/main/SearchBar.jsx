import React from 'react';
import { Grid } from '@mui/material';
import SearchInput from './SearchInput';
import SortSelect from './SortSelect';
import SkillSelect from './SkillSelect';

const SearchBar = () => {
  return (
    <Grid container marginTop={2} spacing={2}>
      <Grid item xs={12} md={6}>
        <SkillSelect />
      </Grid>
      <Grid item xs={12} md={2}>
        <SortSelect />
      </Grid>
      <Grid item xs={12} md={4}>
        <SearchInput />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
