import React from 'react'
import "../PageStyles/Register.scss"

function Register() {
  return (
    <div className='reg-container'>
        <div className="reg-wrapper">
            <h1 className='reg-title'>Create an account</h1>
            <form className='reg-form'>
                <input placeholder='name' />
                <input placeholder='last name' />
                <input placeholder='username' />
                <input placeholder='email' />
                <input placeholder='password' />
                <input placeholder='confirm password' />
                <span className='reg-aggre'>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>

                </span>
                <button className='reg-button'>register</button>
            </form>
        </div>
        
    </div>
  )
}

export default Register