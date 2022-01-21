import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/material/Icon/Icon';
import { blue } from '@mui/material/colors';

function SimpleDialog(props) {
  const { onClose, selectedValue, open, nutriFacts} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog fullWidth maxWidth='xs' onClose={handleClose} open={open}>
      <DialogTitle>Nutrition Facts</DialogTitle>      
        <List sx={{ pt: 0 }}>
        {nutriFacts? nutriFacts.map((info) => (
          <ListItem button onClick={() => handleListItemClick(info)} key={info}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[70], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={info} />
          </ListItem>
        )): <p>Loading...</p>}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>          
          <ListItemText secondary="Back to list" inset primary="value ref.(g/100g)"  />
        </ListItem>
      </List>      
      
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function NutritionPopup({nutriFacts}) {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('test');

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>      
      <Button size="small" onClick={handleClickOpen}>
        info
      </Button>
      <SimpleDialog
        nutriFacts={nutriFacts}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}