import React from 'react'
import "../PageStyles/Login.scss"
function Login() {
  return (
    <div className='login-container'>
        <div className="login-wrapper">
            <h1 className='login-title'> Sign in</h1>
            <form className='login-form'>
                <input placeholder='username' />
                <input placeholder='password' />
                <button className='login-button'>Login</button>
                <a className='login-link'>Forgot password</a>
                <a className='login-link'>Create a new account</a>
            </form>
        </div>
        
    </div>
  )
}

export default Login