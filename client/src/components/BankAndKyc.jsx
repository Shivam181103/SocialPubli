import React from "react";
import "./BankAndKyc.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";

const BankAndKyc = () => {
  return (
    <>
      <div className="bank-main-cont">
        <div className="bank-first-main-cont">
          <p className="bank-personal">
            <BsFillPersonFill className="bank-personal-icon" />
            Personal Information
          </p>
          <h6>Name</h6>
          <p>Random data coming from signup details</p>
          <h6>Permanent Address</h6>
          <input type="text" name="address" />
          <h6>Pincode</h6>
          <input type="text" />
          <h6>City</h6>
          <input type="text" />
          <h6>Country</h6>
          <input type="text" />
          <h6>Pan Card Number</h6>
          <input type="text" />
          <br />
          <input type="checkbox" />
          <label>Service Tax Applicable</label>
          <br />
          <input type="checkbox" />
          <label>Are You Registered With Gst?</label>
        </div>
        <div className="bank-second-main-cont">
          <hr />
          <div className="bank-first-main-cont">
            <p className="bank-personal">
              <AiFillBank className="bank-personal-icon" />
              Bank Information
            </p>
            <h6>Account Holder Name</h6>
            <input type="text" />
            <h6>Bank Name</h6>
            <input type="text" />
            <h6>Account Type</h6>
            <select name="accountype" id="accountype">
        <option value="Savings">Savings</option>
        <option value="Current" selected>Current</option>
    </select>
            <h6>Acoount No</h6>
            <input type="text" />
            <h6>Ifsc Code</h6>
            <input type="text" />
            <br />
            <input required type="checkbox" />
            <label>I Agree To The Terms & Conditions</label>
            <br />
          </div>
          <hr />
        </div>
        <div className="bank-third-main-cont">
            <div className="bank-row row" style={{margin:'0'}}>
                <div className="bank-col-first col col-lg-4 col-md-12 col-sm-12">
                    <h5 className="verify">Verify Identity <i class="fa-solid fa-asterisk"></i></h5>
            <select name="identitytype" id="identityype">
        <option value="Voter Id Card">Voter Id Card</option>
        <option value="Aadhar Card" selected>Aadhar Card</option>
        <option value="Driving License">Driving License</option>
        <option value="Passport">Passport</option>
    </select>
    <form action="/action_page.php">
  <input type="file" id="myFile" name="filename"/>
  <label>Allowed image types: jpg, jpeg, png, pdf
Uploaded File:</label>
  <input type="submit"/>
</form>
                </div>
                <div className="bank-col-second col col-lg-4 col-md-12 col-sm-12">
                <h5 className="verify">Verify Bank Account <i class="fa-solid fa-asterisk"></i></h5>
            <select name="identitytype" id="identityype">
        <option value="Aadhar Card" selected>Cancelled Cheque</option>
        <option value="Driving License">Passbook</option>
    </select>
    <form action="/action_page.php">
  <input type="file" id="myFile" name="filename"/>
  <label>Allowed image types: jpg, jpeg, png, pdf
Uploaded File:</label>
  <input type="submit"/>
</form>
                </div>
                <div className="bank-col-third col col-lg-4 col-md-12 col-sm-12">
                <h5 className="verify">Verify PAN Card</h5>
    <form action="/action_page.php">
  <input type="file" id="myFile" name="filename"/>
  <label>Allowed image types: jpg, jpeg, png, pdf
Uploaded File:</label>
  <input type="submit"/>
</form>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default BankAndKyc;
