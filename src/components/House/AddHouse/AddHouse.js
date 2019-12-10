import React, { Component } from 'react';
import axios from 'axios';

class AddHouse extends Component {
    state = {
      image: '',
      price: '',
      Room: '',
      state: '',
      City: '',
      ZipCode: '',
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/houses/create`, this.state, {
          withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                window.location.href = "/yourhouses";
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="Price">Pirce</label>
                    <input onChange={this.handleChange} placeholder= "" className="form-control form-control-lg" type="number" id="price" name="price" value={this.state.price} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Room">Room</label>
                    <input onChange={this.handleChange} placeholder= "" className="form-control form-control-lg" type="number" id="Room" name="Room" value={this.state.Room} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input onChange={this.handleChange} placeholder= "" className="form-control form-control-lg" type="textarea" id="image" name="image" value={this.state.image} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input onChange={this.handleChange} placeholder= "" className="form-control form-control-lg" type="textarea" id="state" name="state" value={this.state.state} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input onChange={this.handleChange} placeholder= "" className="form-control form-control-lg" type="input" id="City" name="City" value={this.state.City} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ZipCode"> zip code</label>
                    <input onChange={this.handleChange} placeholder= "" className="form-control form-control-lg" type="number" id="ZipCode" name="ZipCode" value={this.state.ZipCode} />
                  </div>
                  <button className="btn btn-primary float-right" type="submit">GO</button>
                </form>
              </div>
            </div>
          </div>
        )
    };
};

export default AddHouse;