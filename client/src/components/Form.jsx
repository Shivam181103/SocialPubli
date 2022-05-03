import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sign from '../Sign';
import Influence from './Influence';
import Socially from './Socially';
import Verify from './Verify';



const Form = () => {

    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const Formtitles = ["Signup", "Let's Verify You", "Area of Influence", "Let's Connect Socially"]

    const Pagedisplay = () => {
        if (page === 0) {
            return <Sign />
        } else if (page === 1) {
            return <Verify />
        } else if (page === 2) {
            return <Influence />
        } else {
            return <Socially />
        }
    }
    console.log( typeof userData)
    const signinData = async(event) => {
        
        const userData = JSON.parse(localStorage.getItem("userData"))

        event.preventDefault();
        const {
            name,
            email,
            referral,
            city,
            dob,
            gender,
            password,
            cpassword,
            mobileNumber,
            Genre: {
              beauty,
              fashion,
              tech,
              lifestyle,
              food,
              travel,
              fitness,
              wedding,
              entertainment,
              decor,
              parenting,
              photography,
              design,
              culture,
              sports,
              luxury,
              repost,
              diy
            },
            instagram,
            youtube,
            blog
        } = userData ;
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
    cpassword,
    mobileNumber,
    Genre: {
      beauty,
      fashion,
      tech,
      lifestyle,
      food,
      travel,
      fitness,
      wedding,
      entertainment,
      decor,
      parenting,
      photography,
      design,
      culture,
      sports,
      luxury,
      repost,
      diy
    },
    instagram,
    youtube,
    blog
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
        <div className="form-green">
            <div className="progressbar"></div>
            <div className="form-header" style={{ textAlign: "center", padding: "2rem 0 0", color: "#f8971d" }} >
                <h1>{Formtitles[page]}</h1>
            </div>
            <div className="form-body">{Pagedisplay()}</div>
            <div className="form-footer" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  {
                      page != 0 &&
                        <button
                        style={{ border: "none", outline: "none", backgroundColor: "orange", color: "white", width: "5rem", height: "2rem", margin: "2rem" }}
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);

                        }}  >Prev</button>
                  }
                 
                {
                    page != Formtitles.length - 1 &&
                    <button
                        style={{ border: "none", outline: "none", backgroundColor: "orange", color: "white", width: "5rem", height: "2rem", margin: "2rem" }}

                        onClick={() => {
                            setPage((currPage) => currPage + 1);

                        }}
                    >Next</button>
                }

                {
                    page === Formtitles.length - 1 &&
                    <button
                    onClick={signinData}
                        style={{ border: "none", outline: "none", backgroundColor: "orange", color: "white", width: "5rem", height: "2rem", margin: "2rem" }}
                        className='submit-data bg-success' type='submit'>Submit</button>
                }
            </div>
        </div>
    )
}

export default Form