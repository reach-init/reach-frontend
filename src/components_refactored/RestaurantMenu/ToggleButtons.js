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
import { useToggleButtons } from '../../context/toggleButtons/context'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    // border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
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
    // width: '33vw',
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
    // width: '34vw',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.5)
    },
    // padding: '0 230px',
  },
}));


export default function ToggleButtons({tabWidth="33vw", activeTab="34vw"}) {
  const { state, dispatch } = useToggleButtons()
  const classes = useStyles();

  return (
    <div>
      <ButtonGroup  size="large" aria-label="small outlined button group">
        <Button style={{width: state.selected === 'left' ? activeTab : tabWidth}} onClick={() => dispatch({ type: 'change', payload: 'left' })} className={state.selected === 'left' ? classes.rootActive : classes.root}>Delivery</Button>
        <Button style={{width: state.selected === 'center' ? activeTab : tabWidth}} onClick={() => dispatch({ type: 'change', payload: 'center' })} className={state.selected === 'center' ? classes.rootActive : classes.root}>Pickup</Button>
        <Button style={{width: state.selected === 'right' ? activeTab : tabWidth}} onClick={() => dispatch({ type: 'change', payload: 'right' })} className={state.selected === 'right' ? classes.rootActive : classes.root}>Dine-in</Button>
      </ButtonGroup>
    </div>
  );
}
