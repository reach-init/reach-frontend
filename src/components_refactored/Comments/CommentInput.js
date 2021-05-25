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
import {useState} from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../auth/react-auth'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from "@material-ui/core/styles";
import Faker from "faker";

const useStyles = makeStyles(theme => ({
  textField: {
    fontWeight: 400,
    fontSize: '14px',
    paddingRight: '20px'
},
header: {
    padding: '2px 25px 3px 10px',
},
postButton: {
  flexDirection: 'row-reverse',
},
}));

export default function CommentInput() {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  const classes = useStyles();
  const [text, setText] = useState('')
  const [postDisable, setPostDisable] = useState(true)

  const handleChange = (e) => {
    const data = e.target.value;
    setText(data)

    if (data.length === 0 || data.trim() === '') {
      setText('')
      setPostDisable(true)
  } else {
    setText(data)
    setPostDisable(false)
  }


  }
  return (
          <div>

            
           <Paper  elevation={0} >

             <Box mt="1px" pl={1} pb={2} display="flex" flexDirection="row"  m={1}>
               <Box ml="-2px">
               <Avatar  alt="avatar" src={Faker.image.avatar()} />
               </Box>
               <Box flexGrow={1} ml={2} mt="2px">
               <TextField fullWidth
                                    placeholder={"Add a comment..."}
                                    multiline
                                    value={text}
                                    onChange={handleChange}
                                    className={classes.textField}
                                />
               </Box>

               <Box ml={2}>
               <Button  variant="outlined" color="primary" disabled={postDisable} onClick={()=>""}>
                                {'Post'}
                            </Button>
               </Box>
                        {/* <CardHeader
                            className={classes.header}
                            avatar={}
                            subheader={
                            
                            }
                        ></CardHeader>
                        <CardActions className={classes.postButton}>
                            
                        </CardActions> */}
                        </Box>
                </Paper>
          </div>
          
  )
}
