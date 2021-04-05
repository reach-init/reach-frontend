import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  withRouter,
  useHistory 
} from "react-router-dom";


import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import Home from '../Home/Home';
import NewsFeed from '../NewsFeed/NewsFeed';
import useToken from './useToken';
import Tabs from '../Tabs/Tabs';
import Profile from '../Profile/Profile';
import User from '../User/User';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import SearchResults from '../SearchResults/SearchResults';

function App(props) {
  const { token, setToken } = useToken();

  const [searchText, setSearchText] = useState('');
  const history = useHistory();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  const handleFormSubmit = e => e.preventDefault();

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchKeyUp = (event) => {
    event.preventDefault();
    if (event.key === 'Enter' && event.keyCode === 13) {
        handleSearchSubmit();
    }
  };
  

  const handleSearchSubmit = () => {
    if (searchText) {
      setSearchText("");
      history.push('/results/' + searchText);
    } else {
        alert("Please enter some search text!");
    }
  };

  const handleRoute = (route) => ()  => {
    props.history.push({ pathname: route });
  };

  return (
    // <div className="App">
    //   <Component1/>
    //   <Component2/>
    // </div>

    <div>
      <div className="row">
        <div className="col-md-12">
          
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand  href="/">Reach</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {/* <Nav.Link href="/">NewsFeed</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link> */}
                  <Nav.Link onClick={handleRoute("/")}>NewsFeed</Nav.Link>
                  <Nav.Link onClick={handleRoute("/profile")}>Profile</Nav.Link>
                </Nav>

                <Form inline onSubmit={handleFormSubmit}>
                    <FormControl
                        onChange={handleSearchInput}
                        value={searchText}
                        onKeyUp={handleSearchKeyUp}
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button onClick={handleSearchSubmit} variant="outline-info">
                        Search
                    </Button>
                  </Form>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>

              {/* <Route path="/home" render={(props) => <Home {...props} />} /> */}

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
          
        </div>
      </div>
    </div>



  );
}

export default withRouter(App);
