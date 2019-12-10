import React from 'react';
import '../Gallery/Gallery.css'
import Gallery1 from './gallery_1.jpg' 
import Gallery2 from './gallery_2.jpg' 
import Gallery3 from './gallery_3.jpg' 
import Gallery4 from './gallery_4.jpg' 
import Gallery5 from './gallery_5.jpg' 
import Gallery6 from './gallery_6.jpg' 


const Gallery = ()=>{
  return (
    <section id="gallery">
      <div className="wrap">
        <h2>Issue Twenty</h2>
        <h3>A visual guide to the Southwest</h3>
            <div className="masonry">
              <img className="Gallery-image" src={Gallery1} alt=""/>
              <img className="Gallery-image" src={Gallery3} alt=""/>
              <img className="Gallery-image" src={Gallery4 } alt=""/>
              <img className="Gallery-image" src={Gallery2 } alt=""/>
              <img className="Gallery-image" src={Gallery5} alt=""/>
              <img className="Gallery-image" src={Gallery6} alt=""/>
          </div>
      </div>
	  </section>


  );
};
export default Gallery;