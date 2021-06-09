import { fade, makeStyles } from "@material-ui/core/styles";
import Layout from '../components/Layout/Layout';



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
      { value: "🍕", color: 0 },
      { value: "🦃", color: 1 },
      { value: "🍗", color: 2 }
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

    <Layout />



  )
}
