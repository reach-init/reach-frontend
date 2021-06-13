import useFetch from 'use-http'
import Box from '../../commons/Drawer/node_modules/@material-ui/core/Box'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
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
  Grid,
  Hidden
} from '../../commons/NavBar/node_modules/@material-ui/core'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '../../commons/NavBar/node_modules/@material-ui/icons/MoreVert'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../auth/react-auth'

export default function Post() {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
    <div>
      <Box
        borderRadius="borderRadius"
        {...defaultProps}
        key={item.id}
        style={{ minWidth: '200px', maxWidth: '100%', marginBottom: '20px' }}
      >
        <Card key={item.id}>
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
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={item.image}
            title={item.message}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.message}
            </Typography>
          </CardContent>
          {item.tags.map((tag) => {
            if (tag) {
              return (
                <Link to={`/tag/${tag}`} key={tag}>
                  <Chip
                    variant="outlined"
                    clickable={true}
                    style={{ margin: '5px' }}
                    key={tag}
                    label={tag}
                  />
                </Link>
              )
            }
          })}
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteOutlinedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}
