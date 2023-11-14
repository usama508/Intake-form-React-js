import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input/input'


export default function ClientForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [value, setValue] = useState()
  const [phone, setPhone] = useState()
  const [showform, setShowform] = useState(false);
  const [showcheck, setShowcheck] = useState(false);
  const [selectOption, setSetSelectOption] = useState("Medical reason")
  const [getCheckBox, setGetCheckBox] = useState(false)
  const [textAreavalue, setTextAreavalue]= useState("")


  const handleChange = (e)=>{
    setSetSelectOption(e.target.value)
  }

  const handleCheckBox = (e)=>{
    setGetCheckBox(e.target.value)
  }
  

  const [currentDate, setCurrentDate] = useState("");

  // Get Current Date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10); // Format: "YYYY-MM-DD"
    setCurrentDate(formattedDate);
  }, []);

  // Form send Function
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    // form.current,

    emailjs
      .sendForm(
        "service_cku0zsd",
        "template_8qdkyfg",
        form.current,
        "1O8aDzb26QU7189Xy"
      )
      .then(
        (result) => {
          // navigate("/message");
          toast.success("Thanks, Your message send successfully!", {
            theme: "dark",
            position: "bottom-center",
          });
          setLoading(false);
          setTimeout(()=>{
            window.location.reload();
          },4000)
        },
        // Send a success message to user's email

        (error) => {
          setLoading(false);
          console.log(error.text);
          toast.error("Something went wrong!", {
            theme: "dark",
            position: "bottom-center",
          });
        }
      );
  };

  //    if (userEmail) {
  //   await emailjs.send(
  //     "service_4vw963b",
  //     "template_bqv2kyf",
  //     {
  //       to_email: userEmail,
  //     },
  //     "_kr0anDc7HfJcm0rL"
  //   );
  // }

//   const scrollUp =()=>{
//     window.scrollTo({
//         top:0,
//         behavior: "smooth"
//     })
// }

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row " style={{ margin: "auto", justifyContent:'center' }}>
          <div >{''}</div>
          <form className=" g-3" ref={form} onSubmit={sendEmail}>
            <div >
              <div
                className="col-12"
                style={{
                  color: "#2c3345",
                  fontSize: "2em",
                  fontWeight: 600,
                  lineHeight: "1.45",
                  borderBottom: "1px solid #f3f3fe",
                }}
              >
                <h1>New Client Intake Form</h1>
              </div>{" "}
            </div>

            
            <br />
            <div className="row">
              <div className="col-md-6 pt-5">
                <div style={{ marginTop: "1px" }}>
              ( <span style={{ color: "red", fontSize: "1.3rem" }}>*</span> Indicates Mandatory Fields )
            </div>
                <label htmlFor="date" className="form-label label">
                  Today's Date{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>{" "}
                </label>
                <input
                  type="date"
                  className="form-control inputs"
                  id="date"
                  required
                  name="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pt-5">
                <label htmlFor="inputEmail4" className="form-label label">
                  First Name{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputEmail4"
                  required
                  name="user_fname"
                />
              </div>

              
              <div className="col-md-6 pt-5">
                <label htmlFor="inputPassword4" className="form-label label">
                  Last Name{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputPassword4"
                  required
                  name="user_lname"
                />
              </div>

            </div>


            <div className="row">
              <div className="col-md-6 pt-5">
                <label htmlFor="inputEmail4" className="form-label label">
                  DOB{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <input
                  type="date"
                  className="form-control inputs"
                  id="date"
                  required
                  name="DOB"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 pt-5">
                <label htmlFor="inputAddress2" className="form-label label">
                  Address{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputAddress2"
                  required
                  name="address"
                />
                <label htmlFor="inputAddress2" className="form-label sub-label">
                  Street Address{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
              </div>

              <div className="col-12 pt-3">
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputAddress2"
                  
                  name="street"
                />
                <label htmlFor="inputEmail4" className="form-label sub-label">
                  Street Address Line 2{" "}
                  {/* <span style={{ color: "red", fontSize: "1.3rem" }}>*</span> */}
                </label>
              </div>

              <div className="col-md-6 pt-3">
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputEmail4"
                  required
                  name="city"
                />
                <label htmlFor="inputEmail4" className="form-label sub-label">
                  City <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
              </div>

              <div className="col-md-6 pt-3">
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputPassword4"
                  required
                  name="province"
                />
                <label htmlFor="inputPassword4" className="form-label sub-label">
                  State / Province{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
              </div>

              <div className="col-12 pt-3">
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputAddress2"
                  required
                  name="postal"
                />
                <label htmlFor="inputEmail4" className="form-label sub-label">
                  Postal / Zip Code{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
              </div>

              <div className="col-md-6 pt-5">
                <label htmlFor="inputEmail4" className="form-label label">
                  Phone{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <PhoneInput
      
      value={value}
      country="US"
      maxLength={14}
      className="form-control inputs"
      id="inputEmail4"
      placeholder="(000) 000-0000"
      required
      name="phone"
      onChange={setValue} />
              
                <label htmlFor="inputEmail4" className="form-label sub-label">
                Please enter a valid phone number.{" "}
                {/* <span style={{ color: "red", fontSize: "1.3rem" }}>*</span> */}
              </label>
              </div>
              <div className="col-md-6 pt-5">
                <label htmlFor="inputPassword4" className="form-label label">
                  Email{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <input
                  type="email"
                  className="form-control inputs"
                  id="inputPassword4"
                  required
                  name="user_email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor="inputEmail4" className="form-label sub-label">
                example@example.com{" "}
                {/* <span style={{ color: "red", fontSize: "1.3rem" }}>*</span> */}
              </label> 
              </div>


              <div className="col-md-6 pt-5">
                <label htmlFor="inputPassword4" className="form-label label">
                  In case of emergency{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control inputs"
                  id="inputPassword4"
                  required
                  name="emergency"
                />
              </div>

              <div className="col-md-6 pt-5">
                <label htmlFor="inputEmail4" className="form-label label">
                  Phone{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <PhoneInput
      
      value={phone}
      country="US"
      className="form-control inputs"
      id="inputEmail4"
      placeholder="(000) 000-0000"
      required
      maxLength={14}
      name="ephone"
      onChange={setPhone} />
                <label htmlFor="inputEmail4" className="form-label sub-label">
                Please enter a valid phone number.{" "}
                {/* <span style={{ color: "red", fontSize: "1.3rem" }}>*</span> */}
              </label>
              </div>
              {/*--Setion2---*/}
              <div className="col-12 section2-head mt-5">
                <h6>
                  Please note: The following is a list of those who can not
                  participate in Lymphatic Therapy.{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </h6>
              </div>

              <div className="col-12">
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck1"
                    name="pregnant"
                    value="Yes"
                    defaultValue="No"
                    
                  />
                  <label className="form-check-label" >
                    Pregnant or nursing mother
                  </label>
                </div>
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck2"
                    name="acuteInfection"
                    value="Yes"
                    
                  />
                  <label className="form-check-label" >
                    Acute infection
                  </label>
                </div>
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck3"
                    name="immunosuppressants"
                    value="Yes"
                    defaultValue="No"

                    
                  />
                  <label className="form-check-label" >
                    Currently taking immunosuppressants
                  </label>
                </div>
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck4"
                    name="electricalImplants"
                    value="Yes"
                    defaultValue="No"

                   
                  />
                  <label className="form-check-label">
                    Electrical implants (pacemaker, cochlear implants, etc)
                  </label>
                </div>
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck5"
                    name="dvt"
                    value="Yes"
                    defaultValue="No"

                 
                  />
                  <label className="form-check-label" >
                    {" "}
                    DVT{" "}
                  </label>
                </div>
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck6"
                    name="cardiacEdema"
                    value="Yes"
                    defaultValue="No"
                   
                  />
                  <label className="form-check-label">
                    Cardiac Edema
                  </label>
                </div>
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck7"
                    name="renalFailure"
                    value="Yes"
                    onChange={handleCheckBox}
                    defaultValue="No"
                  
                  />
                  <label className="form-check-label">
                    Renal Failure
                  </label>
                </div>
                <div className="form-check checkbox"  >
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck8"
                    name="any"
                    value="Yes"  onClick={(e) => 
                    setShowform(!showform)
                  }
                    
                  />
                  <label className="form-check-label" >
                    Do not Suffer
                  </label>
                  {
                    showform ?<><span style={{ color: "red", fontSize: "1.3rem" }}>*</span><textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue="No"
                    name="showinput"
                    required
                    value={textAreavalue}
                    onChange={(e)=>setTextAreavalue(e.target.value)}
                    
                  /></> : ''
                    
                  }
                  
                      
                  
                 
                </div>
              </div>

              <div
                className="col-12  pt-5"
                style={{ borderBottom: "1px solid #f3f3fe" }}
              >
                <h5 className="section2-heads">
                  IF any of the above items apply to you, we will need to make
                  other scheduling arrangements for your safety.{" "}
                </h5>
              </div>
              <div className="col-12 section2-head pt-4">
                <h6>
                  For what reason are you seeking Assisted Lymphatic Therapy?{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </h6>
              </div>


              <div className="form-check checkbox ">
                <input
                  className="form-check-input"
                  type="radio"
                  id="medicalReasonCheckbox"
                  name="1"
                  value="Medical reason"
                  required
                  onChange={handleChange}
                />

                <label
                  className="form-check-label"
                  htmlFor="medicalReasonCheckbox"
                >
                  Medical reason
                </label>
              </div>

              <div className="form-check checkbox">
                <input
                  className="form-check-input"
                  type="radio"
                  id="relaxationCheckbox"
                  name="1"
                  value="Relaxation"
                  onChange={handleChange}

                  required
                />
                <label className="form-check-label" htmlFor="relaxationCheckbox">
                  Relaxation
                </label>
              </div>
              <div className="form-check checkbox">
                <input
                  className="form-check-input"
                  type="radio"
                  id="detoxCheckbox"
                  name="1"
                  value="Detox"
                  onChange={handleChange}

                  required
                />
                <label className="form-check-label" htmlFor="detoxCheckbox">
                  Detox
                </label>
              </div>
              <div className="form-check checkbox">
                <input
                  className="form-check-input"
                  type="radio"
                  id="otherCheckbox"
                  name="1"
                  value="other"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="otherCheckbox">
                  Other
                </label>
              </div>
              <div className="mb-3 section2-head pt-5">
                <label
                  
                  className="form-label section2-head"
                  style={{display:"flex"}}
                >
                  If for a medical reason, please describe your problem including
                  where it is and its severity. &nbsp;
                  <span style={{ color: "red", fontSize: "1.3rem", display:selectOption==="Medical reason"?"block":"none" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={6}
                  defaultValue={""}
                  name="medicalreason1"
                  required={selectOption==="Medical reason"}
                />
              </div>

              <div className="mb-3 section2-head pt-5">
                <label
                  
                  className="form-label section2-head"
                >
                  Please list all surgeries (including Cesarean section and
                  cosmetic){" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={6}
                  defaultValue={""}
                  required
                  name="surgeries"
                />
              </div>

              <div
                className="col-12 pt-5"
                style={{
                  fontSize: "1.125em",
                  color: "#2c3345",
                  borderBottom: "1px solid #f3f3fe",
                }}
              >
                <h1>Pick any that apply</h1>
              </div>

              <div className="col-md-6 pt-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Liposuction{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect03"
                    aria-label="Example select with button addon"
                    required
                    name="liposuction"
                  >
                    <option value="" >Please Select</option>
                    <option value="Abdomen">Abdomen</option>
                    <option value="Waist">Waist</option>
                    <option value="Arms">Arms</option>
                    <option value="Back">Back</option>
                    <option value="Hips">Hips</option>
                    <option value="Thighs">Thighs</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <label htmlFor="inputPassword4" className="form-label">
                  Breast{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    required
                    name="breast"
                  >
                    <option value="" >Please Select</option>
                    <option required value="Agumentation">Agumentation</option>
                    <option required value="Reduction">Reduction</option>
                    <option required value="Lift">Lift</option>
                    <option required value="Removal">Removal</option>
                    <option required value="N/A">N/A</option>
                  </select>
                </div>
              </div>

              <div className="col-12 pt-4">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Other{" "}
                    <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                  </label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                      required
                      name="other1"
                    >
                      <option value="">Please Select</option>
                      <option value="Tammy Tuck">Tammy Tuck</option>
                      <option value="BBL">BBL</option>
                      <option value="Hip">Hip</option>
                      <option value="Agumentation">Agumentation</option>
                      <option value="Botox">Botox</option>
                      <option value="N/A">N/A</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-12 section2-head pt-5">
                <h6>
                  Please pick a box for each line. Pick "Yes" if you currently or
                  regularly experience the condition listed.{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </h6>
              </div>

              {/*---Table---*/}
              <div className="col-md-12">
                <table className="table table    ">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th
                      scope="col"
                      className="table-row"
                      style={{
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                        borderRight: "1px solid",
                        borderColor: "#b8bdc9",
                        fontSize: ".75em",
                        backgroundColor: "#e5eaf4",
                      }}
                    >
                      Yes
                    </th>
                    <th
                      scope="col"
                      className="table-row"
                      style={{
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                        borderRight: "1px solid",
                        borderColor: "#b8bdc9",
                        backgroundColor: "#e5eaf4",
                        fontSize: ".75em",
                      }}
                    >
                     No
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    borderLeft: "1px solid",
                    borderTop: "1px solid #b8bdc9",
                    borderColor: "#b8bdc9",
                  }}
                >
                  <tr required>
                    <td style={{ backgroundColor: "#e5eaf4" }}>
                      Sinus Congestion
                    </td>
                    <td
                      className="table-row"
                      style={{
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                        borderRight: "1px solid",
                        borderColor: "#b8bdc9",
                     
                      }}
                    >
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckYes1"
                        name="yes1"
                        value="Yes"
                        required
                      />
                    </td>
                    <td
                      className="table-row"
                      style={{
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                        borderRight: "1px solid",
                        borderColor: "#b8bdc9",
                      }}
                    >
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes1"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Sinus Problems</td>
                    <td
                      className="table-row"
                      style={{
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                        borderRight: "1px solid",
                        borderColor: "#b8bdc9",
                      }}
                    >
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckYes1"
                        name="yes2"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes2"
                        value="No"
                       required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>
                      Ear Aches or Ringing
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes3"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes3"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Arthritis</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes4"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes4"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Inflamamation</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes5"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes5"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Fibromyalgia</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes6"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes6"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Major Scars</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes7"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes7"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Varicose Veins</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes8"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes8"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Strokes</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes9"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes9"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>Seizures</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes10"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes10"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>
                      Fibrocystic Breast
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes11"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes11"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>
                      Currently Pregnant
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes20"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes20"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>
                      Currently Breastfeeding
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes12"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes12"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: "#e5eaf4" }}>DVT</td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes13"
                        value="Yes"
                        required
                      />
                    </td>
                    <td className="table-row table-border">
                      <input
                        className="form-check-input square"
                        type="radio"
                        id="gridCheckNo1"
                        name="yes13"
                        value="No"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              

              <div className="mb-3 pt-4">
                <label
                 
                  className="form-label section2-head"
                >
                  Have you ever been diagnosed with Lymphedema? Is so, please
                  describe the extremities that are affected.{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={6}
                  defaultValue={""}
                  required
                  name="lymphedema"
                />
              </div>
              <div className="mb-3 pt-4">
                <label
                 
                 
                  className="form-label section2-head"
                >
                  Have you had Lymph Nodes removed? If yes, please describe how
                  many and the location of the removal.{" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={6}
                  defaultValue={""}
                  required
                  name="lymphNodes"
                />
              </div>

              <div className="mb-3 pt-4">
                <label
                  

                  className="form-label section2-head"
                >
                  Is there is anything else that I should know about you or your
                  needs before the session? (Pain, tenderness, other medical
                  conditions, etc.){" "}
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={6}
                  defaultValue={""}
                  name="needs"
                  required
                />
              </div>

              <div className="col-12 pt-5 ">
                <div className="form-check checkbox">
                  {/* <p style={{ color: "red" }}>*</p> */}
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck"
                    required
                    name="yes14"
                  />

                  <label className="form-check-label" htmlFor="gridCheck">
                    I understand that the Assisted Lymphatic Drainage I receive is
                    provided for the basic purpose of improving the flow of my
                    lymphatic system. If I experience any pain or discomfort
                    during this session, I will immediately inform the
                    practitioner.
                    <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                  </label>
                </div>
              </div>
              <div className="col-12 mt-5">
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck"
                    required
                    name="yes15"
                  />
                  I further understand that Assisted Lymphatic Therapy should not
                  be construed as a substitute for medical examination,
                  diagnosis, or treatment and that I should see a physician or
                  other qualified medical specialist for any mental or physical
                  ailment of which I am aware. I understand that Assisted
                  Lymphatic Therapists are not qualified to diagnose, prescribe,
                  or treat any physical or mental illness, and that nothing said
                  in the course of the session given should be construed as
                  such.
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </div>
              </div>







              <div className="col-12 mt-5">
                <div className="form-check checkbox">
                  <input
                    className="form-check-input sqare"
                    type="checkbox"
                    id="gridCheck"
                    required
                    name="yes16"
                  />
                  Because Assisted Lymphatic Therapy should not be performed
                  under certain medical conditions, I affirm that I have
                  stated all my known medical conditions and answered all
                  questions honestly.
                  <span style={{ color: "red", fontSize: "1.3rem" }}>*</span>
                </div>
                <div className="col-12 mt-5">
                  <div className="form-check checkbox">
                    <input
                      className="form-check-input sqare"
                      type="checkbox"
                      id="gridCheck"
                      required
                      name="yes17"
                    />
                    I agree to keep the practitioner updated as to any changes
                    in my medical profile and understand that there shall be
                    no liability on the practitioner’s part should I fail to
                    do so.
                    <span style={{ color: "red", fontSize: "1.3rem" }}>
                      *
                    </span>
                  </div>
                </div>
                <div className="form-check checkbox mt-5" required>
                  <p>
                    * Please Note: Assisted Lymphatic Therapy is a very
                    powerful modality and certain medical conditions are
                    contraindicated and will determine if and when you can
                    receive a session. After the consultation and review of
                    the information you have provided on this form, it will be
                    determined if Assisted Lymphatic Therapy should be
                    administered to you today. Some conditions will require a
                    note from your doctor before proceeding. Please understand
                    this is for your safety and well-being.
                  </p>
                  <p>
                    The information I provided is true and to the best of my
                    knowledge.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className=" pt-5">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label label">
                      Print Name <span style={{ color: "red", fontSize: "1.3rem" }}>
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control inputs"
                      id="date"
                      required
                      name="printname"
                    />
                  </div>
                </div>

                <div className=" pt-5 pb-3" style={{ borderBottom: "1px solid #f3f3fe" }}>
                  <div className="col-md-6" > 
                    <label htmlFor="date" className="form-label label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control inputs "
                      id="date"
                      required
                      name="ldate"
                      value={currentDate}
                      onChange={(e) => setCurrentDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 mt-5" style={{ textAlign: "center" }}>
                  <button
                 
                    type="submit"
                    className="btn  btn-lg"
                    style={{
                      backgroundColor: "#18bd5b",
                      color: "white",
                      width: 225,
                      borderRadius: 5,
                      marginBottom: 25,
                    }}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                 
                </div>
              </div>



            </div>


          </form>
        </div>
      </div>
    </div>
  );
}
