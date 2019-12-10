import React from 'react';
import './Market.css'
import {Link} from 'react-router-dom';
const Market =(props)=>{


  let currentUser = localStorage.getItem('uid')

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
                <li>Rent price : $ {house.price}</li>
                <li> {house.Room} ' Room </li>
                <li>State of {house.state}</li>
                <li>Zip code : {house.ZipCode}</li>
                
                
                {house.owner !== currentUser ?
                <>
                <a  href ="/ " className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">+</i></a>
                </>
                :
                  <>
                <Link  to={`/edithouses/${house._id}`}><button className="btn btn-small btn-primary m-1 ">Edit</button></Link>
                <button onClick={() => props.handleDelete(house._id)} className="btn btn-small btn-danger m-1">delete</button>
                </>
                  }         
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
