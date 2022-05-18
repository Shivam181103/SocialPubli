import React from 'react'
import './Editprofilepage.css'
import {MdUpload} from 'react-icons/md'

const Editprofilepage = () => {
  return (
      <div className="editprofile-main-cont">
          <div className="editprofile-first-cont">
              <div className="icon-image"></div>
              <h4>Edit Profile<MdUpload/></h4>
          </div>

          <div className="editprofile-second-cont">
             <h5>Name</h5> 
             <p>Shubham Gupta</p>
             <h5>Username</h5> 
             <p>gshubham</p>
             <h5>Email</h5> 
             <p>shubham@gmail.com</p>
             <h5>Phone No.</h5> 
             <p>1234567890</p>
          </div>

          <div className="editprofile-third-cont">
              <h5>Bio</h5>
              <textarea  name="comment" form="usrform">  
Enter text here...</textarea>  
              <div class="input-container">
              <h5>Date Of Birth</h5>
              <input type="date"  id="birthday" name="birthday"/>
              </div>
              <h5>Location</h5>
              <select name="accountype" id="location">
        <option value="Savings">Savings</option>
        <option value="Current" selected>Current</option>
    </select>
          </div>

          <div className="editprofile-fourth-cont">
              <h5>Paytm</h5>
              <input type="checkbox" />
             <label>I use the same number as above for my Paytm Wallet</label>
              <h5>Your Paytm Number</h5>
              <input type="number" min="0"/>
              <p><i class="fa-solid fa-check"></i>
This enables us to maintain that money flows smoothly into your Paytm account
</p>
          </div>
          <div className="editprofile-fifth-cont">
          <button type="button" class="btn btn-secondary update-profile">Update Profile</button>
          </div>
      </div>
  )
}

export default Editprofilepage