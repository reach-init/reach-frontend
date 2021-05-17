import {
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

import { useAuth0 } from '../../auth/react-auth'
import Tag from '../Tag/Tag'


export default function PostBody({item}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
    <>
        <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image={item.image}
        title={item.text}
        />
        
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {item.text}
            </Typography>
        </CardContent>

        {item.tags.map((tag) => {
        if (tag) {
            return (
            <Tag tag={tag}/>
            )
        }
        })}
    </>  
  )
}
