import React, { Component } from 'react';
import Market from '../../components/Market/Market';
import axios from 'axios';

class Marketcontainer extends Component {
  
  state= {
    marketHouses : []
  }

  componentDidMount (){
    
        axios.get(`${process.env.REACT_APP_API_URL}/houses`, {
            withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          this.setState({marketHouses: res.data.data});
      })
      .catch((err) => console.log(err))
  };

  handleDelete = (id) => {
    
    axios.delete(`${process.env.REACT_APP_API_URL}/houses/delete/${id}`)
      .then((res) => {
        console.log(res);
        const filteredHouse = [...this.state.marketHouses].filter((house) => {
          return house._id !== id;
        });
        this.setState({ marketHouses: filteredHouse });
      })
      .catch((err) => console.log(err));
  };


  render() {
    return (
    <Market marketHouses={this.state.marketHouses} handleDelete={this.handleDelete}/>
    
    );
};
}

export default Marketcontainer;