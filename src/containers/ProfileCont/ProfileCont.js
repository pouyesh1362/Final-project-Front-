import React, {Component} from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';


class ProfileContainer extends Component {
    state = {
        profile: {},
    }

    componentDidMount() {
        const id = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            this.setState({
                profile: res.data.data,
                
            });
        })
        .catch((err) => console.log(err));
    }
    handleUpdate = (event, updatedState) => {
        event.preventDefault();
        const id = localStorage.getItem('uid');
        
        axios.put(`${process.env.REACT_APP_API_URL}/auth/${id}`, 
          updatedState, 
          {
            withCredentials: true
          })
          .then(res => {
            this.setState({
              updatedprofile: res.data.data
            });
          })
        }
    render() {
        return (
            <>
            <Profile profile={this.state.profile} handleUpdate={this.updatedprofile}/>
            </>
        );
    };
};

export default ProfileContainer;