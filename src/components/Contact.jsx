import React, { useState } from "react";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { basicdataaction } from "../Action/Action";

function Contact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const localdata = JSON.parse(localStorage.getItem("user"));
  console.log(localdata, "mobxuct");
  const [data3, setData3] = useState({
    email2: "",
    home_contact: "",
    number: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    zip_code: "",
  });

  const handleMarkChange = (e) => {
    setData3((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // console.log(data3, "data");
  };

  const handlecheck = () => {
    if (
      data3.email2 ||
      data3.home_contact ||
      data3.number ||
      data3.country ||
      data3.address1 ||
      data3.address2 ||
      data3.city ||
      data3.zip_code
    ) {
      const updatedata = { ...localdata, contact: data3 };
      dispatch(basicdataaction(updatedata));
      // console.log(updatedata, "updateobject");
      alert("Registration successful!");
      navigate("/experience");
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <nav className="navbar">
        <img src="../img/image 1.png" alt="" />
        <div className="navdivo">
          <img src={localdata.Image} alt="" className="imagee"/>
          <p>{localdata.basicinfo?.firstname} {localdata.basicinfo?.lastname}</p>{" "}
        </div>
      </nav>

      {/* --------------------------------------baisc info div */}
      <div className="basic">
        <div className="basic2">
          <h1>Step 2: Contact Information</h1>
          <p>How can we get in touch with you about the job of your dreams</p>
        </div>
      </div>

      {/* ----------------------formmmm */}
      <div className="basicform formmmm">
        <img src="../img/Stepper (1).png" alt="" className="step1" />
        <div className="inpdiv">
          <div className="inp1div">
            {" "}
            <label htmlFor="">Email*</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="inp1"
              value={data3.email2}
              name="email2"
              onChange={handleMarkChange}
            />
          </div>

          <div className="inp2div inp1div ">
            {" "}
            <label htmlFor="">Home Contact No*</label>
            <input
              type="number"
              placeholder="Enter Your Contact Number"
              className="inp1"
              name="home_contact"
              value={data3.home_contact}
              onChange={handleMarkChange}
            />
          </div>

          <div className="inp3div inp1div">
            {" "}
            <label htmlFor="">Mobile*</label>
            <input
              type="number"
              className="inp1"
              placeholder="Enter Your Contact Number"
              value={data3.number}
              name="number"
              onChange={handleMarkChange}
            />
          </div>

          <div className="inp4div inp1div">
            {" "}
            <label htmlFor="">Country*</label>
            <input
              type="text"
              placeholder="Enter Your Degree"
              className="inp1"
              value={data3.degree}
              name="degree"
              onChange={handleMarkChange}
            />
          </div>

          <div className="inp6div inp1div">
            {" "}
            <label htmlFor="">Address Line 1*</label>
            <input
              type="text"
              className="inp1"
              placeholder="Enter Your Address"
              value={data3.address1}
              name="address1"
              onChange={handleMarkChange}
            />
          </div>

          <div className="inp7div inp1div">
            {" "}
            <label htmlFor="">City*</label>
            <input
              type="text"
              placeholder="Enter Your City"
              className="inp1"
              value={data3.city}
              name="city"

              onChange={handleMarkChange}
            />
          </div>

          <div className="inp8div inp1div">
            {" "}
            <label htmlFor="">Address Line 2*</label>
            <input
              type="text"
              className="inp1"
              placeholder="Enter Your Address"
              value={data3.address2}
              name="address2"
              onChange={handleMarkChange}
            />
          </div>

          <div className="inp9div inp1div">
            {" "}
            <label htmlFor="">Zip Postel Code*</label>
            <input
              type="text"
              placeholder="Enter Your Postel-Code"
              className="inp1"
              value={data3.zip_code}
              name="zip_code"
              onChange={handleMarkChange}
            />
          </div>
        </div>

        <div className="gr grrr">
          {" "}
          <Link to="/basic">
            <button className="buttongr prevbutton">Previous</button>
          </Link>
          <button className="buttongr nextbutton" onClick={handlecheck}>
            Next
          </button>
        </div>
      </div>
      <img src="../img/group.png" alt="" className="group" />
      <Footer />
    </div>
  );
}

export default Contact;
