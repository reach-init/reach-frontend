import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import useToken from '../App/useToken';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  withRouter,
  useHistory 
} from "react-router-dom";


export default (props) => {
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
      history.push({ pathname: route });
    };

    return (

    <div>
    {/* <div className="row"> */}
      {/* <div className="col-md-12"> */}
        
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
      </div>
    // </div>
  // </div>
    )
}

