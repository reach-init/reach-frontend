import useFetch from 'use-http'
import {useState, useEffect} from 'react';
import InfiniteScroll  from 'react-infinite-scroll-component'
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
  } from '@material-ui/core';
  import FavoriteIcon from '@material-ui/icons/Favorite';
  import ShareIcon from '@material-ui/icons/Share';
  import MoreVertIcon from '@material-ui/icons/MoreVert';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { headers } from '../../index';

export default function Posts() {
    const [posts, setPosts] = useState([])
    const { get, post, response, loading, error } = useFetch('https://dummyapi.io/data/api', {headers})
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => { loadPosts() }, [])

    async function loadPosts() {
        const nextPosts = await get(`post?limit=10&page=${page}`)
        console.log(nextPosts)
        const newData = nextPosts.data
        const newPosts = [...posts, ...newData ]
        if (response.ok) setPosts(newPosts)

        const newPage = page + 1
        setPage(newPage)

        if(newData.length===0) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      }
    
    //   async function addPost() {
    //     const newPost = await post('/todos', { title: 'my new todo' })
    //     if (response.ok) setTodos([...todos, newTodo])
    //   }

    const newsFeed = posts.map(function(item, index){
      return (
      <Card key={item.id} style={{maxWidth: 600, margin: '30px'}}>
      <CardHeader
        avatar={
          <Link to={`/user/${item.owner.id}`}>
          <div><Avatar src={item.owner.picture} alt={item.owner.firstName + ' ' + item.owner.lastName} style={{width: '40px', marginRight: 10, display: 'inline-block', verticalAlign: 'middle'}}/>{item.owner.firstName + ' ' + item.owner.lastName}
          </div></Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.owner.firstName + ' ' + item.owner.lastName}
      />
      <CardMedia
        style={{height: 0, paddingTop: '56.25%'}}
        image={item.image}
        title={item.message}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.message}
        </Typography>
      </CardContent>
      {item.tags.map(tag => {
        if (tag) {
          return (
              <Link to={`/tag/${tag}`} key={tag}>
            <Chip
              variant="outlined"
              clickable={true}
              style={{margin: '5px'}}
              key={tag}
              label={tag}
            />
            </Link>
          );
        }
      })}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>)
    })
    
    return(
        <div className="Posts">
            <div className="PostStream">
            <InfiniteScroll
              dataLength={newsFeed.length} //This is important field to render the next data
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
            <Sidebar/>
        </div>
    )
}