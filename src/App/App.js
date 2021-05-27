import Post from '../components_refactored/Posts/Post'
// import Layout from '../components/Layout/Layout'

import {
  Grid
} from '@material-ui/core'
import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    
    backgroundColor: fade(theme.palette.common.black, 0.05)
  },


}));
export default function App() {
  const classes = useStyles();

  const item = {
    "id": "609da0e0850f1a6ce0e898e1",
    "text": "ice caves in the wild landscape photo of ice near gray cliff",
    "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
    "likes": 31,
    "tags": [
        "snow",
        "ice",
        "mountain"
    ],
    "publishDate": "2020-05-24T07:44:17.738Z",
    "owner": {
        "id": "t3k3dx7zDMAKjCEeXl9Q",
        "firstName": "Marius",
        "lastName": "Larsen",
        "email": "marius.larsen@example.com",
        "picture": "https://randomuser.me/api/portraits/men/54.jpg",
        "title": "mr"
    }
}
  return (
<Grid className={classes.root}  container >

<Grid item lg={4} ></Grid>
<Grid item lg={4} xs={12} ><Post item={item}/></Grid>
<Grid item lg={4} ></Grid>

<Grid item lg={4} ></Grid>
<Grid item lg={4} xs={12} ><Post item={item}/></Grid>
<Grid item lg={4} ></Grid>

 
</Grid>


  
  )
}
