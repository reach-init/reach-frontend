import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import AppDrawer from '../commons/Drawer/Drawer'

export default function HideableAppDrawer({
  theme,
  handleDrawerClose,
  open,
  setOpen
}) {
  return (
    <Hidden smUp>
      <Grid item>
        <AppDrawer
          variant="temporary"
          theme={theme}
          handleDrawerClose={handleDrawerClose}
          open={open}
          setOpen={setOpen}
        />
      </Grid>
    </Hidden>
  )
}
