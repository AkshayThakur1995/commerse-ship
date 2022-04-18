import React from 'react'
import Announcement from '../components/announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'
import "../PageStyles/cart.scss"

function Cart() {
  return (
    <div className='cart-container'>
        <Navbar />
        <Announcement />
        <div className="cart-wrapper">
            <h1 className='cart-title'>YOUR BAG</h1>
            <div className="cart-top">
                <button className='cart-topbtn'>CONTINUE SHOPPING</button>
                <div className='cart-toptexts'>
                    <span className='cart-toptext'>Shopping bad</span>
                    <span className='cart-toptext'>Wishlist</span>
                </div>
                <button className='cart-topbtn'>CHECKOUT NOW</button>
            </div>
            <div className="cart-bottom">
                <div className="cart-info">
                    <div className="cart-product">
                        <div className="cart-product-detail">
                            <img className='cart-prod-image' src="https://media.istockphoto.com/photos/blue-tshirt-isolated-on-white-background-picture-id1311574382?b=1&k=20&m=1311574382&s=170667a&w=0&h=kVku9cBCMOlJouTGTuddGeRW3cB6U2_TGonHgGl5ABE=" alt="" srcset="" />
                            <div className="cart-details">
                                <span className='cd-name'><b>Product:</b> T-shirt </span>
                                <span className='cd-id'><b>Id</b> 123456789</span>
                                <div className='cd-colors'>
                                
                                </div>
                                
                                <span className='cd-size'>size: 37.5</span>
                            </div>
                        </div>
                            <div className="cart-price-details">
                                    <div className="cart-amount-container">
                                    <i class="fa-solid fa-plus"></i>
                                    <div className='cart-prod-amount'>2</div>
                                    <i class="fa-solid fa-minus"></i>
                                    </div>
                                    <div className='cart-prod-price '>$500</div>
                            </div>
                    </div>
                    <hr></hr>
                </div>
                <div className="cart-summary">
                    <h1 className="sum-title">Order</h1>
                    <div className="sum-item">
                        <span className="sum-item-text">Sub Total</span>
                        <span className="sum-item-price"> $80 </span>
                    </div>
                    <div className="sum-item">
                        <span className="sum-item-text">Shipping</span>
                        <span className="sum-item-price"> $5 </span>
                    </div>
                    <div className="sum-item">
                        <span className="sum-item-text">Shipping discount</span>
                        <span className="sum-item-price"> $3 </span>
                    </div>
                    <div className="sum-item">
                        <span className="sum-item-text total">Total</span>
                        <span className="sum-item-price total"> $82 </span>
                    </div>
                    <button className='sum-btm'>Checkout</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart