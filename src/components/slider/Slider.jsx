import React from 'react'
import "./Slider.css"
function Slider() {
  return (
    <div className='slider-container'>
        <div className='slider-arrow slider-left'>
        <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className='slider-arrow slider-right'>
        <i className="fa-solid fa-angle-right"></i>
        </div>
    </div>
  )
}

export default Slider