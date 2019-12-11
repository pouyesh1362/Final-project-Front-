import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home'
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import ProfileContainer from '../containers/ProfileCont/ProfileCont';
import Marketcontainer from '../containers/MarketContainer/MarketContainer';
import AddHouse from '../components/House/AddHouse/AddHouse';
import EditProfile from '../components/EditProfile/EditProfile';
import EditHouse from '../components/EditHouse/EditHouse';
import RenterUpdate from '../components/RanterUpdate/RenterUpdate';





export default ({currentUser, setCurrentUser}) => (
  <Switch>
    <Route exact path = '/' component = {Home} />
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}/>
    <Route path = '/register' component={Register}/>
    <Route exact path = '/profile' component={ProfileContainer}/>
    <Route path = '/profile/edit'  component={EditProfile}/>
    <Route path = '/addHouse' component ={AddHouse}/>
    <Route path = '/market' component ={Marketcontainer}/>
    <Route path = '/edithouses/:id' component={EditHouse}/>
    <Route path = '/renter/:id' component={RenterUpdate}/>


  </Switch>
)