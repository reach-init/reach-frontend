import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { home, location, informationCircle, restaurant } from 'ionicons/icons';
import SchedulePage from './old/SchedulePage';
import HomePage from './HomePage'
import FoodPage from './FoodPage'
import MenuPage from './MenuPage'
import SpeakerList from './old/SpeakerList';
import SpeakerDetail from './old/SpeakerDetail';
import SessionDetail from './old/SessionDetail';
import MapView from './old/MapView';
import About from './old/About';
import Account from './old/Account';
import Login from './old/Login';
import Signup from './old/Signup';
import Support from './old/Support';
import Tutorial from './old/Tutorial';
import NotFound from '../components/commons/NotFound/NotFound'
import LoadUser from '../components/User/LoadUser'
import Profile from '../components/User/Profile'
import Tag from '../components/Tag/Tag'
import SearchResults from '../components/SearchResults/SearchResults'
import Typography from '@material-ui/core/Typography'
import AuthenticatedRoute from '../components/core/AuthenticatedRoute/AuthenticatedRoute'
const MainTabs = () => {

  return (
    <IonTabs>


      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={() => <HomePage />} exact={true} />
        <Route path="/restaurants" render={() => <FoodPage />} exact={true} />
        <Route exact path="/restaurants/:id" render={() => <MenuPage />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/:id"  render={() => <MenuPage />}/>
        <AuthenticatedRoute path="/tag/:tag" component={Tag} />
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
       
        <Route path="/results/:searchedText" component={SearchResults} />
        <Route component={NotFound} />
        <Route exact path="/profile" component={Profile} />
        <AuthenticatedRoute path="/tag/:tag" component={Tag} />
        <Route path="/results/:searchedText" component={SearchResults} />
        <Route component={NotFound} />
      </IonRouterOutlet>


      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="restaurants" href="/restaurants">
          <IonIcon icon={restaurant} />
          <IonLabel>Food</IonLabel>
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