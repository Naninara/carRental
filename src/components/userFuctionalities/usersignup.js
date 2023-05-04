import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Usersignup() {

  const [signup,setSignup] = useState({
    name:"",
    gmail:"",
    password:"",
    type:"user"
  });
  const HandleForm = (e) => {
    console.log(signup);
    setSignup((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const postData = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/signup",{signup}).then((res)=>{
      setSignup(res.data);
      alert("signup successfull please proceed to login")
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="signup-container" id="signup">
      <div className="signup-form-box">
        <form className="signup-form" onSubmit={postData}>
          <span className="signup-title">Sign up</span>
          <span className="signup-subtitle">
            Create a free account with your email.
          </span>
          <div className="signup-form-container">
            <input type="text" className="signup-input" placeholder="Full Name"  name="name" onChange={HandleForm} required/>
            <input type="email" className="signup-input" placeholder="Email"  name="gmail" onChange={HandleForm} required/>
            <input type="password" className="signup-input" placeholder="Password" name="password" onChange={HandleForm} required />
          </div>
          <button type="submit">Sign up</button>
        </form>
        <div className="signup-form-section">
          <p>
            Have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Usersignup;
