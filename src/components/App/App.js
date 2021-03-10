import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';

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
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    // <div className="App">
    //   <Component1/>
    //   <Component2/>
    // </div>
    <div className="wrapper">
    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
