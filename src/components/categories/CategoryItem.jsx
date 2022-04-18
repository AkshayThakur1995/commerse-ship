import React from 'react'
import "./CategoryItem.scss"
function CategoryItem({item}) {
  return (
    <div className='cat-item-container'>
        <img src={item.img} className="cat-item-image"></img>
        <div className="cat-item-info">
            <h1 className="cat-item-title">{item.title}</h1>
            <button className="cat-item-btn">Shop Now</button>
        </div>
    </div>
  )
}

export default CategoryItem