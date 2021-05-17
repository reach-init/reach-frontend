import Box from '@material-ui/core/Box'
import {
  Chip,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Paper
} from '@material-ui/core'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../auth/react-auth'

import CommentList from '../Comments/CommentList'

export default function Comments({comments, postId}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
    <div>
        <Paper
        elevation={0} 
        style={{ display: 'block', padding: '0px 0px' }} 
        >
            <CommentList
                comments={comments}
                postId={postId}
            />
             
        </Paper>
        
    </div>
          
  )
}
