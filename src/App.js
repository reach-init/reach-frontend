import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';


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
  return (
    <div className="App">
      <Component1/>
      <Component2/>
    </div>
  );
}

export default App;
