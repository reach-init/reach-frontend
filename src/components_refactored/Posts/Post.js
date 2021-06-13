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
import SocialActions from '../commons/SocialActions'
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

  const commentsSource = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      "postId": 1,
      "id": 5,
      "name": "vero eaque aliquid doloribus et culpa",
      "email": "Hayden@althea.biz",
      "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
  ]

  const [comments, setComments] = useState(commentsSource)

  const addComment = (com) => {
    setComments([...comments, {postId: 1, id: 11, name: 'aaaa', email: 'aaa', body: com} ])
    setShowComment(true)
  }

  return (
      <Box
        borderRadius="borderRadius"
        {...defaultProps}
        key={item.id}
        style={{ minWidth: '200px', maxWidth: '600px', marginBottom: '20px' }}
      >
        <Paper>
        <PostHeader item={item}/>

        <PostBody item={item} />

        <SocialActions onChange={onChange}/>

        {showComment && <Comments comments={comments} postId={"1"}/>}

        <CommentInput addComment={addComment}/>
      </Paper>
                  
    </Box>
  )
}
