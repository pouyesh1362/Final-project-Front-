import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';


let currentUser = localStorage.getItem('uid');
class RenterUpdate extends Component{


  state = {
    image: this.props.match.params.image,
    price: this.props.match.params.price,
    Room: this.props.match.params.Room,
    state: this.props.match.params.state,
    City: this.props.match.params.City,
    ZipCode: this.props.match.params.ZipCode,
    renter: currentUser,
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

  return(
    <>
      <h1> hello</h1>
    </>
  )
}
}

export default withRouter(RenterUpdate);