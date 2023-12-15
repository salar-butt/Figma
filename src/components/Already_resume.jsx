import React from "react";
import Footer from './Footer'

function Already_resume() {

const user=JSON.parse(localStorage.getItem("user"));
  return (
    <div style={{ position: "relative" }}>
    <nav className="navbar">
      <img src="../img/image 1.png" alt="" />
      <div className="navdivo">
      <img src={user.Image} alt="" className="imagee"/>
          <p>{user.basicinfo.firstname} {user.basicinfo.lastname}</p>{" "}
      </div>
    </nav>

 

    {/* ----------------------formmmm */}
    <div className="basicform wadeform form3">

      <div className="alreadyhave">

          <div className="wadewarren">
              
              <img src="../img/avatar (2).png" alt=""  className="wadeimg"/>
              <p className="wadep">Wade Warren</p>
              <p className="wadepp">Font-end Developer</p>
              <div className="iconidiv">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-tiktok"></i>
              </div>
              <hr className="hrr"/>
              <div className="infodiv1"><i class="fa-solid fa-user"></i><p>Basic Information</p>
              <h4 className="bluee">Edit</h4></div>
              <div className=" infodiv1 infodiv2"><i class="fa-solid fa-envelope"></i><p>Credentials</p>
              <button className="bluee" >Edit</button>
              </div>
              <div className=" infodiv1 infodiv3">
                <div className="onee"><i class="fa-solid fa-link"></i><p>Public Link</p>
              <button className="bluee" >Edit</button>
              </div>
              <div className="two"><p><a href='http://localhost:3000/basic'>https://website.com/profile/</a></p>
              <p><i class="fa-brands fa-facebook-f"></i>Share on Facebook</p></div></div>

              <div className=" infodiv1 infodiv4"><i class="fa-solid fa-hat-cowboy"></i><p>Education</p>
              <button className="bluee" >Add</button>
              </div>
              <div className=" infodiv1 infodiv5"><i class="fa-solid fa-check"></i><p>Industry</p>
              <button className="bluee">Add</button>
              </div>
              <div className=" infodiv1 infodiv6"><i class="fa-solid fa-award"></i><p>Awards</p>
              <button className="bluee" >Add</button>
              </div>
          </div>




          <div className="resume">
              <div className="alreadyy">
                <h1>Already Have A Account</h1>
              <button className="button gr4">Upload File</button>
              </div>
              <div className="summary">
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Summary</h3>
                <button  style={{color:"blue"}}  >Edit</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Work History</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Project</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Certification</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Skills</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Preferred Job City</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Hobbies/Activities</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Languages</h3>
                <button  style={{color:"blue"}} >Add</button>
                </div>
                <div className="editt">
                <h3> <i class="fa-solid fa-book"></i> Refrences</h3>
                <button  style={{color:"blue"}}>Add</button>
                </div>
              </div>
          </div>


          <div className="profilestrength">
            <h2><i class="fa-solid fa-user"></i>  Profile Strength</h2>
            <img src="../img/chart.png" alt="" />
            <button className="gr6">Download CV</button>
          </div>
      </div>
      
    </div>

   
    <img src="../img/group.png" alt="" className="group" />
<Footer/>
  </div>
  )
}

export default Already_resume
