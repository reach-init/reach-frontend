import {
  CardActions,
  IconButton,
  CardContent,
  Typography
} from '@material-ui/core'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ShareIcon from '@material-ui/icons/Share'
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';

import { useAuth0 } from '../../auth/react-auth'



export default function PostActions({onChange}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
  
    <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
            <SentimentSatisfiedOutlinedIcon />
        </IconButton>

        <IconButton aria-label="add to favorites">
            <SentimentDissatisfiedOutlinedIcon />
        </IconButton>

        <IconButton aria-label="comment" onClick={onChange}>
            <ChatBubbleOutlineRoundedIcon />
        </IconButton>

        <IconButton aria-label="share">
            <ShareOutlinedIcon />
        </IconButton>
        
    </CardActions>
        
  )
}
