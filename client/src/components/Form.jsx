import React, {useState} from 'react'
import Sign from '../Sign';
import Influence from './Influence';
import Socially from './Socially';
import Verify from './Verify';


const Form = () => {

    const [page , setPage] = useState(0);

    const Formtitles = ["Signup" , "Let's Verify You", "Area of Influence" , "Let's Connect Socially"]

    const Pagedisplay = () => {
        if (page === 0 ){
            return <Sign/>
        }else if (page === 1) {
            return <Verify/>
        }else if (page === 2) {
            return <Influence/>
        }else {
            return <Socially/>
        }
    }

  return (
    <div className="form-green">
        <div className="progressbar"></div>
        <div className="form-header" style={{textAlign:"center", padding:"2rem 0 0", color:"#f8971d"}} >
            <h1>{Formtitles[page]}</h1>
        </div>
        <div className="form-body">{Pagedisplay()}</div>
        <div className="form-footer" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <button 

            style={{border:"none", outline:"none" , backgroundColor:"orange", color:"white", width:"5rem", height:"2rem", margin:"2rem"}}
            disabled = {page === 0}
            onClick={() => {setPage((currPage) => currPage - 1);
            
            }}  >Prev</button>
            <button
             style={{border:"none", outline:"none" , backgroundColor:"orange", color:"white", width:"5rem", height:"2rem", margin:"2rem"}}
            disabled = {page === Formtitles.length - 1}
            onClick={() => {setPage((currPage) => currPage + 1);
            
            }} 
            >Next</button>
        </div>
    </div>
  )
}

export default Form