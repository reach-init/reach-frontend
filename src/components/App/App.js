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



function App() {
  return (
    <div className="App">
     <div className="Wrapper"> 
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
