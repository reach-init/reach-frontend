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
import useStyles from './Styles'
import UserAvatarComponent from '../../components/CreatePost/UserAvatar'


export default function Comment({comment}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  const classes = useStyles()

  const postAvatar = (
        <UserAvatarComponent
            fullName={comment.user.name}
            fileName={comment.user.picture}
            size={20}
        />
    );

  const commentBody = (<div>
      Comentariu
  </div>)

  return (
    <div key={comment.id}>
        <Paper
            elevation={0}
            style={{ position: 'relative', padding: '', display:'block' }}
        >
            <Card elevation={0}>
                <CardHeader
                    className={classes.header}
                    subheader={commentBody}
                    avatar={postAvatar}
                ></CardHeader>
            </Card>
        </Paper>
    </div>
          
  )
}
