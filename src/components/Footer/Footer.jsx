import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='foot-container'>
        <div className="foot-left">
            <h1 className='foot-logo'>CS</h1>
            <p className='foot-desc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates iste fuga animi reprehenderit nulla soluta suscipit est reiciendis at, aspernatur placeat ut in magnam sapiente. Sapiente dolores deserunt, excepturi quam dignissimos suscipit blanditiis facere modi dolorem minima quo fuga tempore placeat iusto ex tempora? Illum magni repellat nobis provident tenetur.
            </p>
            <div className='social-cont'>
                <div className='social-icon fb'>
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className='social-icon insta'>
                <i class="fa-brands fa-instagram"></i>
                </div>
                <div className='social-icon tweet'>
                <i class="fa-brands fa-twitter"></i>
                </div>
                <div className='social-icon dis'>
                <i class="fa-brands fa-discord"></i>
                </div>
            </div>
        </div>
        <div className="foot-center">
            <h3 className='foot-center-title'>Useful links</h3>
            <ul className='foot-links'>
                <li className='foot-link'>Home</li>
                <li className='foot-link'>Cart</li>
                <li className='foot-link'>Man Fashion</li>
                <li className='foot-link'>Woman Fashion</li>
                <li className='foot-link'>Accessories</li>
                <li className='foot-link'>My Account</li>
                <li className='foot-link'>Order Tracking</li>
                <li className='foot-link'>Wishlist</li>
                <li className='foot-link'>Terms</li>
            </ul>
        </div>
        <div className="foot-right">
            <h3 className="foot-right-title">Contact</h3>
            <div className='contact-item'>
            <i class="fa-solid fa-location-dot"></i>
            23-Green street USA
            </div>
            <div className='contact-item'>
            <i class="fa-solid fa-mobile-screen-button"></i>
             9312245782
            </div>
            <div className='contact-item'>
            <i class="fa-solid fa-envelope"></i>
            akshay@gmail.com
            </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
    </div>
  )
}

export default Footer