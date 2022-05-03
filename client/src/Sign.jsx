import React,{useState ,useEffect }from 'react'
import './Sign.css'
import {  useNavigate} from 'react-router-dom'
import logosign from './components/image/png-logo.png'
const Sign = () => {
   // const history = useHistory();
   const navigate = useNavigate();
const [user, setuser] = useState({
  name:"",
  email:"",
  referral:"",
  city:"",
  dob:"",
  gender:"",
  password:"",
  cpassword:"",
  mobileNumber:"",
  Genre:{
    beauty:"",
    fashion:"",
    tech:"",
    lifestyle:"",
    food:"",
    travel:"",
    fitness:"",
    wedding:"",
    entertainment:"",
    decor:"",
    parenting:"",
    photography:"",
    design:"",
    culture:"",
    sports:"",
    luxury:"",
    repost:"",
    diy:""
  },
  instagram:"",
  youtube:"",
  blog:""

})
let nm, val;
const handlechange=(e)=>{
      nm =e.target.name;
      val= e.target.value;
    
    setuser({
        ...user ,[nm]:val
     })
    
   
}


  
 useEffect(() => {
      localStorage.setItem("userData", JSON.stringify(user)) 
       
 }, [user])
 

  return (
    <div className='sign-wrapper'>
          <div className="signup-logo-cont"><img className='signup-logo' src={logosign} alt="" /></div>  
        <div className="signup-form-cont">
            <form className='sign-up-form'  >
                <input onChange={handlechange} value={user.name} type="text"  name='name' placeholder='Full Name' required />
                <input onChange={handlechange} value={user.email} type="email" name='email' placeholder='Email' required />
                <input onChange={handlechange} value={user.referral} type="password" name='referral' placeholder='Referral code'  />
                <input onChange={handlechange} value={user.city} type="text" name="city" id="city" placeholder='Current City'  />
                <input onChange={handlechange} value={user.dob} type="date" name="dob" id="dob" placeholder='Date of Birth' required />
                <input onChange={handlechange} value={user.gender} type="gender" name='gender' placeholder='Gender' required />
                <input onChange={handlechange} value={user.password} type="password" name='password' placeholder='password' required /> 
                <input onChange={handlechange} value={user.cpassword} type="password" name='cpassword' placeholder='confirm password' required /> 
                 <div>
                {/* <button className='next-button' value={user.Genre} type="submit">Next</button> */}
                </div>
                <div className="line-break">

                </div>
 
                 
            </form>
                <button className='already-have-account'> Already Have An Account?</button>
        </div>
    </div>
  )
}

export default Sign 