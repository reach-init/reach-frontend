import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
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


function Component1() {
  return (
    <div>
      <h1>My custom text1.</h1>
    </div>
  );
}

function Component2() {
  var [name, setName] = useState("");
  return (
    <div>
      <h1>{name}</h1>
      <input onChange={(e) => {
        name = setName(e.target.value);
        console.log(name);
      }}>

      </input>

    </div>
  );
}

function Component3() {
  return (
    <div>
      <h1>My custom text3.</h1>
    </div>
  );
}

function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  const [searchText, setsearchText] = useState('Search');

  const handleFormSubmit = e => e.preventDefault();

  const handleSearchInput = () => {};
  const handleSearchKeyUp = () => {};
  const handleSearchSubmit = () => {};

  return (
    // <div className="App">
    //   <Component1/>
    //   <Component2/>
    // </div>

    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand  href="/">Reach</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">NewsFeed</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
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

              <Route path="/:id" children={<User />} />

            </Switch>
          </Router>
        </div>
      </div>
    </div>



  );
}

export default App;
