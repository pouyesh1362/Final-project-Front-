import React, {Component} from 'react';

class Profile extends Component{
    render (){
      return (
        <div>
            <div className='container profile-info jumbotron'>
                <h1 className='profile-name'>{this.props.profile.name} {this.props.profile.lastName} 's Profile</h1>
                <img className='profile-img' src={this.props.profile.image} alt="profile"></img>
                <p className='email'><strong>Phone:</strong>{this.props.profile.phone}</p>
                <p className='email'><strong>Email:</strong>{this.props.profile.email}</p>
                <p className='create-date'><strong>Joined:</strong>{this.props.profile.createdAt}</p>
                <button className="btn btn-small btn-primary float-right">Edit</button>
            </div>
            <div className='container profile-posts jumbotron'>{this.props.profile.data}</div>
        </div>
    )
    }
  };

export default Profile;