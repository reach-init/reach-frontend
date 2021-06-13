import './Layout.css'
import NavBar from '../commons/NavBar/NavBar'
import MainContent from './MainContent'
import HideableLeftMenu from './HideableLeftMenu'
import HideableAppDrrawer from './HideableAppDrrawer'
import Box from '../../commons/Drawer/node_modules/@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import useStyles from './Styles'
import React from 'react'
import { useTheme } from '../../commons/Drawer/node_modules/@material-ui/core/styles'

import Grid from '../../CreatePost/node_modules/@material-ui/core/Grid'
import BottomNavBar from '../../components_refactored/BottomNavBar/BottomNavBar'

export default function Layout() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbarMargin} />

      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12}>
          <NavBar handleDrawerOpen={handleDrawerOpen} />
        </Grid>

        <HideableAppDrrawer
          theme={theme}
          handleDrawerClose={handleDrawerClose}
          open={open}
          setOpen={setOpen}
        />

        <Grid xl={1} lg={1} md={1} item></Grid>

        <HideableLeftMenu classes={classes} />

        <MainContent classes={classes} />
        <Grid item xs={12} >
          <Box >
          <BottomNavBar/>

          </Box>
        </Grid>
        <Grid xl={1} lg={1} md={1} sm={0} xs={0} item></Grid>
      </Grid>
    </>
  )
}
