import useFetch from 'use-http'
import {useState, useEffect} from 'react';
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
    const { get, post, response, loading, error } = useFetch('https://dummyapi.io/data/api/post?limit=10', {headers})
    
    useEffect(() => { loadInitialPosts() }, [])

    async function loadInitialPosts() {
        const initialposts = await get('')
        console.log(initialposts)
        if (response.ok) setPosts(initialposts.data)
      }
    
    //   async function addPost() {
    //     const newPost = await post('/todos', { title: 'my new todo' })
    //     if (response.ok) setTodos([...todos, newTodo])
    //   }
    
    return(
        <div className="Posts">
            <div className="PostStream">
{posts.map(function(item, index){
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
      })}
        </div>
        <Sidebar/>
        </div>
    )
}