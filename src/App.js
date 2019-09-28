import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import backgroundImage from './pattern.png';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
// import SearchBar from './components/search/SearchBar';
import Pokemon from './components/pokemon/Pokemon';

// import { useAuth0 } from "./react-auth0-wrapper";
// import Profile from "./components/layout/Profile";
// import PrivateRoute from "./components/layout/PrivateRoute";



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  state = {
    search:'',
  }
  
  if (loading) {
    return (
      <div>Loading...</div>
    );
    }

  componentDidMount() {
    this.getUser()
  }
    
  setSearch = (search) => {
    this.setState({'search':search})
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  
  render() {
    
    return (
      
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar search={this.state.search} setSearch= {this.setSearch} />
          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {!this.state.loggedIn ?
          // if user not logged in,  force login
          <div className="container">
            <Switch>
              <Route path="/signup" render={() => <Signup/>} />
              <Route render={() => <LoginForm updateUser={this.updateUser} />} />
              <Route exact path="/" render={() => <Dashboard search={this.state.search}/> } />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
            :
            {/* if user is logged in */}

          <Switch>
            {/* build out more routes here */}
          <Route render = {() => <Dashboard search={this.state.search} />} />
          </Switch>
          }
          </div>
        </Router>
    );
  }
}

export default App;
