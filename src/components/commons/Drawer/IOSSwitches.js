import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box'

import { useContext } from 'react';
import AppContext from '../../../App/AppContext';

function IOSSwitches() {

    const myContext = useContext(AppContext);

    const [state, setState] = React.useState({
        navBar: true,
        Feature2: false,
        Feature3: false,
      })
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        myContext.toggleSetting2()
      };
    
    return (
      <Box ml={2}>
        <FormGroup>
            <FormControlLabel
            control={<IOSSwitch checked={state.navBar} onChange={handleChange} name="navBar" />}
            label="Hide NavBar"
            />
        </FormGroup>
      </Box>
    )
}


const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  
export default IOSSwitches