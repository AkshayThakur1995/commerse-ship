import React from 'react'
import "./Products.css"
import {popularProducts} from "../../data"
import Product from '../singleproduct/Product'
function Products() {
  return (
    <div className='products-container'>
        {popularProducts.map((product) => (
            <Product item={product} key={product.id}/>
        ))}
    </div>
  )
}

export default Products