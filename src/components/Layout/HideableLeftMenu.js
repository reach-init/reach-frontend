import LeftMenu from '../LeftMenu/LeftMenu'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'

export default function TogganableLeftMenu({ classes }) {
  return (
    <Hidden xsDown>
      <Grid xl={2} lg={2} md={3} sm={4} xs={0} className={classes.content} item>
        <div style={{ position: 'sticky', top: '5.6rem' }}>
          <LeftMenu />
        </div>
      </Grid>
    </Hidden>
  )
}
