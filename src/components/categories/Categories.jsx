import React from 'react'
import "./Categories.scss"
import {categories} from "../../data"
import CategoryItem from './CategoryItem'
function Categories() {
  return (
    <div className='cat-container'>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories