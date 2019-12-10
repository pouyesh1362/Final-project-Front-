import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';



class EditHouse extends Component {

  
  state = {
    image: this.props.match.params.image,
    price: this.props.match.params.price,
    Room: this.props.match.params.Room,
    state: this.props.match.params.state,
    City: this.props.match.params.City,
    ZipCode: this.props.match.params.ZipCode,
  };
  
  componentDidMount (){
    const houseId = this.props.match.params.id;
    
    axios.get(`${process.env.REACT_APP_API_URL}/houses/${houseId}`, {
        withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      this.setState({House: res.data.data});
  })
  .catch((err) => console.log(err))
};

  handleChange = (event) => {
    
      this.setState({
          
          [event.target.name]: event.target.value
          
      });
    
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const houseId = this.props.match.params.id;
    let newObj = Object.assign({}, this.state);
    console.log(newObj);
    axios.put(`${process.env.REACT_APP_API_URL}/houses/update/${houseId}`, newObj, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res)
        this.props.history.push('/market');
      })
      .catch((err) => console.log(err));
  }

  
  render() {
    // Vanilla JS method for getting URL information
    // const houseId = window.location.pathname.split('/')[2];
    return (
      <div className="container mt-4">
      <h5>Edit House Info</h5>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="Price">Pirce</label>
                <input onChange={this.handleChange} placeholder= " " className="form-control form-control-lg" type="number" id="price" name="price" value={this.state.price} />
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
             <button className="btn btn-primary float-right" type="submit" >Update</button>
            </form>
          </div>
        </div>
      </div>
    )
};
};

export default withRouter(EditHouse);
