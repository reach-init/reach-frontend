import { Typography, Divider, Grid } from '@material-ui/core'

import ProfilePost from './ProfilePost'

export default function RecentPosts({ posts }) {
  return (
    <div>
      <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
        Recent Posts
      </Typography>
      <Divider style={{ margin: '0 20px' }} />
      <Grid container spacing={1}>
        {posts.map(function (item, index) {
          return (
            <Grid key={item.id} item xs={6} lg={3} md={4}>
              <ProfilePost post={item}></ProfilePost>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
