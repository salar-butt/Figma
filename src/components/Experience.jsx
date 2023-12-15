import React, { useState } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { basicdataaction } from "../Action/Action";


function Experience() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const localdata = JSON.parse(localStorage.getItem("user"));
  console.log(localdata, "mobxucjjjjdjdjdjt");
  const [data4, setData4] = useState({
    city3: "",
    destination: "",
    experience: ""
   
  });

  const handleMarkChange = (e) => {
    setData4((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(data4, "data");
  };

  const handlecheck = () => {
    if (
      data4.destination ||
      data4.city3||
      data4.experience 
   
    ) {
      const updatedata = { ...localdata, experience: data4 };
      dispatch(basicdataaction(updatedata));
      console.log(updatedata, "updateobject");
      alert("Registration successful!");
      navigate("/complete");
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  return (
    <div style={{position:"relative"}}>
      <nav className="navbar">
        <img src="../img/image 1.png" alt="" />
        <div className="navdivo">
        <img src={localdata.Image} alt="" className="imagee"/>
          <p>{localdata.basicinfo.firstname} {localdata.basicinfo.lastname}</p>{" "}
        </div>
      </nav>

      {/* --------------------------------------baisc info div */}
      <div className="basic">
        <div className="basic2">
          <h1>Step 3: Experience</h1>
          <p>
          Let’s get you noticed!Work ecperience will increase your chances of landing that next job
          </p>
        </div>
      </div>

      {/* ----------------------formmmm */}
      <div className="basicform formm">
        <img src="../img/Stepper (2).png" alt="" className="step1" />
        <div className="inpdiv">
          <div className="inp1div">
            {" "}
            <label htmlFor="">Job City*</label>
            <input
              type="text"
              placeholder="Enter Your Job City"
              className="inp1"
              value={data4.city3}
              name="city3"
              onChange={handleMarkChange}

            />
          </div>

          <div className="inp2div inp1div ">
            {" "}
            <label htmlFor="">Expected Designation*</label>
            <input
              type="text"
              placeholder="Enter Your Designation"
              className="inp1"
              value={data4.destination}
              name="destination"
              onChange={handleMarkChange}

            />
          </div>

          <div className="inp3div inp1div">
            {" "}
            <label htmlFor="">Experience*</label>
            <input type="text" className="inp1" placeholder='Enter Your Experience' 
              onChange={handleMarkChange}
              value={data4.experience}
              name="experience"
              />
          </div>

     

         
        </div>


        <div className="gr grrr">
          {" "}
          <Link to="/experience">
          <button className="buttongr prevbutton">Previous</button></Link>
          <Link to="/complete">
          <button className="buttongr nextbutton" onClick={handlecheck}>Next</button></Link>
        </div>    
          </div>
<img src="../img/group.png" alt="" className="group"/>
    <Footer/>
    </div>
  )
}

export default Experience
