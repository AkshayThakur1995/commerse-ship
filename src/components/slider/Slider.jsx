import React, { useState } from 'react'
import { sliderItems } from '../../data'
import "./Slider.scss"

function Slider() {
    const[slideIndex, setSlideIndex] = useState(0)
const handleClick = (direction) =>{
    console.log(direction)
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        console.log(slideIndex)
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
    }
}

  return (
    <div className='slider-container'>
        <div direction="left" className='slider-arrow slider-left' onClick={() => handleClick("left")}>
        <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="slider-wrapper" >
            {sliderItems.map((item) => (
            <div className="slide-div" key={item.id} style={{background:item.bg, transform: `translateX( ${slideIndex * - 100}vw)`}}>
                <div className="slide-img-container">
                    <img src={item.img} alt="" className='slide-img' />
                </div>
                <div className="slide-info-container">
                    <h1 className="slider-title">{item.title}</h1>
                    <p className="slider-desc">{item.desc}</p>
                    <button className="slider-btn">Shop Now!</button>
                </div>
            </div>
            ))}
        </div>
        <div className='slider-arrow slider-right' onClick={() => handleClick("right")}>
        <i className="fa-solid fa-angle-right"></i>
        </div>
    </div>
  )
}

export default Slider