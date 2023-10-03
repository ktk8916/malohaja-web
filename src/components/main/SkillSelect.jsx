import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import SkillChips from '../common/SkillChips';
import { skillInfo } from '../../constants/skillInfo';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const skills = Object.keys(skillInfo).map((key) => skillInfo[key]);

const SkillSelect = ({ setSkills }) => {
  const [selectSkills, setSelectSkills] = useState([]);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    const newSkills = typeof value === 'string' ? value.split(',') : value;
    setSelectSkills(newSkills);
    setSkills(newSkills);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selectSkills}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((skill, index) => (
              <SkillChips key={index} skill={skillInfo[skill]} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {skills.map((skill, index) => (
          <MenuItem key={index} value={skill.name}>
            <SkillChips skill={skill} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SkillSelect;
