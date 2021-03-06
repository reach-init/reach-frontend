import {
  CardActions,
  IconButton,
  CardContent,
  Typography, Box, Avatar
} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
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

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import  orange  from '@material-ui/core/colors/orange';
import { fade, makeStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';


export default function SocialActions({ onChange }) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState(false)
  const [count, setCount] = useState(0)

  return (

    // <CardActions disableSpacing>
    <Box mt={0}>
      <IconButton  style={{ color: liked ? green[500] : ""}} onClick={() => { setLiked(true); setCount(count + 1) }}  aria-label="add to favorites">
        <Badge anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} badgeContent={count.toString()} >
          <EmojiEmotions /> </Badge>
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
