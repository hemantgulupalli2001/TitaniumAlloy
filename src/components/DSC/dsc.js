import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './dsc.css';

function DSCimg() {
  return (
    <div className='outer-border'>
    <div><h2>DSC</h2></div>
    <div className='carosel'>
    <Carousel className = "sizefitCARA">
      <Carousel.Item className='marleft'>
        <img
          className="d-block w-75 sizefit"
          src="http://drive.google.com/uc?export=view&id=1NDNZi0gfdqE4ji1VfyoXKmbXvzQ4IXRP"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='marleft'>
        <img
          className="d-block w-75 sizefit"
          src="http://drive.google.com/uc?export=view&id=1mqfFJU1kBej7DoqEQGJ1hCyldtguCy1u"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
     
 
    </div>
    </div>
  );
}

export default DSCimg;


