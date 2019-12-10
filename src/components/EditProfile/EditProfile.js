import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

let currentUser = localStorage.getItem('uid');

class EditProfile extends Component {
  state = {
      name: currentUser.name,
      lastName: currentUser.lastName,
      image: currentUser.image,
      email: currentUser.email,
      phone: currentUser.phone,
      password: currentUser.password,
     
  };
  
  handleChange = (event) => {
    if(event.target.value !==currentUser.value)
      this.setState({
          [event.target.name]: event.target.value
          
      });
  };
  
  handleUpdate = (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('uid');
    let newObj = Object.assign({}, this.state);
    axios.put(`${process.env.REACT_APP_API_URL}/users/update/${userId}`, newObj, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res)
        this.props.history.push('/profile');
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container mt-4 jumbotron">
        <div className="row">
          <div className="col">
            <h4 className="mb-3">Edit Register</h4>
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={this.state.lastName} />
              </div>
              <div className="form-group">
                    <label htmlFor="ImageLink">Image Link</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="image" name="image" value={this.state.image} />
                </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="phone" name="phone" value={this.state.phone} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
              </div>
              <Link to="/profile"><button onClick={this.handleUpdate} className="btn btn-primary float-right" type="submit" >Update</button></Link>
            </form>
          </div>
        </div>
      </div>
    )
};
};

export default withRouter(EditProfile);