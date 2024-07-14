import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

function Carousel() {
    const currentSlide = useSelector((state) => state.carousel.currentCarousel);

  return (
    <div>
      
    </div>
  )
}

export default Carousel
