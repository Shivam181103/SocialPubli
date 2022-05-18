import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <>
    <div className="button-main-cont">
    <button type="button" class="btn btn-outline-primary">Connect to Youtube</button>
    <button type="button" class="btn btn-outline-primary">Connect to Instagram Account</button>
    <button type="button" class="btn btn-outline-primary">Connect to Google Analytics</button>
    <button type="button" class="btn btn-outline-primary">Connect to Facebook</button>
    </div>
    </>
  )
}

export default Button