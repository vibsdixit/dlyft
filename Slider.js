import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
const Slider = () => {
  return (
    <div>
    <MDBCarousel showControls dealy={3000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://lucifirebikes.com/wp-content/uploads/2023/03/1-_1_.webp'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://lucifirebikes.com/wp-content/uploads/2023/03/UPDATE.webp'
        alt='...'
      />
     
    </MDBCarousel>
    </div>
  )
}

export default Slider
