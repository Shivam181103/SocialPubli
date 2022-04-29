import React,{useState} from 'react'
import './login.css'
import logosign from './components/image/png-logo.png'
import {NavLink, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setloginUser] = useState({
     email:"",
     password:""
  })
  let name,val;
  const handleloginchange=(e)=>{
    name=e.target.name;
    val= e.target.value;
       setloginUser({
         ...loginUser,[name]:val
       })
       console.log(loginUser);
  }
  const submitLoginData=async(event) => {
    event.preventDefault();
    const {
    
    email,
    
    password 
    } = loginUser ;
   const res =  await fetch(
      "/login",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({ 
            
            email,
            
            password 
        }),
      }
      );
      const data = await res.json()
      console.log(res.status)
      if(res.status === 422 || !data) {
        window.alert('SOmething missing'  )
        

      }else  if(res.status === 400 || !data) {
        
        window.alert( "Invalid Credential"  )
      }else {
        window.alert("Login Successsfully" )
        navigate('/')
      }
  };
  return (
    <div className='login-wrapper'>
    <div className="login-logo-cont"><img className='login-logo' src={logosign} alt="" /></div>  
  <div className="login-form-cont">
      <form   onSubmit={submitLoginData} className='login-form'  >
          <input onChange={handleloginchange} value={loginUser.email} name='email' type="email" placeholder='Email' required    />
          <input onChange={handleloginchange} value={loginUser.password} name='password' type="password" placeholder='Password' required /> 
           <div>
          <button className='next-button' type="submit">Login</button>
          </div>
      </form>
  </div>
</div> 
  )
}

export default Login