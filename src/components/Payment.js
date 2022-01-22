import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}      
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Payment() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Payment Options
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          That's s all Folks!
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box component="img"
        sx={{
          height: 'auto',
          borderRadius: 5,
          }}
        alt="Thank you image."
          src='https://media2.giphy.com/media/xUPOqo6E1XvWXwlCyQ/giphy.gif?cid=790b7611ddd0bba59a4ac53f85b5348b0370c0b974f99060&rid=giphy.gif&ct=g'/>
          <Typography gutterBottom>
            Thank you for the consideration!
          </Typography>
            <Typography gutterBottom>
            I look forward to hearing from you soon =)
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Back
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}