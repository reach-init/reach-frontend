import useFetch from 'use-http'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Chip,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,Grid
} from '@material-ui/core'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Sidebar from '../Sidebar/Sidebar'

export default function Tag() {
  const [posts, setPosts] = useState()
  const postsFetch = useFetch('https://reach-network.herokuapp.com/api/v1/tag')
  
  const { tag } = useParams()

  useEffect(() => {
    loadPosts()
  }, [tag])
  async function loadPosts() {
    const posts = await postsFetch.get(`${tag}/post?limit=10`)
    const postsValues = Object.values(posts)[0].map(pos => tag.title)
    console.log(Object.values(posts)[0])
    
    if (postsFetch.response.ok) setPosts(Object.values(posts)[0])
  }
  if (!posts) return <div>Loading</div>
  if (posts.length === 0) {
    return (
      <div className="Posts">
        <div className="PostStream">
          <Typography
            variant="h4"
            component="h2"
            style={{ margin: '20px 20px 0 20px' }}
          >
            Posts tagged: {tag}
          </Typography>
          <p style={{ margin: '20px' }}>No posts found</p>
        </div>
        <Sidebar />
      </div>
    )
  }
  return (
    <div className="Posts">
      <Grid container spacing={3}>
        <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
          <div className="PostStream">
            <Typography
              variant="h4"
              component="h2"
              style={{ margin: '20px 20px 0 20px' }}
            >
              Posts tagged: {tag}
            </Typography>
            {posts.map(function (item) {
              return (
                <Card key={item.id} style={{ maxWidth: 600, margin: '30px' }}>
                  <CardHeader
                    avatar={
                      <Link to={`/user/${item.owner.id}`}>
                        <div>
                          <Avatar
                            src={item.owner.picture}
                            alt={
                              item.owner.firstName + ' ' + item.owner.lastName
                            }
                            style={{
                              width: '40px',
                              marginRight: 10,
                              display: 'inline-block',
                              verticalAlign: 'middle'
                            }}
                          />
                          {item.owner.firstName + ' ' + item.owner.lastName}
                        </div>
                      </Link>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item.owner.firstName + ' ' + item.owner.lastName}
                  />
                  <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    image={item.image}
                    title={item.message}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
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
                    } else return null
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
              )
            })}
          </div>
        </Grid>
        <Grid item xl={4} lg={4}>
          <Sidebar />
        </Grid>
      </Grid>
      {/* TODO bug, not a sidebar, but down */}
    </div>
  )
}
