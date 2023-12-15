import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { gettingStudent } from '../Action/Action';
import { Link } from 'react-router-dom';


import Footer from './Footer'

function Login() {
    const Navigate = useNavigate()
    const [data, setData] = useState({
        Email: "",
        Password: "",
      });
      const dispatch = useDispatch();
      const handleMarkChange = (key, value) => {
        setData((prevData) => ({
          ...prevData,
          [key]: value,
        }));
        // console.log(data, "data");
    };

    const handlecheck = () => {
       
          const { Email, Password } = data
          const user = localStorage.getItem("user");
          if (user !== null){
            localStorage.clear("user")
            dispatch(gettingStudent(Email, Password));
        }
        else{
              dispatch(gettingStudent(Email, Password));

          }

          setTimeout(() => {
            checkLogin()
          },1000)

      }; 

      const checkLogin = () => {
        const user = localStorage.getItem("user");
        if (user !== null){
            Navigate("/basic")
        }
        else{
            alert("You cant Login")
        }
      }
  return (
    <div>
      
      <nav className="navbar">
        <img src="../img/image 1.png" alt="" />
        <div>
          
            <button className="button button1" data={data}>
              Create Profile
            </button>
          <button className="button">Employer</button>
        </div>
      </nav>
      <div className="main">
        <img src="../img/ellipse.png" alt="" className="image" />
        <div className="headingdiv">
          <h1>
            Find Your <span>Blockchain Dev</span> Job Today
          </h1>
          <p>
            Discover the leading companies in the blockchain industry and find
            job opportunities.
          </p>
          <button className="buttongr">Register Now</button>
        </div>

        <div action="" className="form">
          <div className="signup">
            <h1>Login</h1>
            <div>
              <button className="jobbtn">Job Seeker</button>
              <button className="jobbtn btn">Employer</button>
            </div>
          </div>
          <label htmlFor="">Email*</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input"
            value={data.Email}
            onChange={(e) => handleMarkChange("Email", e.target.value)}
          />

        

          <label htmlFor="">Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            className="input"
            value={data.Password}
            onChange={(e) => handleMarkChange("Password", e.target.value)}
          />

          <button className="buttongr grr" onClick={handlecheck}>
           Login
          </button>

          <Link to="/login" className="to"> <p>----------------or Sign-Up with----------------</p></Link>
          <div className="icondiv">
            <button className="iconbtn">
              <i class="fa-brands fa-google"></i>
            </button>
            <button className="iconbtn">
              <i class="fa-brands fa-twitter"></i>
            </button>
          </div>
        </div>
        <img src="../img/blue.png" alt="" className="blue" />
      </div>

      {/* -------------------------------User Profile div---------------------- */}

      <div className="user">
        <h1>User Profile</h1>
        <div className="john">
          <div>
            <ul>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
              <li>
                <img src="../img/avatar.png" alt="" />
                John Doe
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* -------------------------------------Job Seeker div */}

      <div className="jobseeker">
        <div>
          <img src="../img/Frame.png" alt="" className="chain" />
        </div>
        <div className="job">
          <h1>Job Seeker</h1>
          <div>
            <hr />
            <p>Apply for a job with one click after completing your profile</p>
            <hr />
            <p>Free CV templates easy to choose from</p>
            <hr />
            <p>Free expors to pdf</p>
            <hr />
            <p>Free Profile and access to jobs</p>
          </div>
        </div>
        <img src="../img/circles.png" alt="" className="circles" />
      </div>

      {/* -------------------------------------Employers */}

      <div className="jobseeker">
        <div className="job">
          <h1>Job Seeker</h1>
          <div>
            <hr />
            <p>Apply for a job with one click after completing your profile</p>
            <hr />
            <p>Free CV templates easy to choose from</p>
            <hr />
            <p>Free expors to pdf</p>
            <hr />
            <p>Free Profile and access to jobs</p>
            <img src="../img/group2.png" alt="" className="circles" />
          </div>
        </div>
        <div>
          <img src="../img/Frame2.png" alt="" className="chain2" />
        </div>
      </div>

      {/* ----------------------------------------Explore */}

      <div className="explore">
        <div className="explore2">
          {" "}
          <h1>Explore New Oppourtunities on the G0!</h1>
          <button className="getbtn">Get Started</button>
        </div>
        <img src="../img/Ellipse 308.png" alt="" className="img1" />
        <img src="../img/Ellipse 309.png" alt="" className="img2" />
        <img src="../img/Ellipse 307.png" alt="" className="img3" />
        <img src="../img/Ellipse 310.png" alt="" className="img4" />
        <img src="../img/tik.png" alt="" className="img5" />
      </div>

      {/*------------------------------------ Lets talk */}
      <div className="lets">
        <div className="letdiv">
          <img src="../img/Group 15.png" alt="" />
          <img src="../img/Group 90.png" alt="" />
        </div>
        <img src="../img/Group 5.png" alt="" className="dashimg" />
        <div action="" className="form form2">
          <div className="signup">
            <h1>CONTACT US</h1>
          </div>

          <label htmlFor="">Email*</label>
          <input type="email" placeholder="Enter Email" className="input" />

          <label htmlFor="">Phone*</label>
          <input type="number" placeholder="Enter Number" className="input" />

          <label htmlFor="">Zip-Code*</label>
          <input type="text" placeholder="Enter Zip-Code:" className="input" />
          <label htmlFor="">Country*</label>
          <select name="" id="" className="input">
            <option value="">Select Country</option>
            <option value="">Pakistan</option>
            <option value="">India</option>
            <option value="">China</option>
            <option value="">America</option>
            <option value="">Others...</option>
          </select>
          <button className="buttongr grr">Register New className</button>
          <p>----------------or Sign-Up with----------------</p>
          <div className="icondiv">
            <button className="iconbtn">
              <i class="fa-brands fa-google"></i>
            </button>
            <button className="iconbtn">
              <i class="fa-brands fa-twitter"></i>
            </button>
          </div>
        </div>
      </div>
<Footer/>
    </div>
  )
}

export default Login
