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
import User from './User'

export default function LoadUser(props) {
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

  return (
    <User user={user} userPosts={userPosts}></User>
  )
}
