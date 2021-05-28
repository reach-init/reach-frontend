import {
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

import { useAuth0 } from '../../auth/react-auth'
import Tag from '../Tag/Tag'
import Box from '@material-ui/core/Box';


export default function PostBody({item}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  return (
    <>
<Box mt={0} ml={2} mb={0}>
            <Typography variant="body2" color="textPrimary" component="p">
                {item.text}
            </Typography>
            </Box>

            <Box mb={1}  ml={1}>
        {item.tags.map((tag) => {
        if (tag) {
            return (
            <Tag tag={tag.value} color={tag.color}/>
            )
        }
        })}
        </Box>
        <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image={item.image}
        title={item.text}
        />
        
       
     
    </>  
  )
}
