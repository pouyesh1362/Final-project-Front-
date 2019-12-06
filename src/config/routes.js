import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Profile from '../components/Profile/Profile';
import YourHouses from '../components/YourHouses/YourHouse';
import MarketHouses from '../components/MarketHouses/MarketHouses';



export default ({currentUser, setCurrentUser}) => (
  <Switch>
    <Route exact path = '/' component = {Home} />
    <Route path = '/register' component={Register}/>
    <Route path = '/login' component={Login}/>
    <Route path = '/profile' component={Profile}/>
    <Route path = '/yourhouses' component ={YourHouses}/>
    <Route path = '/market' component ={MarketHouses}/>

  </Switch>
)