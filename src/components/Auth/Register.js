import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component {
    state = {
        name: '',
        lastName: '',
        image: '',
        email: '',
        phone: '',
        password: '',
        password2:''
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                window.location.href = "/login";
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
          <div className="container mt-4 jumbotron">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <h4 className="mb-3">Register</h4>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={this.state.lastName} />
                  </div>
                  <div className="file-field input-field ">
                    <div className="custom-file m-b4 ">
                    <input onChange={this.handleChange} type="file" className="custom-file-input" aria-describedby="inputGroupFileAddon03" id="image" name="image" value={this.state.image} />
                    <label className="custom-file-label" for="inputGroupFile03">Choose file</label>
                  </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text"/>
                    </div>
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
                  <button className="btn btn-primary float-right" type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
        )
    };
};

export default Register;