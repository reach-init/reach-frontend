import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
} from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

import TagList from '../Tag/TagList'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostModal from './PostModal'

const useStyles = makeStyles({
  root: {
    transition: 'transform 0.15s ease-in-out'
  },
  cardHovered: {
    transform: 'scale3d(1.05, 1.05, 1)'
  }
})

export default function ProfilePost({ post, isModal }) {
  const classes = useStyles()
  const [state, setState] = useState({
    raised: false,
    shadow: 1
  })


  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {!isModal && (
      <PostModal post={post} open={open} handleClose={handleClose} />
    )}
    
      <div onClick={handleOpen}>

        <Card
          key={post.id}
          style={{ width: '100%', margin: '1.5%' }}
          className={classes.root}
          classes={{ root: state.raised ? classes.cardHovered : '' }}
          onMouseOver={() => setState({ raised: true, shadow: 3 })}
          onMouseOut={() => setState({ raised: false, shadow: 1 })}
          raised={state.raised}
          zdepth={state.shadow}
        >
          <CardMedia
            style={{ height: 0, paddingTop: isModal ? '100%' : '56.25%' }}
            image={post.image}
            title={post.message}
          />
          
          {/* how much to show of a post */}
          <div style={{ height: isModal ? '15rem' : '0' }}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Description...
                {post.message}
              </Typography>
            </CardContent>

            <TagList post={post}></TagList>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </div>
        </Card>
    </div>
    </>
  )
}
