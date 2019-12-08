import React from 'react';
import './Market.css'
const Market =(props)=>{

  const marketHouses = props.marketHouses.map((house)=>{
    return (
       
          <div key={house._id}  id="market_div">
           
          <div className="card">
          <div className="card-content">
            <div className="card-face">
              <img className="card-img"src={house.image}  alt=""/>
            </div>
            <div className="card-back">
              <ul className="ul-card">
                <li>Rent price : $ {house.price} </li>
                <li> {house.Room} ' Room </li>
                <li>State of {house.state}</li>
                <li>Zip code : {house.ZipCode}</li>
                <button className="btn btn-small btn-primary ">Edit</button>
                <a  href ="/ " class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">+</i></a>
                <button onClick={() => props.handleDelete(house._id)} className="btn btn-small btn-danger">delete</button>
                
              </ul>
            </div>
          </div>
        </div>
          </div>
     
  )
    })
    return (
      <div className = "Houses">
        <div className="row">
          {marketHouses}
        </div>

      </div>
    )
};
  

export default Market;
