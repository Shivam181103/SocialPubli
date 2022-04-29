import React,{useState  }from 'react'
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
 cpassword:""
})
let nm, val;
const handlechange=(e)=>{
      nm =e.target.name;
      val= e.target.value;
    
    setuser({
        ...user ,[nm]:val
     })
    
   
}

const signinData = async(event) => {
    event.preventDefault();
    const {
    name,
    email,
    referral,
    city,
    dob,
    gender,
    password,
    cpassword
    } = user ;
   const res =  await fetch(
      "/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
            name,
            email,
            referral,
            city,
            dob,
            gender,
            password,
            cpassword
        }),
      }
      );
      const data = await res.json()
      console.log(res.status)
      if(res.status === 422 || !data) {
        window.alert(JSON.parse(JSON.stringify(data)).error  )
      }else  {
        window.alert(JSON.parse(JSON.stringify(data)).message  )
        navigate('/')
      }
  };

  return (
    <div className='sign-wrapper'>
          <div className="signup-logo-cont"><img className='signup-logo' src={logosign} alt="" /></div>  
        <div className="signup-form-cont">
            <form onSubmit={signinData}  className='sign-up-form'  >
                <input onChange={handlechange} type="text"  name='name' placeholder='Full Name' required />
                <input onChange={handlechange} type="email" name='email' placeholder='Email' required />
                <input onChange={handlechange} type="password" name='referral' placeholder='Referral code' required />
                <input onChange={handlechange} type="text" name="city" id="city" placeholder='Current City'  />
                <input onChange={handlechange} type="date" name="dob" id="dob" placeholder='Date of Birth' required />
                <input onChange={handlechange} type="gender" name='gender' placeholder='Gender' required />
                <input onChange={handlechange} type="password" name='password' placeholder='password' required /> 
                <input onChange={handlechange} type="password" name='cpassword' placeholder='confirm password' required /> 
                 <div>
                <button className='next-button' type="submit">Next</button>
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