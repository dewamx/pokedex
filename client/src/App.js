import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
// import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import PrivateRoute from './components/PrivateRoute'

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

  componentDidMount() {
    this.getUser()
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
    return(
      <Router>
        <div className="App">
          APP STUFF GOES HERE
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route path="/home">
              <Dashboard/>
            </Route>
            <Route path="/signup"> 
              <Signup/>
            </Route>
            <Route path="/login">
              <LoginForm></LoginForm>
            </Route>
          </Switch>
        </div>
      </Router>
    )
      // <div className="App">
      //   {!this.state.loggedIn ?
      //   // if user not logged in,  force login
      //   <Switch>
      //     <Route
      //     path="/signup"
      //     render={() =>
      //       <Signup/>}
      //     />

      //     <Route  //no path on this route means it is a catch-all
      //     render={() =>
      //         <LoginForm
      //           updateUser={this.updateUser}
      //         />
      //       }
      //     />

      //   </Switch>
      //   :
      //   //if user is logged in

      //     <Switch>
      //       {/* build out more routes here */}
      //       <Route
      //       component={Dashboard} />
      //       {/* <Route path="/signup" render={() => <Signup/>} /> */}
      //         {/* <Route render={() => <LoginForm updateUser={this.updateUser} />} /> */}
      //         <Route exact path="/" render={() => <Dashboard search={this.state.search}/> } />
      //         <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
      //     </Switch>
      //   }

       
        
        

      // </div>
  }
}

export default App;
