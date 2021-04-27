import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Posts from '../Posts/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import User from '../User/User';
import Tag from '../Tag/Tag';
import SearchResults from '../SearchResults/SearchResults';
import {Grid} from '@material-ui/core'



function App() {
  return (
    
    <div className="App">
      
     <div className="Wrapper">
     {/* <Grid lg={12} item container spacing={3}>

         <Grid item lg={3} sm={6} xs={12}>
            <h1 style={{background:'green'}}>Sal1</h1> 
        </Grid>

         <Grid item lg={3} sm={6} xs={12}>
            <h1 style={{background:'red'}}>Sal2</h1>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
            <h1 style={{background:'brown'}}>Sal3</h1>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
            <h1 style={{background:'purple'}}>Sal4</h1>
        </Grid>

    </Grid> */}

     <Router>
        {/* <Header logo={logo}/> */}
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/user/:id" component={User}/>
          <Route path="/tag/:tag" component={Tag} />
          <Route path="/results/:searchedText" component={SearchResults} />
          <Route component={NotFound}/>
        </Switch>
     </Router>
        
     </div>
    </div>
  );
}

export default App;
