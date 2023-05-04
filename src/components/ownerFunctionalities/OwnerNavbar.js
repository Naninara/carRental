import React from "react";
import { Link } from "react-router-dom";

function OwnerNavbar() {
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
          <Link to="/ownerdashboard">
            Avilaible cars
          </Link>
          <Link to="/ownerviewstatus">
            current bookings
          </Link>
          <Link
           to="/ownerbookinghistory"
          >
            viewhistory
          </Link>
          <Link
           to="/ownerpayments"
          >
            payments
          </Link>
          <Link onClick={Logout} to="/">
            Logout
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default OwnerNavbar;
