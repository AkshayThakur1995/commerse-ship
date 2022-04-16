import React from 'react'
import "./Product.scss"

function Product({item}) {
  return (
    <div className='prod-container'>
        <div className="prod-circle"></div>
        <img src={item.img} alt="" className='prod-img' />
        <div className="prod-info">
            <div className="prod-icon">
                 <i class="fa-solid fa-cart-arrow-down fa-lg"></i>
            </div>
            <div className="prod-icon">
            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>
            <div className="prod-icon">
            <i class="fa-solid fa-heart fa-lg"></i>
            </div>
        </div>
    </div>
  )
}

export default Product