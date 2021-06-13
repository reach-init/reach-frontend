import React from 'react';
import { Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    minHeight: "80px",
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    top: "0px",
    background: 'primary'
  }
}));

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Tabs
        classes={{
            indicator: classes.indicator
          }}
        centered={true}
        textColor="primary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab  component={Link} to="/"  icon={<HomeIcon />} aria-label="phone" {...a11yProps(0)}  />
          <Tab  icon={<RestaurantIcon />} aria-label="favorite" {...a11yProps(1)}  component={Link} to="/restaurants"  />
         
        </Tabs>
      </AppBar>
   
    </div>
  );
}

