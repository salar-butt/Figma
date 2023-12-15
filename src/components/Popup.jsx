import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfileInfo } from "../Action/Action";

function Popup({ state, setPopup, value }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  const closePopup = () => {
    setPopup(false);
  };
  const [currentinput, setCurrentinput] = useState({});

  const handlechange = (e) => {
    setCurrentinput((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(currentinput, "data");

  const handlesubmit = () => {
    dispatch(addProfileInfo(user.id, { [value]: currentinput }));
    setCurrentinput({});
  };
  console.log(currentinput, "hereee");

  const renderPopupContent = () => {
    switch (value) {
      //-------------------------- basicinfo
      case "basicinfo":
        return (
          <div className="basicinfoo">
            <h2 className="basicinfooH">Basic Information</h2>
            <div className="basic2">
              <div className="basic3">
                <label htmlFor="">First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  value={currentinput.firstname}
                  onChange={handlechange}
                  placeholder="First Name"
                />
              </div>
              <div className="basic3 ">
                <label htmlFor="">Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  value={currentinput.lastname}
                  onChange={handlechange}
                  placeholder="Last Name"
                />
              </div>

              <div className="basic3">
                <label htmlFor="">Date of Birth:</label>
                <input
                  type="date"
                  name="birth"
                  value={currentinput.birth}
                  onChange={handlechange}
                  placeholder="Date of Birth"
                />
              </div>
              <div className="basic3">
                <label htmlFor="">Degree Level:</label>
                <input
                  type="text"
                  name="degree"
                  value={currentinput.degree}
                  onChange={handlechange}
                  placeholder="Degree Level"
                />
              </div>

              <div className="basic3 ">
                <label htmlFor="">Gender:</label>
                <div>
                  <input
                    type="radio"
                    id="Male"
                    name="gender"
                    value="male"
                    onChange={handlechange}
                  />
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    id="Female"
                    value="female"
                    name="gender"
                    onChange={handlechange}
                  />
                  <label htmlFor="Female">Female</label>
                </div>
              </div>
            </div>
          </div>
        );
      // ----------------------------Credentials
      case "salar":
        return (
          <div className="basicinfoo">
            <h2 className="basicinfooH">Registration Email</h2>
            <div className="basic2">
              <div className="basic3">
                <label htmlFor="">Registration Email:</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Your Registration Email"
                  onChange={handlechange}
                />
              </div>

              <div className="basic3 ">
                <label htmlFor="">Change Pasword:</label>
                <input
                  type="text"
                  name="Password"
                  placeholder="Last Name"
                  onChange={handlechange}
                />
              </div>
            </div>
          </div>
        );
      case "profilelink":
        return (
          <div className="basicinfoo">
            <h2 className="basicinfooH">Public Profile Link</h2>
            <p>Link your Linked Profile Link </p>
            <div className="basic2">
              <div className="basic3">
                <label htmlFor="">Linked profile:</label>
                <input
                  type="text"
                  name="link"
                  placeholder="Enter Your Linked profile"
                  onChange={handlechange}
                />
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="basicinfoo">
            <h2 className="basicinfooH">Education</h2>
            <div className="basic2">
              <div className="basic3">
                <label htmlFor="">Degree Title:</label>
                <input
                  type="text"
                  name="degreetitle"
                  value={currentinput.degreetitle}
                  placeholder="Enter Your Degree Title"
                  onChange={handlechange}
                />
              </div>

              <div className="basic3">
                <label htmlFor="">Degree Level:</label>
                <select
                  id="degree"
                  name="degreelevel"
                  value={currentinput.degreelevel}
                  onChange={handlechange}
                >
                  <option value="matriculation">Metriculation</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="olevel">O Level</option>
                  <option value="graduation">Graduation</option>
                  <option value="master">Master's Degree</option>
                </select>
              </div>
              <div className="basic3">
                <label htmlFor="">Majors:</label>
                <input
                  type="text"
                  name="majors"
                  value={currentinput.majors}
                  placeholder="Enter Your Majors"
                  onChange={handlechange}
                />
              </div>

              <div className="basic3">
                <label htmlFor="">Your Completion:</label>
                <input
                  type="text"
                  name="yearcompletion"
                  value={currentinput.yearcompletion}
                  placeholder="Month/Year"
                  onChange={handlechange}
                />
              </div>

              <div className="basic3">
                <label htmlFor="">Institute:</label>
                <input
                  type="text"
                  name="institute"
                  value={currentinput.institute}
                  placeholder="Institute name"
                  onChange={handlechange}
                />
              </div>

              <div className="basic3">
                <label htmlFor="">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={currentinput.location}
                  placeholder="Location"
                  onChange={handlechange}
                />
              </div>

              <div className="basic3">
                <h2 htmlFor="">Result Type:</h2>
                <input
                  type="radio"
                  name="result"
                  value="CGPA"
                  placeholder="Enter Your Degree Title"
                  onChange={handlechange}
                />
                <label htmlFor="">CGPA</label>
                <div>
                  <input
                    type="radio"
                    name="result"
                    value="percentage"
                    placeholder="Percentage"
                    onChange={handlechange}
                  />
                  <label htmlFor="">Percentage:</label>
                </div>
              </div>

              <div className="basic3">
                <label htmlFor="">CGPA/Percentage:</label>
                <input
                  type="text"
                  name="cgpa_percentage"
                  value={currentinput.cgpa_percentage}
                  placeholder="CGPA/Percentage"
                  onChange={handlechange}
                />
              </div>
            </div>
          </div>
        );

      case "industry":
        return (
          <div className="basic3">
            <h2>Industry Experience:</h2>
            <div>
              <label htmlFor="">Industry:</label>
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                onChange={handlechange}
              />
            </div>
          </div>
        );

      case "awards":
        return (
          <div className="basic3">
            <h2>Awards:</h2>
            <div>
              <label htmlFor="">Title:</label>
              <input
                type="text"
                value={currentinput.title}
                name="title"
                placeholder="Title"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Authority:</label>
              <input
                type="text"
                value={currentinput.auhority}
                name="title"
                placeholder="Title"
                onChange={handlechange}
              />
            </div>
            <div>
              <label htmlFor="">Date:</label>
              <input
                type="text"
                value={currentinput.date}
                name="title"
                placeholder="Month/Year"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Award Url:</label>
              <input
                type="text"
                value={currentinput.award_url}
                name="title"
                placeholder=""
                onChange={handlechange}
              />
            </div>
          </div>
        );

      case "summary":
        return (
          <div className="basic3">
            <h2>Sumary:</h2>
            <div>
              <label htmlFor="">Title:</label>
              <textarea
                type="text"
                rows="10"
                cols="50"
                value={currentinput.summary}
                name="summary"
                placeholder="Title"
                onChange={handlechange}
              />
              <p>
                Phone number and email address are not allowed in this field.
                Any contest information will be ommitted
              </p>
            </div>
          </div>
        );

      case "workhistory":
        return (
          <div className="basic3">
            <h2>Work Histrory:</h2>
            <div>
              <label htmlFor="">Job Title:</label>
              <input
                type="text"
                value={currentinput.designation}
                name="desigation"
                placeholder="Designation"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Company:</label>
              <input
                type="text"
                value={currentinput.company}
                name="company"
                placeholder="Company"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Duration:</label>
              <input
                type="text"
                value={currentinput.fromdata}
                name="fromdata"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">From:</label>
              <input
                type="date"
                value={currentinput.presentdata}
                name="presentdata"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Refrence Email:</label>
              <input
                type="text"
                value={currentinput.refemail}
                name="refemail"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Refrence Number:</label>
              <input
                type="number"
                value={currentinput.refnumber}
                name="refnumber"
                onChange={handlechange}
                placeholder="Call Number"
              />
            </div>

            <div>
              <label htmlFor="">Enter Country:</label>
              <input
                type="text"
                value={currentinput.country}
                name="country"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Enter City:</label>
              <input
                type="text"
                value={currentinput.city}
                name="city"
                onChange={handlechange}
                placeholder="city"
              />
            </div>

            <div>
              <label htmlFor="">Refrence Email:</label>
              <textarea
                rows="5"
                cols="30"
                type="text"
                value={currentinput.remarks}
                name="remarks"
                onChange={handlechange}
              />
              <p>
                Phone number and email address are not allowed in this fields.
                any context information will be omitted
              </p>
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className="basic3">
            <h2>Certification:</h2>
            <div>
              <label htmlFor="">Certification Name:</label>
              <input
                type="text"
                value={currentinput.name}
                name="name"
                placeholder="Designation"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">License number/Enrollment Number:</label>
              <input
                type="text"
                value={currentinput.license}
                name="license"
                placeholder="Company"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Certification authority:</label>
              <input
                type="text"
                value={currentinput.authority}
                name="authority"
                onChange={handlechange}
                placeholder="company name"
              />
            </div>

            <div>
              <label htmlFor="">Certification Url:</label>
              <input
                type="text"
                value={currentinput.certification_url}
                name="certification_url"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Completion Date:</label>
              <input
                type="date"
                value={currentinput.comletion_date}
                name="comletion_date"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Client/Customer Url:</label>
              <input
                type="text"
                value={currentinput.customer_url}
                name="customer_url"
                onChange={handlechange}
                placeholder="Call Number"
              />
            </div>

            <div>
              <label htmlFor="">Tools:</label>
              <input
                type="text"
                value={currentinput.tool}
                placeholder=""
                name="tool"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Remarks:</label>
              <textarea
                type="text"
                value={currentinput.remarks}
                name="remarks"
                onChange={handlechange}
              />
              <p>Phone number and email are not allowed in this field. </p>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="basic3">
            <h2>Projects:</h2>
            <div>
              <label htmlFor="">Projects Title:</label>
              <input
                type="text"
                value={currentinput.projecttitle}
                name="projecttitle"
                placeholder="Title of the Project"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Company:</label>
              <input
                type="text"
                value={currentinput.company}
                name="company"
                placeholder="Company name"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Duration:</label>
              <input
                type="text"
                value={currentinput.fromdata}
                name="fromdata"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">From:</label>
              <input
                type="date"
                value={currentinput.presentdata}
                name="presentdata"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Present Url:</label>
              <input
                type="text"
                value={currentinput.project_link}
                name="project_link"
                placeholder="web link"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Client/Customer Name:</label>
              <input
                type="text"
                value={currentinput.customer_name}
                name="customer_name"
                onChange={handlechange}
                placeholder="Full name"
              />
            </div>

            <div>
              <label htmlFor="">Client/Customer Url:</label>
              <input
                type="text"
                value={currentinput.customer_url}
                placeholder="Link"
                name="customer_url"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Tools:</label>
              <input
                type="text"
                value={currentinput.tool}
                name="tool"
                onChange={handlechange}
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="">Remarks:</label>
              <textarea
                rows="5"
                cols="30"
                type="text"
                value={currentinput.remarks}
                name="remarks"
                onChange={handlechange}
                placeholder=""
              />
              <p>Phone number and email are not allowed</p>
            </div>
          </div>
        );

      case "skills":
        return (
          // <div className="maindivo">
          <div className="basic3">
            <h2>Skills:</h2>
            <div>
              <label htmlFor="">Skills Name:</label>
              <input
                type="text"
                value={currentinput.name}
                name="name"
                placeholder="Enter your skills"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Skills Percentage:</label>
              <input
                type="number"
                value={currentinput.percentage}
                name="percentage"
                placeholder="Enter a percentage"
                onChange={handlechange}
              />
            </div>
          </div>
          // {/* </div> */}
        );

      case "preferred":
        return (
          <div className="basic3">
            <h2>Preferred Job City:</h2>
            <div>
              <label htmlFor="">Enet Your Preferred Job City:</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handlechange}
              />
            </div>
          </div>
        );

      case "hobbies":
        return (
          <div className="basic3">
            <h2>Hobbies/Extrea Activities:</h2>
            <div>
              <label htmlFor="">Enet Your Hobbies/ Extra Activities:</label>
              <input
                type="text"
                id=""
                name="hobby"
                placeholder="Hobbies"
                onChange={handlechange}
              />
            </div>
          </div>
        );

      case "languages":
        return (
          <div className="basicinfoo">
            <div className="basic3">
              <h2>Languages:</h2>
              <div>
                <label htmlFor="">Enet Your Language Below:</label>
                <input
                  type="text"
                  name="language"
                  placeholder="language"
                  onChange={handlechange}
                />
              </div>
            </div>
          </div>
        );

      case "refrences":
        return (
          <div className="basic3">
            <h2>Refrences:</h2>
            <div>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                value={currentinput.name}
                placeholder="Name"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Company:</label>
              <input
                type="text"
                name="company"
                value={currentinput.company}
                placeholder="Company"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Email:</label>
              <input
                type="text"
                name="email"
                value={currentinput.email}
                placeholder="Month/ Year"
                onChange={handlechange}
              />
            </div>

            <div>
              <label htmlFor="">Contact Number:</label>
              <input
                type="text"
                name="contact_no"
                value={currentinput.contact_no}
                placeholder="Contact No"
                onChange={handlechange}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div >
      {state && (
        <div className="showup" >
          <div>
            <button onClick={closePopup}>close</button>
            {renderPopupContent()}
            <div>
              <button>Previous</button>
              <button onClick={handlesubmit}>Save</button>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
