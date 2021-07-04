import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import ToggleButtons from '../RestaurantMenu/ToggleButtons';
import Box from '@material-ui/core/Box';
import TimePicker from '../TimePicker/TimePicker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import NumberOfPeople from './NumberOfPeople'
import {useToggleButtons} from '../../context/toggleButtons/context'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function ModalSelector({open, setOpen}) {
  const classes = useStyles();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [value, setValue] = React.useState('As soon as possible');
  const {state} = useToggleButtons()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title"></DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <ToggleButtons tabWidth="33%" activeTab="34%"/>
          </Box>
          {/* <DialogContentText>
            As soon as possible
          </DialogContentText> */}
          

          <FormControl component="fieldset">
            <FormLabel component="legend">When?</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="As soon as possible" control={<Radio />} label="As soon as possible" />
                <FormControlLabel value="Schedule" control={<Radio />} label="Schedule" />
                {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                {value === "Schedule" && <TimePicker/>}
            </RadioGroup>

            {state.selected === 'right' && <NumberOfPeople/>}
          </FormControl>
          
          

        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
