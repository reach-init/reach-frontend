import {
  CardActions,
  IconButton,
  CardContent,
  Typography, Box, Avatar
} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ShareIcon from '@material-ui/icons/Share'
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useState } from 'react'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';

import { useAuth0 } from '../../auth/react-auth'
import red from '@material-ui/core/colors/red';
import Badge from '@material-ui/core/Badge';



export default function PostActions({ onChange }) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState(false)
  const [count, setCount] = useState(0)

  return (

    // <CardActions disableSpacing>
    <Box mt={1}>
      <IconButton onClick={() => { setLiked(!liked); setCount(count + 1) }} color={liked ? "primary" : ""} aria-label="add to favorites">
        <Badge anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} badgeContent={count.toString()} >
          <SentimentSatisfiedOutlinedIcon /> </Badge>
      </IconButton>

      <IconButton aria-label="add to favorites">
        <SentimentDissatisfiedOutlinedIcon />
      </IconButton>

      <IconButton aria-label="comment" onClick={() => { setComment(!comment); onChange() }}>

        <Badge anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} badgeContent={14} >
          {!comment ? <ChatBubbleOutlineRoundedIcon /> : <ChatBubbleRoundedIcon />}
        </Badge>


      </IconButton>

      <IconButton aria-label="share">
        <ShareOutlinedIcon />
      </IconButton>

    </Box>

    // </CardActions>

  )
}
