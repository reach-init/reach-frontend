import './App.css'
import NavBar from '../NavBar/NavBar'
import Posts from '../Posts/Posts'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import LeftMenu from '../LeftMenu/LeftMenu'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';

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
import { MoreIcon } from '@material-ui/icons/MoreVert'

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
    <div>
      <CssBaseline />
      <div className={classes.toolbarMargin} />
     
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12}>
          <NavBar handleDrawerOpen={handleDrawerOpen} />
        </Grid>
        
        <Hidden smUp >
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
        <Grid  xl={1} lg={1} md={1} sm={0} item></Grid>

        
        <Hidden xsDown >
        <Grid  xl={2} lg={2} md={3} sm={4} xs={0} className={classes.content}  item>
          <LeftMenu />
        </Grid> 
          
        </Hidden>

        <Grid xl={8} lg={8} md={7} sm={7} xs={12} className={classes.content} item >
          <div />
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
            <AuthenticatedRoute path="/tag/:tag" component={Tag} />
            <Route path="/results/:searchedText" component={SearchResults} />
            <Route component={NotFound} />
          </Switch>
        </Grid>

        <Grid  xl={1} lg={1} md={1}  sm={0} xs={0} item></Grid> 
      </Grid>
    </div>
  )
}

