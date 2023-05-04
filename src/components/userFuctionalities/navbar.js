import React from "react";
import { Link } from "react-router-dom";

function navibar() {
  const Logout = () =>{
    sessionStorage.clear();

  }
  return (
    <>
      <div className="navi">
        <input type="checkbox" id="navi-check" />
        <div className="navi-header">
          <div className="navi-title">Rent it</div>
        </div>
        <div className="navi-btn">
          <label for="navi-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="navi-links">
          <Link to="/dashboard">
            Home
          </Link>
          <Link to="/viewhistory">
            Feedback
          </Link>
          <Link
           to="/bookinghistory"
          >
            Booking history
          </Link>
          <Link onClick={Logout} to="/">
            Logout
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default navibar;
