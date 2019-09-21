import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import backgroundImage from './pattern.png';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
// import SearchBar from './components/search/SearchBar';
import Pokemon from './components/pokemon/Pokemon';
import { useAuth0 } from "./react-auth0-wrapper";
import Profile from "./components/layout/Profile";
import PrivateRoute from "./components/layout/PrivateRoute";


// class App extends Component {
//   render() {
  export default function App() {

    const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

    return (
      
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route path="/profile" component={Profile} />
              <PrivateRoute path="/profile" component={Profile} />
              {/* <Route exact path="/news" component={news}/> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }









