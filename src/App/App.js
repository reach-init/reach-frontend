import Post from '../components_refactored/Posts/Post'
// import Layout from '../components/Layout/Layout'

import {
  Grid
} from '@material-ui/core'

export default function App() {
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

      <div style={{  'display': 'flex', 'align-items':'center', 'justify-content':'center', 'height':'100vh', ':':'1 0 auto'}}>
        <Post item={item}/>
      </div>
  
  )
}
