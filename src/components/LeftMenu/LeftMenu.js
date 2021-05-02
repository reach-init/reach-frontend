import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Posts from '../Posts/Posts';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.divider}`,
  }
});


function TabNavigationWithRoutes({ classes }) {
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
  };
  const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    borderColor: 'grey.300',
  };    
  return (
      <Box borderRadius="borderRadius" {...defaultProps}  > 

    <div className={classes.root}>
        <Tabs indicatorColor="primary" value={value} onChange={onChange} orientation="vertical"
        variant="scrollable">
          <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
          <Tab label="Friends" component={Link} to="/page2" />
          <Tab label="Apps" component={Link} to="/page3" />
        </Tabs>
  
    </div>
    </Box>

  );
}

export default withStyles(styles)(TabNavigationWithRoutes);