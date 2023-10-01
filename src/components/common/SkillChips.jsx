import React from 'react';
import { Avatar, Chip } from '@mui/material';

const SkillChips = ({ skill }) => {
  return (
    <Chip
      avatar={<Avatar alt={skill.label} src={skill.logo} />}
      label={skill.label}
      variant="outlined"
    />
  );
};

export default SkillChips;
