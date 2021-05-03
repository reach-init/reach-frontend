import useStyles from './Styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import WebIcon from '@material-ui/icons/Web'
import IconButton from '@material-ui/core/IconButton'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import clsx from 'clsx'

const NavListItem = ({ Icon, text, active, ...other }) => {
  const classes = useStyles()
  return (
    <ListItem component={NavLink} {...other}>
      <ListItemIcon
        classes={{
          root: clsx({ [classes.activeListItem]: active })
        }}
      >
        <Icon />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: clsx({
            [classes.activeListItem]: active
          })
        }}
      >
        {text}
      </ListItemText>
    </ListItem>
  )
}

const NavItem = (props) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path="/" render={() => <NavListItem {...props} />} />
  </Switch>
)

const AppDrawer = ({ variant, open, theme, handleDrawerClose, setOpen }) => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant={variant}
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavItem
          to="/"
          text="Home"
          Icon={HomeIcon}
          onClick={() => setOpen(false)}
        />
        <NavItem
          to="/page2"
          text="Friends"
          Icon={WebIcon}
          onClick={() => setOpen(false)}
        />
        <NavItem
          to="/page3"
          text="Apps"
          Icon={WebIcon}
          onClick={() => setOpen(false)}
        />
      </List>
    </Drawer>
  )
}

export default AppDrawer
