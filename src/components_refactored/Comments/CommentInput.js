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

import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../auth/react-auth'



export default function CommentInput() {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
          <div>
              CommentInput
          </div>
          
  )
}
