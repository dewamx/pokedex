import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import backgroundImage from './pattern.png';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import SearchBar from './components/search/SearchBar';
import Pokemon from './components/pokemon/Pokemon';

class App extends Component {
  state = {
    search:''
  }

  setSearch = (search) => {
    this.setState({'search':search})
  }
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar search={this.state.search} setSearch= {this.setSearch}/>
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Dashboard search={this.state.search}/> } />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
