import React from 'react'
import { Link } from 'react-router-dom';
function AdminNavbar() {
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
              <Link to="/admindashboard">
                All Users
              </Link>
              <Link to="/allownerdetails">
                All Owners
              </Link>
              <Link
               to="/allcars"
              >
                All cars
              </Link>
              <Link
               to="/manageusers"
              >
                Manage Users
              </Link>
              <Link
               to="/manageowners"
              >
                Manage Owners
              </Link>
              <Link onClick={Logout} to="/">
                Logout
              </Link>
              
            </div>
          </div>
        </>
      );
}

export default AdminNavbar