import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import ProfileContainer from '../containers/ProfileCont/ProfileCont';
import YourHouses from '../components/YourHouses/YourHouse';
import Marketcontainer from '../containers/MarketContainer/MarketContainer';
import AddHouse from '../components/House/AddHouse/AddHouse';





export default ({currentUser, setCurrentUser}) => (
  <Switch>
    <Route exact path = '/' component = {Home} />
    <Route path = '/register' component={Register}/>
    <Route path = '/login' component={Login}/>
    <Route path = '/profile' component={ProfileContainer}/>
    <Route path = '/yourhouses' component ={YourHouses}/>
    <Route path = '/addHouse' component ={AddHouse}/>
    <Route path = '/market' component ={Marketcontainer}/>


  </Switch>
)