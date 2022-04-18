import React from 'react'
import "../PageStyles/ProductPage.scss"
import Announcement from '../components/announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/newsletter/Newsletter'

function ProductPage() {
  return (
    <div className='prod-page-container'>
        <Navbar />
        <Announcement />
        <div className='prod-page-wrapper'>
        <div className='prod-page-img-container'>
            <img className="prod-page-img" src='https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png'></img>
        </div>
        <div className='prod-page-info'>
            <h1 className='prod-page-title'>Jacket</h1>
            <p className='prod-page-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati culpa dolorum qui pariatur iusto tempore sed consequuntur sit consequatur voluptates eos quisquam laboriosam aspernatur quidem dicta repellendus, fugiat cupiditate.</p>
            <span className='prod-page-price' > $560</span>
            <div className='prod-page-filter-container'>
                <div className="prod-page-filter">
                    <span className='pp-filtername'>Color</span>
                    <div className="pp-filtercolor"></div>
                    <div className="pp-filtercolor"></div>
                    <div className="pp-filtercolor"></div>
                </div>
                <div className="prod-page-filter">
                    <span className='pp-filtername'>Size</span>
                    <select className='pp-filtersize-select'>
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    </select>
                </div>
            </div>
            <div className='pp-addContainer'>
                <div className="amount-container">
                   
                    <i class="fa-solid fa-minus"></i>
                    
                    <span className="pp-amount">
                        1
                    </span>
                    
                    <i class="fa-solid fa-plus"></i>
                    
                </div>
                <button className='pp-addtocart'>add to cart</button>
            </div>
        </div>  
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductPage