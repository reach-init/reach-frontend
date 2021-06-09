import Grid from '@material-ui/core/Grid'
import Posts from '../Posts/Posts'
import ScrollToTop from '../core/ScrollToTop'
import AuthenticatedRoute from '../core/AuthenticatedRoute/AuthenticatedRoute'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import RestaurantList from '../../components_refactored/Restaurant/RestaurantList'
import NotFound from '../commons/NotFound/NotFound'
import LoadUser from '../User/LoadUser'
import Profile from '../User/Profile'
import Tag from '../Tag/Tag'
import SearchResults from '../SearchResults/SearchResults'
import Typography from '@material-ui/core/Typography'
import RestaurantMenu from '../../components_refactored/RestaurantMenu/RestaurantMenu';

export default function MainContent({ classes }) {
  return (
    <Grid xl={8} lg={8} md={7} sm={7} xs={12} className={classes.content} item>
    <ScrollToTop />
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
<Route
          exact
          path="/restaurants"
          render={() => <RestaurantList/>}
        />

<Route
          exact
          path="/restaurants/:id"
          render={() => <RestaurantMenu/>}
        />
        <Route path="/" exact component={Posts} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/:id" component={LoadUser} />
        <AuthenticatedRoute path="/tag/:tag" component={Tag} />
        <Route path="/results/:searchedText" component={SearchResults} />
        <Route component={NotFound} />
      </Switch>
    </Grid>
  )
}
