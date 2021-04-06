import React from 'react'
import { Container } from 'react-bootstrap'

import './App.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import NewsFeed from '../NewsFeed/NewsFeed';
import Profile from '../Profile/Profile';
import User from '../User/User';

import SearchResults from '../SearchResults/SearchResults';
import Navigation  from '../Navigation/Navigation';

function App() {


  return (
          <div>
           <Navigation/>
            <Container>
            <Switch>
              <Route exact path="/">
                <NewsFeed />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              <Route path="/results/:searchedText">
                <SearchResults />
              </Route>

              <Route path="/:id" children={<User />} />

            </Switch>
          
       </Container>
      
       </div>


  );
}

export default App;
