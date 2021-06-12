import useFetch from 'use-http'
import { useState, useEffect } from 'react'
import {
  Typography,
  Avatar,
  Divider,
  Grid,
  GridList,
  GridListTile,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  ButtonGroup,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
} from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery'

import PhoneIcon from '@material-ui/icons/Phone'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { Link } from 'react-router-dom'
import { headers } from '../../index'
import TagList from '../Tag/TagList'
import ProfilePost from '../Posts/ProfilePost'
import RecentPosts from '../Posts/RecentPosts'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import reserve from './reserve.png'

const useStyles = makeStyles((theme) => ({
  root: {
      // position: "relative"
  },
  small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
  },
  medium: {
      width: theme.spacing(4),
      height: theme.spacing(4),
  },
  cover: {
      width: '100%',
      height: '150px',
      // borderRight: 100,
      backgroundColor: theme.palette.grey[200],
      // boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
  },


}));

export default function ContactInfo({ user }) {
  let address
  const classes = useStyles();

  if (user?.location?.street) {
    address = `${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`
  } else {
    address = ''
  }
  let color

  if (user.gender === 'male') {
    color = 'primary'
  } else if (user.gender === 'female') {
    color = 'secondary'
  } else {
    color = 'inherit'
  }

  return (
    <div className="User">
      <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
        Contact info
      </Typography>
      <Divider style={{ margin: '0 20px' }} />
      <Grid container spacing={2}>
        <Grid item xs>
          <List>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color={color} />
              </ListItemIcon>
              <ListItemText primary="Phone number" secondary={user.phone} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIphoneIcon color={color} />
              </ListItemIcon>
              <ListItemText primary="Mobile number" secondary={user.cell} />
            </ListItem>
            <Link to="/restaurants/0">
              <ListItem >
                <ListItemIcon>
                  <RestaurantMenuIcon color={color} />
                </ListItemIcon>
                <ListItemText primary="Menu" />
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item xs>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color={color} />
              </ListItemIcon>
              <ListItemText primary="Address" secondary={address} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color={color} />
              </ListItemIcon>
              <ListItemText primary="Email address" secondary={user.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                
                <Avatar className={classes.medium} variant="square"
                                    src={
                                        reserve
                                    }
                                />
              </ListItemIcon>
              <ListItemText primary="Reserve" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  )
}
