import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
 
  const [loginType, setLoginType] = useState("");
  const [auth, setAuth] = useState("");
  const [database, setDatabase] = useState([]);
  const [ownerdb,setOwnerdb] = useState([]);
  const [admindb,setAdmindb] = useState([]);
  const navigate = useNavigate();
  {
    useEffect(() => {
      axios.get("http://localhost:4000/getsignupdetails").then((res) => {
        setDatabase(res.data);
      });
    }, []);
  }

  {
    useEffect(() => {
      axios.get("http://localhost:4000/getownersignupdetails").then((res) => {
        setOwnerdb(res.data);
      });
    }, []);
  }

  {
    useEffect(() => {
      axios.get("http://localhost:4000/getadminsignupdetails").then((res) => {
        setAdmindb(res.data);
      });
    }, []);
  }

  const errors = {
    gmail: "invalid gmail",
    pass: "invalid password",
  };

  const ownerSubmit = (event) => {
    event.preventDefault();
    var { gmail, pass } = document.forms[1];
    const userData = ownerdb.find((user) => user.gmail === gmail.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // success
        sessionStorage.setItem("gmail", userData.gmail);
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("type",userData.type)
        setLoginType(userData.type);
      }
    } else {
      alert("no user found please register")
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const adminSubmit = (event) => {
    event.preventDefault();
    var { gmail, pass } = document.forms[2];
    console.log(admindb)
    const userData = admindb.find((user) => user.gmail === gmail.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // success
        sessionStorage.setItem("gmail", userData.gmail);
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("type",userData.type)
        setLoginType(userData.type);
      }
    } else {
      alert("no user found please register")
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { gmail, pass } = document.forms[0];
    const userData = database.find((user) => user.gmail === gmail.value);
    console.log(userData);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // success
        sessionStorage.setItem("gmail", userData.gmail);
        sessionStorage.setItem("auth", "true");
        sessionStorage.setItem("type",userData.type)
        setLoginType(userData.type);
      }
    } else {
      alert("no user found please register")
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="box">
      <div >
        <div class="form-container">
          <p class="title">Welocome to Rent it</p>
          <p class="title">User Login</p>
          <form class="form" >
            <div class="input-group">
              <label for="username">Gmail</label>
              <input type="email" id="username" placeholder="" name="gmail" />
              {renderErrorMessage("uname")}
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" name="pass" id="password" placeholder="" />
              {renderErrorMessage("pass")}
              <div class="forgot">
                <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
              </div>
            </div>

            <button class="sign" type="submit" onClick={handleSubmit}>
              Sign in
            </button>
          </form>

          <p class="signup">
            Don't have an account?
            <Link to="/usersignup">Sign up</Link>
          </p>
        </div>
      </div>
      <div >
        <div class="form-container">
          <p class="title">Welocome to Rent it</p>
          <p class="title">Owner Login</p>
          <form class="form" onSubmit={handleSubmit}>
            <div class="input-group">
              <label for="username">Gmail</label>
              <input type="email" id="username" placeholder="" name="gmail" />
              {renderErrorMessage("uname")}
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" name="pass" id="password" placeholder="" />
              {renderErrorMessage("pass")}
              <div class="forgot">
                <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
              </div>
            </div>

            <button class="sign" type="submit" onClick={ownerSubmit}>
              Sign in
            </button>
          </form>

          <p class="signup">
            Don't have an account?
            <Link to="/ownersignup">Sign up</Link>
          </p>
        </div>
      </div>

      <div >
        <div class="form-container">
          <p class="title">Welocome to Rent it</p>
          <p class="title">Admin Login</p>
          <form class="form" >
            <div class="input-group">
              <label for="username">Gmail</label>
              <input type="email" id="username" placeholder="" name="gmail" />
              {renderErrorMessage("uname")}
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" name="pass" id="password" placeholder="" />
              {renderErrorMessage("pass")}
              <div class="forgot">
                <Link rel="noopener noreferrer" to="/forgotpassword">
                  Forgot Password ?
                </Link>
              </div>
            </div>

            <button class="sign" type="submit" onClick={adminSubmit}>
              Sign in
            </button>
          </form>

          <p class="signup">
            Don't have an account?
            <Link to="/Adminsignup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {sessionStorage.getItem("auth") == "true" && sessionStorage.getItem("type")=="user" ? (
        <div>{navigate("/dashboard")}</div>
      ) :sessionStorage.getItem("auth") == "true" && sessionStorage.getItem("type")=="owner" ? (
        <div>{navigate("/ownerdashboard")}</div>
      ):sessionStorage.getItem("auth") == "true" && sessionStorage.getItem("type")=="admin" ? (
        <div>{navigate("/admindashboard")}</div>
      ): (
        <div className="app">{renderForm}</div>
      )}
    </>
  );
}

export default Login;
