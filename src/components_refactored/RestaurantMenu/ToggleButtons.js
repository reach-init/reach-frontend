import React from 'react';
import { IonButton, IonIcon, IonContent } from '@ionic/react';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Typography, Avatar } from '@material-ui/core';
import delivery from './delivery.png'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { fade } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    // border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },

  root: {
    background: '#eceff1',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 58,
    width: '33vw',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.5)
    },
    // padding: '0 130px',
  },
  rootActive: {
    background: '#212121',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 58,
    width: '34vw',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.5)
    },
    // padding: '0 230px',
  },
}));

// const StyledToggleButtonGroup = withStyles((theme) => ({
//   grouped: {
//     margin: theme.spacing(0.5),
//     border: 'none',
//     '&:not(:first-child)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-child': {
//       borderRadius: theme.shape.borderRadius,
//     },
    
//   },
// }))(ToggleButtonGroup);

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  const [active, setActive] = React.useState('left');
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  return (
    <div>
      {/* <Paper elevation={0} className={classes.paper}> */}
        {/* <StyledToggleButtonGroup className={classes.root}
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
          <Typography variant="h6">
              Delivery 
          </Typography>
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
          <Typography variant="h6">
              Pickup 
          </Typography>
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
           <Typography variant="h6">
              Dine-in 
          </Typography>
          </ToggleButton>
        </StyledToggleButtonGroup> */}
        {/* <Box display="flex" justifyContent="space-around">
        <IonButton size='large' color="light">Delivery</IonButton>
        <IonButton size='large' color="light">Pickup</IonButton>
        <IonButton size='large' color="dark">Dine-in</IonButton>
        </Box> */}
        <ButtonGroup  size="large" aria-label="small outlined button group">
        <Button onClick={() => setActive('left')} className={active === 'left' ? classes.rootActive : classes.root}>Delivery</Button>
        <Button onClick={() => setActive('center')} className={active === 'center' ? classes.rootActive : classes.root}>Pickup</Button>
        <Button onClick={() => setActive('right')} className={active === 'right' ? classes.rootActive : classes.root}>Dine-in</Button>
      </ButtonGroup>
      {/* </Paper> */}
    </div>
  );
}
