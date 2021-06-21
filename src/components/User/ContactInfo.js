import useFetch from 'use-http'
import { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add';
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
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import PhoneIcon from '@material-ui/icons/Phone'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { Link } from 'react-router-dom'
import TagList from '../Tag/TagList'
import ProfilePost from '../Posts/ProfilePost'
import RecentPosts from '../Posts/RecentPosts'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import reserve from './reserve.png'
import { IonButton, IonIcon, IonContent } from '@ionic/react';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
      // position: "relative"
  },
  wrapIcon: {
    display: 'inline-flex'
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

export default function ContactInfo({ user, more}) {
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
      {(   
          <>
           {/* <Divider style={{ margin: '0 20px' }} /> */}
          <List>
          {more && (<><ListItem>
              <ListItemIcon>
                <AccessTimeIcon color={color} />
              </ListItemIcon>
              <ListItemText  secondary="9:40 - 22-00" />
              </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color={color} />
              </ListItemIcon>
              <ListItemText p secondary="07706060606" />
            </ListItem>
           
       
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color={color} />
              </ListItemIcon>
              <ListItemText  secondary="Address" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color={color} />
              </ListItemIcon>
              <ListItemText   secondary={user.email} />
            </ListItem></>
           )}
          </List>
     </>)}

    </div>
  )
}
