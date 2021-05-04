import './Layout.css'
import NavBar from '../commons/NavBar/NavBar'
import MainContent from '../Layout/MainContent'
import HideableLeftMenu from '../Layout/HideableLeftMenu'
import HideableAppDrrawer from '../Layout/HideableAppDrrawer'

import CssBaseline from '@material-ui/core/CssBaseline'
import useStyles from './Styles'
import React from 'react'
import { useTheme } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

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

        <Grid xl={1} lg={1} md={1} sm={0} xs={0} item></Grid>
      </Grid>
    </>
  )
}
