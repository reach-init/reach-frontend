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
  Typography
} from '@material-ui/core'
import List from '@material-ui/core/List';

import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../auth/react-auth'

import Comment from './Comment'

import useStyles from './Styles'

export default function CommentList({postId, comments}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  
  const classes = useStyles()

  const commentList = () => {
    return comments.map(comment => (
        <Comment
            key={comment.id}
            comment={comment}
            // editorStatus={commentsEditorStatus.get(comment.get('id', '0'), false)}
        />
    ))
  }

  
  return (
    <div>

        <List key={`comment-list-${postId}`} className={classes.list}>
            {commentList()}
        </List>
    </div>
          
  )
}
