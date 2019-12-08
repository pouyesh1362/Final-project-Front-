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
        })
            .then((res) => {
                console.log(res);
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
                    <label htmlFor="Price"></label>
                    <input onChange={this.handleChange} placeholder= "Price" className="form-control form-control-lg" type="number" id="price" name="price" value={this.state.price} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Room"></label>
                    <input onChange={this.handleChange} placeholder= "Room" className="form-control form-control-lg" type="number" id="Room" name="Room" value={this.state.Room} />
                  </div>



                  <div className="custom-file">
                    <input type="file" className="custom-file-input" aria-describedby="inputGroupFileAddon03" id="image" name="image" value={this.state.image} />
                    <label className="custom-file-label" for="inputGroupFile03">Choose file</label>
                  </div>




                  <div className="form-group">
                    <label htmlFor="state"></label>
                    <input onChange={this.handleChange} placeholder= "State" className="form-control form-control-lg" type="textarea" id="state" name="state" value={this.state.state} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City"></label>
                    <input onChange={this.handleChange} placeholder= "City" className="form-control form-control-lg" type="input" id="City" name="City" value={this.state.City} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ZipCode"></label>
                    <input onChange={this.handleChange} placeholder= "Zip Code" className="form-control form-control-lg" type="number" id="ZipCode" name="ZipCode" value={this.state.ZipCode} />
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