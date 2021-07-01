import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from './auth/react-auth'
import auth0Config from './config/auth.config.json'

import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
// import dark from '@material-ui/core/colors/dark';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export const socialTheme = {
   
    typography: {
      fontFamily: ['Raleway'].join(',')
    },
    palette: {
        primary: blue,
        secondary: {main:'#11cb5f'},
        error: red,
    }
};
const theme = createMuiTheme(socialTheme);
ReactDOM.render(
    // <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      client_id={auth0Config.clientId}
      audience={auth0Config.audience}
      redirect_uri={window.location.origin}
    >
      <MuiThemeProvider theme={theme}>
        <App />
        </MuiThemeProvider>
    </Auth0Provider>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
