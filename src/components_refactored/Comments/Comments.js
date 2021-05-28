import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  List,
  IconButton,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import Faker from "faker";
import Paper from '@material-ui/core/Paper';
import PostActions from '../commons/SocialActions';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    // '&:hover': {
    //     backgroundColor: fade(theme.palette.common.black, 0.05)
    //   },
    display: 'flex',
       flexDirection: 'column',

  },
  paper: {
      padding: '10px',
      backgroundColor: fade(theme.palette.common.black, 0.05)
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

const Comments = ({ comments }) => {

  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map(comment => {
        return (
          <React.Fragment key={comment.id}>

            <ListItem  key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" src={Faker.image.avatar()} />
              </ListItemAvatar>
              <div className={classes.listItem}>

              <Paper className={classes.paper} elevation={0} >
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {comment.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.fonts}
                      color="textPrimary"
                    >
                      {comment.email}
                    </Typography >
                    <Typography
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     {` - ${comment.body}`}

                    </Typography >
                  </>
                }
              />
              </Paper>
            <Paper elevation={0}>
            <IconButton aria-label="add to favorites">
            <SentimentSatisfiedOutlinedIcon />
        </IconButton>

        <IconButton aria-label="add to favorites">
            <SentimentDissatisfiedOutlinedIcon />
        </IconButton>

        <IconButton aria-label="comment" onClick={() => ""}>
            <ChatBubbleOutlineRoundedIcon />
        </IconButton>

     
            </Paper>
            </div>
              
            </ListItem>
          </React.Fragment>
        );
      })}

    </List>
  );
};

export default Comments;