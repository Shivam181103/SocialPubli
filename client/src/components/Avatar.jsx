import React from 'react'
import './Avatar.css'
import {GrLocation} from 'react-icons/gr'
import Button from './Button'
import Toolbar from './Toolbar'

const Avatar = () => {
  return (
   <>
   <div className="avatar-main-cont">
       <div className="avatar-main-wrap">
       <div className="avatar-main-black">
         <Toolbar/>
       </div>
       <div className="avatar-main-orange">
       <div className="avatar-icon-cont">
           <div className="avatar-image"></div>
           <p>Your Name</p>
           <p>Hey! I am on Social Publi</p>
           <p><GrLocation className='location-icon'/> City Name</p>
           <p>Tags</p>
           <div  className="avatar-button">
    <button type="button" class="btn btn-outline-primary">Photography</button>
    <button type="button" class="btn btn-outline-primary">Dance</button>
    <button type="button" class="btn btn-outline-primary">Video Making</button>
           </div>
       </div>
        </div>
       </div>
       
       <Button/>
   </div>
   </>
  )
}

export default Avatar