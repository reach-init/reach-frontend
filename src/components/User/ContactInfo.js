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
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { Link } from 'react-router-dom'
import { headers } from '../../index'
import TagList from '../Tag/TagList'
import ProfilePost from '../Posts/ProfilePost'
import RecentPosts from '../Posts/RecentPosts'

export default function ContactInfo({ user }) {
  let address

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
          </List>
        </Grid>
      </Grid>
    </div>
  )
}
