import React from "react";
import AdminDashboard from "./AdminDashboard";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import OwnerDashboard from "../ownerFunctionalities/ownerDashboard";

import axios from "axios";

function Adminlogin() {
  const [errorMessages, setErrorMessages] = useState({});
  const [loginType, setLoginType] = useState("");

  const [admindb, setAdmindb] = useState([]);

  {
    useEffect(() => {
      axios
        .get("https://puce-badger-toga.cyclic.app/getadminsignupdetails")
        .then((res) => {
          setAdmindb(res.data);
        });
    }, []);
  }

  const errors = {
    gmail: "invalid gmail",
    pass: "invalid password",
  };

  const adminSubmit = (event) => {
    event.preventDefault();
    var { gmail, pass } = document.forms[0];
   
    const userData = admindb.find((user) => user.gmail === gmail.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // success
        sessionStorage.setItem("gmail", userData.gmail);
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("type", userData.type);
        setLoginType(userData.type);
      }
    } else {
      alert("no user found please register");
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form-box">
      <div class="form-container">
        <p class="title">Welocome to Rent it</p>
        <p class="title">Admin Login</p>
        <form class="form">
          <div class="input-group">
            <label for="username">Gmail</label>
            <input type="email" id="username" placeholder="" name="gmail" />
            {renderErrorMessage("uname")}
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" name="pass" id="password" placeholder="" />
            {renderErrorMessage("pass")}
            <div class="forgot"></div>
          </div>

          <button class="sign mt-2" type="submit" onClick={adminSubmit}>
            Sign in
          </button>
        </form>

        <p class="signup">
          Don't have an account?
          <Link to="/adminsignup">Sign up</Link>
        </p>
      </div>{" "}
    </div>
  );

  return (
    <>
      {sessionStorage.getItem("auth") == "true" &&
      sessionStorage.getItem("type") == "admin" ? (
        <div>
          <AdminDashboard />
        </div>
      ) : (
        <div className="app">{renderForm}</div>
      )}
    </>
  );
}

export default Adminlogin;
