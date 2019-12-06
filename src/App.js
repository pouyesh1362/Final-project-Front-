import React,{Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar'
import Routes from './config/routes';
import { withRouter } from 'react-router-dom';


class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios.post(`${process.env.REACT_APP_API_URL}/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} logout={this.logout} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      
      </>
    );
  }
}

export default withRouter(App);