import React from 'react';
import { Snackbar } from '@mui/material';

const Toast = ({ toast, setToast }) => {
  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={toast.open}
      message={toast.message}
      autoHideDuration={5000}
      onClose={handleClose}
    />
  );
};

export default Toast;
