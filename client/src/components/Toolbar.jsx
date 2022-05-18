import React,{useState} from 'react'
import './Toolbar.css'
import {BiMenu} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'
import {AiFillBank} from 'react-icons/ai'
import {MdOutlinePayments} from 'react-icons/md'
import {RiLogoutCircleFill} from 'react-icons/ri'
import {MdPermIdentity} from 'react-icons/md'
import {Link} from 'react-router-dom';



const Toolbar = () => {
    const[tooglebar,setToggle] = useState(false);

    
  return (

      <>
      <div className="tool-bar">
          <div onClick={()=>setToggle(!tooglebar)}  className="burger">
              <BiMenu  />
              
          </div>
      </div>
      { 
      tooglebar&&
      <div className='sidebar'>
          <li><FiEdit/>Edit Profile</li>
          <li><AiFillBank/>Bank Details</li>
          <li><MdPermIdentity/>KYC Details</li>
          <li><MdOutlinePayments/>My Payments</li>
          <li><RiLogoutCircleFill/></li>
      </div>
}
      </>
  )
}

export default Toolbar