import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from './auth/react-auth'
import auth0Config from './config/auth.config.json'

export const headers = { } //'app-id': '609059d49f3a84a74d64cc3a' }
import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export const socialTheme = {
   
    typography: {
      fontFamily: ['Raleway'].join(',')
    },
    palette: {
        primary: lightBlue,
        secondary: red,
        error: red,
    },
     
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
    <Router>
    <MuiThemeProvider theme={theme}>
      <App />
      </MuiThemeProvider>
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
