import React, {useEffect, useState} from 'react'
import Footer from './Footer'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Popup from './Popup';
import { singleuserdata } from '../Action/Action';
import CircularProgressBar from './Circle';

function Review() {
  const user=JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const {singleuser}= useSelector((state)=>state.singledata)

  console.log(singleuser,'14');

  const [popup, setPopup] = useState(false);
  const [value,setValue]=useState("")

  useEffect(() => {
    dispatch(singleuserdata(user.id))
 },[dispatch])

  const handlePopup = (e)=>{
  setValue(e.target.value)
  setPopup(true);
  // console.log(popup,"test");
  }
  const dynamicValue=singleuser ? Object.keys(singleuser).length * 5 : 0;
  return (
    <div style={{ position: "relative" }}>
      <nav className="navbar">
        <img src="../img/image 1.png" alt="" />
        <div className="navdivo">
        <img src={user.Image} alt="" className="imagee"/>
          <p>{user.basicinfo.firstname} {user.basicinfo.lastname}</p>{" "}
        </div>
      </nav>

      {/* --------------------------------------baisc info div */}
      <div className="basic">
        <div className="basic2">
          <h1>Review: Complete Your Profile </h1>
          <p>
            You are just few steps away from you professional CV. Complete your
            profile{" "}
          </p>
        </div>
      </div>

      {/* ----------------------formmmm */}
      <div className="basicform wadeform" >

        <div className="alreadyhave" >

            <div className="wadewarren" >
                
                <img src={user.Image} alt=""  className="wadeimg"/>
                <p className="wadep">{user.basicinfo?.firstname} {user.basicinfo?.lastname}</p>
                <p className="wadepp">{user.experience?.destination}</p>
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
                <button value="basicinfo" className="bluee" onClick={handlePopup}>Edit</button>
                </div>

                <div className=" infodiv1 infodiv2"><i class="fa-solid fa-envelope"></i><p>Credentials</p>
                <button value="salar" className="bluee" onClick={handlePopup}>Edit</button>

                </div>
                <div className=" infodiv1 infodiv3">
                  <div className="onee"><i class="fa-solid fa-link"></i><p>Public Link</p>
                  <div>

                <button value="profilelink" className="bluee" onClick={handlePopup}>Edit</button>
                  </div>

                </div>
                <div className="two">
                <p><i class="fa-brands fa-facebook-f"></i>Share on Facebook</p></div></div>

                <div className=" infodiv1 infodiv4"><i class="fa-solid fa-hat-cowboy"></i><p>Education</p>
                <button  value="education" className="bluee" onClick={handlePopup}>Add</button>

                </div>
                <div className=" infodiv1 infodiv5"><i class="fa-solid fa-check"></i><p>Industry</p>
                <button value="industry" className="bluee" onClick={handlePopup}>Add</button>

                </div>
                <div className=" infodiv1 infodiv6"><i class="fa-solid fa-award"></i><p>Awards</p>
                <button value="awards" className="bluee" onClick={handlePopup}>Add</button>

                </div>
            </div>




            <div className="resume" >
                <div className="alreadyy">
                  <h1>Already Have A Account</h1>
                <button className="button gr4">Upload File</button>
                </div>
                <div className="summary">
                  <div className="editt">
                  <div className='bueish'><h3> <i class="fa-solid fa-book"></i> Summary</h3>
                  <button value="summary" style={{color:"blue"}} onClick={handlePopup} >Edit</button></div>
                  <p style={{fontSize:"13px"}}>{singleuser?.summary?.summary}</p>

                  </div>
                  <div className="editt">
                  <div className='bueish'><h3> <i class="fa-solid fa-book"></i> Work History</h3>
                  <button value="workhistory" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                 {singleuser?.workhistory ? (
                  <>
                       <p style={{fontSize:"13px"}}><b>Job Title:</b> {singleuser?.workhistory?.designation}</p>
                       <p style={{fontSize:"13px"}}><b>Company:</b> {singleuser?.workhistory?.company}</p>
                       <p style={{fontSize:"13px"}}><b>Duration:</b>{singleuser?.workhistory?.presentdata} </p>
                       <p style={{fontSize:"13px"}}><b>City:</b>{singleuser?.workhistory?.city} </p>
                       </>
                 ) : ""}
                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Project</h3>
                  <button value="projects" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                  {singleuser?.projects ? (
                  <>
                  <p style={{fontSize:"13px"}}><b>Project Title:</b> {singleuser?.projects?.projecttitle}</p>
                  <p style={{fontSize:"13px"}}><b>Company:</b> {singleuser?.projects?.company}</p>
                  <p style={{fontSize:"13px"}}><b>Project Url:</b>{singleuser?.projects?.project_url} </p>
                  <p style={{fontSize:"13px"}}><b>Tools:</b>{singleuser?.projects?.tool} </p>
                  </>
                 ) : ""}
                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Certification</h3>
                  <button value="certifications" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                  {singleuser?.certifications ? (
                  <>
                  <p style={{fontSize:"13px"}}><b>Project Title:</b> {singleuser?.certifications?.name}</p>
                  <p style={{fontSize:"13px"}}><b>Company:</b> {singleuser?.certifications?.license}</p>
                  <p style={{fontSize:"13px"}}><b>Project Url:</b>{singleuser?.certifications?.authority} </p>
                  <p style={{fontSize:"13px"}}><b>Tools:</b>{singleuser?.certifications?.tool} </p>
                  </>
                 ) : ""}
                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Skills</h3></div>

                  <button value="skills" style={{color:"blue"}} onClick={handlePopup}>Add</button>

                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Preferred Job City</h3>
                  <button value="preferred" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                  {singleuser?.preferred ? (
                  <>
                  <p style={{fontSize:"13px"}}><b>City:</b> {singleuser?.preferred?.city}</p>
                  </>
                 ) : ""}
                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Hobbies/Activities</h3>
                  <button value="hobbies" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                  {singleuser?.hobbies ? (
                  <>
                  <p style={{fontSize:"13px"}}><b>Hobbies:</b> {singleuser?.hobbies?.hobby}</p>
                  </>
                 ) : ""}
                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Languages</h3>
                  <button value="languages" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                  {singleuser?.languages ? (
                  <>
                  <p style={{fontSize:"13px"}}><b>Hobbies:</b> {singleuser?.languages?.language}</p>
                  </>
                 ) : ""}
                  </div>
                  <div className="editt">
                  <div className='bueish'>
                  <h3> <i class="fa-solid fa-book"></i> Refrences</h3>
                  <button value="refrences" style={{color:"blue"}} onClick={handlePopup}>Add</button></div>
                  {singleuser?.refrences ? (
                  <>
                  <p style={{fontSize:"13px"}}><b>Name:</b> {singleuser?.refrences?.name}</p>
                  <p style={{fontSize:"13px"}}><b>Company:</b> {singleuser?.refrences?.company}</p>
                  <p style={{fontSize:"13px"}}><b>Email:</b> {singleuser?.refrences?.email}</p>
                  <p style={{fontSize:"13px"}}><b>Contact:</b> {singleuser?.refrences?.contact_no}</p>
                  </>
                 ) : ""}
                  </div>
                </div>
            </div>

 
            <div className="profilestrength" >
          
              <h2><i class="fa-solid fa-user"></i>  Profile Strength</h2>
              <CircularProgressBar  dynamicValue={dynamicValue}/>
              <button className="gr6">Download CV</button></div>
      
        </div>
        <div className="gr">
          <button className="buttongr prevbutton">Previous</button>
          <button className="buttongr nextbutton">Next</button>
        </div>
      </div>

      <div>
        <Popup state={popup} setPopup={setPopup} value={value}/>
    </div>
      <img src="../img/group.png" alt="" className="group" />
 <Footer/>
    </div>
  );
}

export default Review;
