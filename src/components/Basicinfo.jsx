import React,{useState,useEffect} from "react";
import Footer from "./Footer";
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { singleuserdata,basicdataaction } from "../Action/Action";

function Basicinfo() {
  const navigate=useNavigate()
  const localdata=JSON.parse(localStorage.getItem("user"))
  // console.log("localdata",localdata);
  const {singleuser}=useSelector(state=>state.singledata)
  // console.log(singleuser,"asdfghjkl;")
const dispatch=useDispatch(singleuserdata)


  useEffect(()=>{
dispatch(singleuserdata(localdata.id))
  },[])

const [data2,setData2]=useState({
  firstname:"",
  lastname:"",
  birth:"",
  degree:"",
  gender:"",
})

const handleChange = (key, value) => {
  setData2((prevData) => ({
    ...prevData,
    [key]: value,
  }));
  // console.log(data2, "data2"); 
};

const handlecheck = () => {
  if (data2.firstname && data2.lastname && data2.birth && data2.degree && data2.gender) {
    const updateobject={...singleuser,basicinfo:data2}
dispatch(basicdataaction(updateobject))
    // console.log(updateobject,"updateobject")
    alert("Registration successful!");
    navigate("/contact")

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
          <p>{localdata.Name}</p>{" "}
        </div>
      </nav>

      {/* --------------------------------------baisc info div */}
      <div className="basic basicc">
        <div className="basic2">
          <h1>Step 1: Basic Information</h1>
          <p>
            Let’s get to know you, please fill out some basic information about
            yourself.
          </p>
        </div>
      </div>

      {/* ----------------------formmmm */}
      <div className="basicform formmm">
        <img src="../img/Stepper.png" alt="" className="step1" />
        <div className="inpdiv">
          <div className="inp1div">
            {" "}
            <label htmlFor="">First Name*</label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="inp1" value={data2.firstname}
              onChange={(e) => handleChange("firstname", e.target.value)} 
            />
          </div>

          <div className="inp2div inp1div ">
            {" "}
            <label htmlFor="">Last Name*</label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="inp1"
              value={data2.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)} 
            />
          </div>

          <div className="inp3div inp1div">
            {" "}
            <label htmlFor="">Date of Birth*</label>
            <input type="date" className="inp1" value={data2.birth}
              onChange={(e) => handleChange("birth", e.target.value)} />
          </div>

          <div className="inp4div inp1div">
            {" "}
            <label htmlFor="">Degree Level*</label>
            <input
              type="text"
              placeholder="Enter Your Degree"
              className="inp1"
              value={data2.degree}
              onChange={(e) => handleChange("degree", e.target.value)} 
            />
          </div>

          <div className="inp5div inp1div">
  <label htmlFor="">Gender:</label>
  <div>
    <input
      type="radio"
      id="Male"
      value={data2.gender === "Male"}
      onChange={(e) => handleChange("gender", e.target.value)}
    />
    <label htmlFor="Male">Male</label>
    <input
      type="radio"
      id="Female"
      value={data2.gender === "Female"}
      onChange={(e) => handleChange("gender", e.target.value)}
    />
    <label htmlFor="Female">Female</label>
  </div>
</div>

        </div>

      <button className="buttongr gr2" onClick={handlecheck}>Next</button>

      </div>
<img src="../img/group.png" alt="" className="group"/>
      <Footer/>
    </div>
  );
}

export default Basicinfo;
