import React from 'react'
import { BsFillCartCheckFill} from 'react-icons/bs';  
import "./Navbar.css"
function Navbar() {
  return (
    <div className='container'>
      <div className='wrapper'>
      <div className="left">
        <span className='language'>En</span>
        <div className="search-container">
          <input />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="center">
        <h1 className='logo'>COMMERSE-SHIP</h1>
      </div>
      <div className="right">
        <div className='menu-item'>Register</div>
        <div className='menu-item'>SignIn</div>
        <div className='menu-item'>
        <BsFillCartCheckFill />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar