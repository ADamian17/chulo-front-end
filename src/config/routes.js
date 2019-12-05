import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from '../components/Home/Home';
import Register from '../components/Navbar/Signup/Register'
import Login from '../components/Navbar/Login/Login';
import Movies from '../containers/MoviesContainer/MoviesContainer'


export default ({currentUser, setCurrentUser}) => (
  <Switch>
    <Route exact path="/welcome" component={Home} />
    <Route path="/signup" component={Register} /> 
    <Route path="/login" render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route path="/movies" component={Movies} /> 
  </Switch>
)