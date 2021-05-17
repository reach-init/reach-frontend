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



export default function PostHeader({item}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
          <CardHeader
            avatar={
              <Link to={`/user/${item.owner.id}`}>
                <div>
                  <Avatar
                    src={item.owner.picture}
                    alt={item.owner.firstName + ' ' + item.owner.lastName}
                    style={{
                      width: '40px',
                      marginRight: 10,
                      display: 'inline-block',
                      verticalAlign: 'middle'
                    }}
                  />
                </div>
              </Link>
            }

            action={
              <IconButton aria-label="settings" sm={3}>
                <MoreVertIcon />
              </IconButton>
            }

            title={
              <div
                style={{
                  width: '100%',
                  marginRight: 10,
                  display: 'inline-block',
                  verticalAlign: 'middle'
                }}
              >
                {item.owner.firstName + ' ' + item.owner.lastName}
              </div>
            }

            subheader={<div>Location</div>}

          />
          
  )
}
