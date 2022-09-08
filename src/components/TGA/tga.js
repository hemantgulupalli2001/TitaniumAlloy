import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './tga.css';

function TGAimg() {
  return (
    <div className='outer-border'>
    <div><h2>TGA</h2></div>
    <div className='carosel'>
    <Carousel className = "sizefitCARA">
      <Carousel.Item className='marleft'>
        <img
          className="d-block w-75 sizefit"
          // https://drive.google.com/file/d/18mmKxz-dQNGpHx7TqhLpI8gpB2AKXH65/view?usp=sharing
          src="http://drive.google.com/uc?export=view&id=18mmKxz-dQNGpHx7TqhLpI8gpB2AKXH65"
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
          // https://drive.google.com/file/d/1Z5YDE8u6fkb59DQpd1zCGSqVAmRnC4vw/view?usp=sharing
          src="http://drive.google.com/uc?export=view&id=1Z5YDE8u6fkb59DQpd1zCGSqVAmRnC4vw"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

    <Carousel.Item className='marleft'>
        <img
          className="d-block w-75 sizefit"
          // https://drive.google.com/file/d/1u7u-qzXvT1u4hpiCTFzBD69X_eXKqx4l/view?usp=sharing
          src="http://drive.google.com/uc?export=view&id=1u7u-qzXvT1u4hpiCTFzBD69X_eXKqx4l"
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

export default TGAimg;