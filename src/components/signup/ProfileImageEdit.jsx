import React from 'react';
import { Avatar, Badge } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import logo from '../../assets/profile/dog.png';

const ProfileImageEdit = () => {
  return (
    <Badge
      badgeContent={<EditIcon fontSize="large" />}
      onClick={() => console.log(22)}
    >
      <Avatar alt="profile" src={logo} sx={{ width: 200, height: 200 }} />
    </Badge>
  );
};

export default ProfileImageEdit;
