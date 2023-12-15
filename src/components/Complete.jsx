import React from 'react'
import Footer from './Footer'
import {Link} from "react-router-dom"

function Complete() {
  const localdata =JSON.parse(localStorage.getItem('user'));
console.log(localdata,'data');

  return (
    <div style={{position:"relative"}}>
    <nav className="navbar">
      <img src="../img/image 1.png" alt="" />
      <div className="navdivo">
        <img src={localdata?.Image} alt="" className="imagee"/>
          <p>{localdata.basicinfo?.firstname} {localdata.basicinfo?.lastname}</p>{" "}
      </div>
    </nav>

    {/* --------------------------------------baisc info div */}
    <div className="basic">
      <div className="basic2">
        <h1>Step 3: Complete Your Profile</h1>
        <p>
        Let’s get you noticed!Work ecperience will increase your chances of landing that next job
        </p>
      </div>
    </div>

    {/* ----------------------formmmm */}
    <div className="basicform formm">
      <img src="../img/Stepper (3).png" alt="" className="step1" />
      <div className="gr already grrrr">
        {" "}
       <div> <p htmlFor="">I already have a CV</p>
       <Link to="">
        <button className="buttongr nextbutton upload">Upload File</button></Link>
        </div>
       <div> <p htmlFor="">Create Profile from Scratch</p>
<Link to="/review">
        <button className="buttongr nextbutton continue">Continue</button>
        </Link>
        </div>
      </div>   



<Link to="/experience">
      <button className="buttongr gr2 prevbutton prev">Previous</button> </Link>
        </div>
<img src="../img/group.png" alt="" className="group"/>
  <Footer/>
  </div>
    
  )
}

export default Complete
