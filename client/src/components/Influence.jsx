import React,{useEffect, useState} from 'react'
import logosign from './image/png-logo.png'
import './Common.css'
const Influence = () => {
  console.log(JSON.parse(localStorage.getItem('userData')))
  const [userData, setuserData] = useState(JSON.parse(localStorage.getItem('userData')))
  
 
  let nm, val;
  const handlechange=(e)=>{
        nm =e.target.name;
        val= e.target.value;
        if(e.target.checked == true){
        setuserData({
           ...userData,  Genre:{ ...userData.Genre , [nm]:val}
       })
      }
      else{
        setuserData({
          ...userData,  Genre:{ ...userData.Genre , [nm]:""}
      })
      }
      
     
  }
  
  
    
   useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData)) 
         
   }, [userData])
  // useEffect 
  return (
    <div className="influence-wrapper">
        <div className="signup-logo-cont"><img className='signup-logo' src={logosign} alt="" /></div>
        <div className="tags-form-cont">
        <div class="form-check form-check-inline">
  <input onChange={handlechange} name="beauty" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="beauty"/>
  <label class="form-check-label" for="inlineCheckbox1">Beauty</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="fashion" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="fashion"/>
  <label class="form-check-label" for="inlineCheckbox2">Fashion</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="tech" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="tech" />
  <label class="form-check-label" for="inlineCheckbox3">Tech</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="lifestyle" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="lifestyle"/>
  <label class="form-check-label" for="inlineCheckbox1">Lifestyle</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="food" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="food"/>
  <label class="form-check-label" for="inlineCheckbox2">Food</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="travel" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="travel" />
  <label class="form-check-label" for="inlineCheckbox3">Travel</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="fitness" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="fitness"/>
  <label class="form-check-label" for="inlineCheckbox1">Fitness</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="wedding" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="wedding"/>
  <label class="form-check-label" for="inlineCheckbox2">Wedding</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="entertainment" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="entertainment" />
  <label class="form-check-label" for="inlineCheckbox3">Entertainment</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="decor" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="decor" />
  <label class="form-check-label" for="inlineCheckbox3">Decor</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="parenting" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="parenting" />
  <label class="form-check-label" for="inlineCheckbox3">Parenting</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="photography" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="photography" />
  <label class="form-check-label" for="inlineCheckbox3">Photography</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="design" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="design" />
  <label class="form-check-label" for="inlineCheckbox3">Design</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="culture" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="culture" />
  <label class="form-check-label" for="inlineCheckbox3">Culture</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="sports" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="sports" />
  <label class="form-check-label" for="inlineCheckbox3">Sports</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="luxury" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="luxury" />
  <label class="form-check-label" for="inlineCheckbox3">Luxury</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="repost" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="repost" />
  <label class="form-check-label" for="inlineCheckbox3">Repost</label>
</div>
<div class="form-check form-check-inline">
  <input onChange={handlechange} name="diy" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="diy" />
  <label class="form-check-label" for="inlineCheckbox3">DIY</label>
</div>

        </div>
    </div>
  )
}

export default Influence