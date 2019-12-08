import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
            withCredentials: true,
        })
        .then((res) => {
    
            let userData = res.data.data;
            this.props.setCurrentUser(userData);
            this.props.history.push(`/profile`);
            
        })
        .catch((err) => console.log(err));
    }
    render() {
        return (
          <div className="container mt-4 jumbotron">
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <h4 className="mb-3">Login</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Email</label>
                      <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
                    </div>
                    <button className="btn btn-primary float-right" type="submit"  handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state}>Login</button>
                  </form>
                </div>
              </div>
            </div>
        )
      }
    };

export default withRouter(Login);