import React,{useState} from 'react'
import logosign from './image/png-logo.png'

const Socially = () => {

  const [user, setuser] = useState({
    instagram:"",
    blog:"",
    youtube:""
  })
  let nm, val;
  const handlechange=(e)=>{
        nm =e.target.name;
        val= e.target.value;
      
      setuser({
          ...user ,[nm]:val
       })
      
     
  }
  return (
    <div className="sign-wrapper">
        <div className="signup-logo-cont"><img className='signup-logo' src={logosign} alt="" /></div>
        <div className="social-form-cont">
        <input onChange={handlechange} type="text"  name='instagram' placeholder='@instagram Handle*' required />
                <input onChange={handlechange}  type="email" name='blog' placeholder='Blog(Optional)'  />
                <input onChange={handlechange} type="password" name='Youtube' placeholder='Youtube(Optional)' required />
        </div>
    </div>
  )
}

export default Socially