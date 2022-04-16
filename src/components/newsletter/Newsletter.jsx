import React from 'react'
import "./Newsletter.scss"
function Newsletter() {
  return (
    <div className='news-container'>
        <h1 className='news-title'>Newsletter</h1>
        <div className='news-desc'>Get timely updates from your favorite products</div>
        <div className="news-input-container">
            <input placeholder='Your email' className='news-input'/>
            <button className='news-btn'>
            <i class="fa-solid fa-paper-plane fa-lg"></i>
            </button>
        </div>
    </div>
  )
}

export default Newsletter