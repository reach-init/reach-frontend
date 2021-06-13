import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import HomePage from './HomePage'
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import MapView from './MapView';
import About from './About';
import Account from '../pages/Account';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Support from '../pages/Support';
import Tutorial from '../pages/Tutorial';
import NotFound from '../components/commons/NotFound/NotFound'
import LoadUser from '../components/User/LoadUser'
import Profile from '../components/User/Profile'
import Tag from '../components/Tag/Tag'
import SearchResults from '../components/SearchResults/SearchResults'
import Typography from '@material-ui/core/Typography'
import RestaurantMenu from '../components_refactored/RestaurantMenu/RestaurantMenu';
import RestaurantList from '../components_refactored/Restaurant/RestaurantList'
import AuthenticatedRoute from '../components/core/AuthenticatedRoute/AuthenticatedRoute'
const MainTabs = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/schedule" />
        <Route path="/home" render={() => <HomePage />} exact={true} />
        <Route path="/schedule" render={() => <SchedulePage />} exact={true} />
        <Route path="/speakers" render={() => <SpeakerList />} exact={true} />
        <Route path="/speakers/:id" component={SpeakerDetail} exact={true} />
        <Route path="/schedule/:id" component={SessionDetail} />
        <Route path="/speakers/sessions/:id" component={SessionDetail} />
        <Route path="/map" render={() => <MapView />} exact={true} />
        <Route path="/about" render={() => <About />} exact={true} />
        <Route path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/support" component={Support} />
        <Route path="/tutorial" component={Tutorial} />

        <Route
          exact
          path="/restaurants"
          render={() => <RestaurantList />}
        />

        <Route
          exact
          path="/restaurants/:id"
          render={() => <RestaurantMenu />}
        />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/:id" component={LoadUser} />
        <AuthenticatedRoute path="/tag/:tag" component={Tag} />
        <Route path="/results/:searchedText" component={SearchResults} />
        <Route component={NotFound} />   

        <Route
          exact
          path="/restaurants"
          render={() => <RestaurantList />}
        />

        <Route
          exact
          path="/restaurants/:id"
          render={() => <RestaurantMenu />}
        />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/:id" component={LoadUser} />
        <AuthenticatedRoute path="/tag/:tag" component={Tag} />
        <Route path="/results/:searchedText" component={SearchResults} />
        <Route component={NotFound} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={calendar} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/speakers">
          <IonIcon icon={people} />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/map">
          <IonIcon icon={location} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/about">
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;