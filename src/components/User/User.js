import useFetch from 'use-http'
import { useState, useEffect } from 'react'
import {
  Typography,
  Avatar,
  Divider,
  Grid,
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

export default function User(props) {
  const [user, setUser] = useState()
  const userFetch = useFetch('https://dummyapi.io/data/api/user', { headers })

  useEffect(() => {
    loadUser()
  }, [])

  const matches = !useMediaQuery('(min-width:600px)')
  console.log(matches)

  async function loadUser() {
    const { id } = props.match.params
    const user = await userFetch.get(`${id}`)
    console.log(user)
    if (userFetch.response.ok) setUser(user)
  }

  const [userPosts, setUserPosts] = useState()
  const userPostsFetch = useFetch('https://dummyapi.io/data/api/user', {
    headers
  })

  useEffect(() => {
    loadUserPosts()
  }, [])

  async function loadUserPosts() {
    const { id } = props.match.params
    const userPosts = await userPostsFetch.get(`${id}/post`)
    console.log(userPosts.data)
    if (userPostsFetch.response.ok) setUserPosts(userPosts.data)
  }

  if (!user) return <div>Loading</div>
  if (!userPosts) return <div>Loading</div>

  let dob

  if (user.dateOfBirth) {
    dob = new Date(user.dateOfBirth)
    const date = dob.getDate()
    const month = dob.getMonth() + 1
    const year = dob.getFullYear()
    dob = `Born ${date}/${month}/${year}`
  } else {
    dob = ''
  }

  let address

  if (user.location.street) {
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
      <Grid
        lg={12}
        md={12}
        sm={12}
        item
        container
        spacing={3}
        alignItems="center"
      >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid lg={12} item container spacing={3} alignItems="center">
            <Grid item lg={3} md={3} sm={5} xs={4}>
              <div>
                <Avatar
                  src={user.picture}
                  alt={user.firstName + ' ' + user.lastName}
                  style={{ width: '100px', height: '100px', margin: 10 }}
                />
              </div>
            </Grid>
            <Grid item lg={9} md={9} sm={7} xs={8}>
              <div>
                <Typography variant="h4" component="h2">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography component="p">{dob}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid
            lg={12}
            item
            container
            spacing={3}
            alignItems="center"
            justify={matches ? 'center' : 'flex-end'}
          >
            <Grid lg={6} item>
              <div style={{ margin: 10 }}>
                <ButtonGroup
                  variant="text"
                  color={color}
                  aria-label="full-width outlined primary button group"
                >
                  <Button>Message</Button>
                  <Button>Friend</Button>
                  <Button>Follow</Button>
                </ButtonGroup>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider />
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

      <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
        Recent Posts
      </Typography>
      <Divider style={{ margin: '0 20px' }} />
      {/* <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '15px 10px'}}> */}
      <Grid container spacing={1}>
        {userPosts.map(function (item, index) {
          return (
            <Grid key={item.id} item xs={6} lg={3} md={4}>
              <Card key={item.id} style={{ width: '100%', margin: '1.5%' }}>
                <CardMedia
                  style={{ height: 0, paddingTop: '56.25%' }}
                  image={item.image}
                  title={item.message}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.message}
                  </Typography>
                </CardContent>
                {item.tags.map((tag) => {
                  if (tag) {
                    return (
                      <Link to={`/tag/${tag}`} key={tag}>
                        <Chip
                          variant="outlined"
                          clickable={true}
                          style={{ margin: '5px' }}
                          key={tag}
                          label={tag}
                        />
                      </Link>
                    )
                  } else return null
                })}
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
        {/* </div> */}
      </Grid>
    </div>
  )
}
