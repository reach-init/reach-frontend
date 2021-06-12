import useFetch from 'use-http'
import Box from '@material-ui/core/Box'
import { useState, useEffect } from 'react'
import  PostWriteButton  from '../CreatePost/PostWriteButton';
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
} from '@material-ui/core'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { headers } from '../../index'
import Post from './Post'
import { useAuth0 } from '../../auth/react-auth'

export default function Posts() {
  const { isAuthenticated } = useAuth0()

  const [posts, setPosts] = useState([])
  const { get, response } = useFetch('https://reach-network.herokuapp.com/api/v1', {
    headers
  })
  const [page, setPage] = useState(0)
  const [_, setHasMore] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    const nextPosts = await get(`post?limit=10&page=${page}`)
    console.log(nextPosts)
    console.log('HERE1')
    const newData = Object.values(nextPosts)[0]
    console.log(posts)
    console.log(newData)
    const newPosts = [...posts, ...newData]
    console.log('HERE2')
    console.log(newPosts)
    console.log(response)

    if (response.ok) setPosts(newPosts)

    const newPage = page + 1
    setPage(newPage)

    if (newData.length === 0) {
      setHasMore(false)
    } else {
      setHasMore(true)
    }
  }

  //   async function addPost() {
  //     const newPost = await post('/todos', { title: 'my new todo' })
  //     if (response.ok) setTodos([...todos, newTodo])
  //   }
  const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    borderColor: 'grey.200'
  }

  const newsFeed = posts.map(function (item) {
    return (
      <Post key={item.id} item={item} defaultProps={defaultProps} />
    )
  })

  return (
    <div>
      {isAuthenticated && (
        <Grid container spacing={3}>
          <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
            <PostWriteButton displayWriting />
            <div className="PostStream">
              <InfiniteScroll
                dataLength={newsFeed.length} // This is important field to render the next data
                next={loadPosts}

                hasMore
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {newsFeed}
              </InfiniteScroll>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xl={4} lg={4}>
              <Sidebar />
            </Grid>
          </Hidden>
        </Grid>
      )}
    </div>
  )
}