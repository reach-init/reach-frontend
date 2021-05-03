import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import { Link, useHistory } from 'react-router-dom'
import useStyles from './NavBarcss'
import useFetch from 'use-http'
import { headers } from '../../index'
import { Grid, Hidden } from '@material-ui/core'
import { useAuth0 } from '../../auth/react-auth'
import Box from '@material-ui/core/Box'

export default function NavBar({ handleDrawerOpen }) {
  const classes = useStyles()
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }
  const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    borderColor: 'grey.300'
  }
  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile">
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
    
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>

      {isAuthenticated && (
        <MenuItem onClick={() => logoutWithRedirect({})}>Logout</MenuItem>
      )
      }
    </Menu>
  )
  const [searchedText, setSearchedText] = useState('')
  const history = useHistory()

  const handleFormSubmit = (e) => e.preventDefault()

  const handleSearchInput = (event) => {
    setSearchedText(event.target.value)
  }

  const handleSearchKeyUp = (event) => {
    event.preventDefault()
    if (event.key === 'Enter' && event.keyCode === 13) {
      console.log('I will search for ' + searchedText)
      handleSearchSubmit()
    }
  }

  const handleSearchSubmit = async () => {
    if (searchedText) {
      setSearchedText('')
      history.push('/results/' + searchedText)
      // setSearchedText("");
      // history.push('/tag/' + searchText);
    } else {
      alert('Please enter some search text!')
    }
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box borderRadius="borderRadius" {...defaultProps}>
      <div className={classes.grow}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={3} alignItems="center" justifyCenter>
              <Hidden smUp>
                <Grid item xs={1}>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>

              <Grid item lg={1} md={1} sm={1} xs={2} justifyCenter>
                <Link to="/" className={classes.title} variant="h6" noWrap>
                  Reach
                </Link>
              </Grid>

              <Grid item lg={8} md={8} sm={8} xs={isAuthenticated ? 6 : 5}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    value={searchedText}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSearchInput}
                    onKeyUp={handleSearchKeyUp}
                  />
                </div>
              </Grid>

              {!isAuthenticated && (  
                <Grid item lg={2} md={2} sm={2} xs={3}>
                  <Button
                    onClick={() => loginWithRedirect({})}
                    variant="contained"
                    color="default"
                  >
                    Login
                  </Button>
                </Grid>
              )
              }

              
                {isAuthenticated && (
                  <Hidden smUp>
                    <Grid item lg={2} md={2} sm={2} xs={2}>
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="black"
                      >
                        <MoreIcon />
                      </IconButton>
                    </Grid>
                  </Hidden>
                )
                }
              

              
                {isAuthenticated && (
                  <Hidden xsDown>
                  <Grid item lg={2} md={3} sm={3} xs={3}>
                    <div className={classes.sectionDesktop}>
                      <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                          <MailIcon />
                        </Badge>
                      </IconButton>

                      <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <Badge badgeContent={17} color="secondary">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>

                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                    </div>
    
                  </Grid>
                  </Hidden>
                )
                }
              
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </Box>
  )
}
