import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Profile.css'

class Profile extends Component{
    render (){
      return (
        <div>
          <div className="container portfolio">
          <h3 className='profile-name m-5'>{this.props.profile.name} {this.props.profile.lastName} 's Profile</h3>
                <Link  to='/profile/edit'><button  className="btn btn-small btn-primary float-right" >Edit</button></Link>
        
            <div className='container profile-info'>
                
                <img id="profile_image" className="rounded mx-auto d-block"  src={this.props.profile.image} alt="profile"></img>
                <p className='email m-2'><strong>Phone:</strong>{this.props.profile.phone}</p>
                <p className='email m-2'><strong>Email:</strong>{this.props.profile.email}</p>
                <p className='create-date m-2'><strong>Joined:</strong>{this.props.profile.createdAt}</p>
            </div>
            </div>
        </div>
    )
    }
  };

export default Profile;
