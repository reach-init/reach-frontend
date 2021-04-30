import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';
import { BrowserRouter as Router, NavLink,Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import User from '../User/User';
import Tag from '../Tag/Tag';
import SearchResults from '../SearchResults/SearchResults';
import CssBaseline from '@material-ui/core/CssBaseline';

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: drawerWidth,
  },
}));
const NavListItem = 
  ({  Icon, text, active, ...other }) => {
  const classes = useStyles();
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
      };

const NavItem = props => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path="/" render={() => <NavListItem {...props} />} />
  </Switch>
);
const MyDrawer = ({open, theme, handleDrawerClose, setOpen}) => {
  const classes = useStyles();

  return (
    <Drawer
    className={classes.drawer}
    // variant="persistent"
    anchor="left"
    open={open}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
              text="Page 2"
              Icon={WebIcon}
              onClick={() => setOpen(false)}
            />
            <NavItem
              to="/page3"
              text="Page 3"
              Icon={WebIcon}
              onClick={() => setOpen(false)}
            />
          </List>
  </Drawer>
  )
}

const MyAppBar = ({open, handleDrawerOpen}) => {
  const classes = useStyles();

  return (
    <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Persistent drawer
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="Wrapper"> 
    <div className={classes.root}>
      <CssBaseline />
      <Grid container justify="space-between">
      <Grid xs={12} lg={12} item>
      <NavBar handleDrawerOpen={handleDrawerOpen} open={open} />

        </Grid>

        <Grid item>
<MyDrawer theme={theme} handleDrawerClose={handleDrawerClose} open={open} setOpen={setOpen}/>

        </Grid>

      <Grid item  className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.drawerHeader} />
          <Switch>

        <Route
          exact
          path="/"
          render={() => <Posts/>}
        />
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

 <Route path="/" exact component={Posts}/>
           <Route path="/user/:id" component={User}/>
           <Route path="/tag/:tag" component={Tag} />
            <Route path="/results/:searchedText" component={SearchResults} />
            <Route component={NotFound}/>
          </Switch>
      </Grid>
        </Grid>

    </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//      <div className="Wrapper"> 
//      <Router>
//         {/* <Header logo={logo}/> */}
//         <NavBar></NavBar>
//         <Switch>
//           <Route path="/" exact component={Posts}/>
//           <Route path="/user/:id" component={User}/>
//           <Route path="/tag/:tag" component={Tag} />
//           <Route path="/results/:searchedText" component={SearchResults} />
//           <Route component={NotFound}/>
//         </Switch>
//      </Router>
        
//      </div>
//     </div>
//   );
// }

// export default App;
