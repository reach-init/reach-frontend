import './App.css'
import NavBar from '../NavBar/NavBar'
import Posts from '../Posts/Posts'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import User from '../User/User'
import Tag from '../Tag/Tag'
import SearchResults from '../SearchResults/SearchResults'
import CssBaseline from '@material-ui/core/CssBaseline'
import useStyles from './Styles'
import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Grid from '@material-ui/core/Grid'
import AppDrawer from '../Drawer/Drawer'

export default function PersistentDrawerLeft() {
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
    <div className="Wrapper">
      <div className={classes.root}>
        <CssBaseline />
        <Grid container justify="space-between">
          <Grid xs={12} lg={12} item>
            <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
          </Grid>

          <Grid item>
            <AppDrawer
              theme={theme}
              handleDrawerClose={handleDrawerClose}
              open={open}
              setOpen={setOpen}
            />
          </Grid>

          <Grid
            item
            className={clsx(classes.content, {
              [classes.contentShift]: open
            })}
          >
            <div className={classes.drawerHeader} />
            <Switch>
              <Route exact path="/" render={() => <Posts />} />
              <Route
                exact
                path="/page2"
                render={() => <Typography>Page 2</Typography>}
              />
              <Route
                exact
                path="/page3"
                render={() => <Typography>Page 3</Typography>}
              />

              <Route path="/" exact component={Posts} />
              <Route path="/user/:id" component={User} />
              <Route path="/tag/:tag" component={Tag} />
              <Route path="/results/:searchedText" component={SearchResults} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}


