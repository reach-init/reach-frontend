import Box from '@material-ui/core/Box'
import { useState, useEffect } from 'react'
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
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../auth/react-auth'
import Tag from '../Tag/Tag'
import PostActions from './PostActions'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import Comments from '../Comments/Comments'
import CommentInput from '../Comments/CommentInput'

export default function Post({item, defaultProps}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  const [showComment, setShowComment] = useState(false)

  const onChange = () => {
    setShowComment(!showComment)
  }

  const comments = [
    {id: "1", user: {name:"Mihaita Piticu"} },
    {id: "2", user: {name:"Msdgkdfnsb "} },
  ]

  return (
      <Box
        borderRadius="borderRadius"
        {...defaultProps}
        key={item.id}
        style={{ minWidth: '600px', maxWidth: '600px', marginBottom: '20px' }}
      >
        <Paper>
        <PostHeader item={item}/>

        <PostBody item={item} />

        <PostActions onChange={onChange}/>

        {showComment && <Comments comments={comments} postId={"1"}/>}

        <CommentInput/>
      </Paper>
                  
    </Box>
  )
}
