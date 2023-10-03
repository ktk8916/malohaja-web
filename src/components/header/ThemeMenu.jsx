import React from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import hitoriColor from '../../assets/theme/hitori.png';
import ikuyoColor from '../../assets/theme/ikuyo.png';
import nijikaColor from '../../assets/theme/nijika.png';
import ryoColor from '../../assets/theme/ryo.png';
import { useThemeStore } from '../../stores/store';
import { themeSelect } from '../../styles/MaterialThemes';
import Button from '@mui/material/Button';

const ThemeMenu = () => {
  const { setTheme } = useThemeStore((state) => state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const onSelect = (theme) => {
    setTheme(themeSelect[theme]);
    handleClose();
  };

  return (
    <div>
      <Button
        sx={{ color: 'white' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
      >
        <FormatColorFillIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onSelect('hitori')}>
          <Avatar alt="pink" src={hitoriColor} />
        </MenuItem>
        <MenuItem onClick={() => onSelect('ikuyo')}>
          <Avatar alt="red" src={ikuyoColor} />
        </MenuItem>
        <MenuItem onClick={() => onSelect('nijika')}>
          <Avatar alt="yellow" src={nijikaColor} />
        </MenuItem>
        <MenuItem onClick={() => onSelect('ryo')}>
          <Avatar alt="blue" src={ryoColor} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ThemeMenu;
