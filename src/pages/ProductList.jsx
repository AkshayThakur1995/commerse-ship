import React from 'react'
import "../PageStyles/Productlist.scss"
import Announcement from '../components/announcement/Announcement'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/products/Products'
import Newsletter from '../components/newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

function ProductList() {
  return (
    <div className='productList-container'>
      <Navbar />
      <Announcement />
      <h1 className='pl-title'>Dresses</h1>
      <div className="product-filter-container">
        <div className="pl-filter">
          <span className='filter-text'> 
          Filter Products  <select className='filter-select'>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className='filter-select'>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          </span>
        </div>
        <div className="pl-filter">
        <span className='filter-text'>Sort Products:
        <select className='filter-select'>
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
        </span>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList