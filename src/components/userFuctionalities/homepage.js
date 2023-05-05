import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
        <Link to="/userlogin">
        <div className="homepage-card">
          <h4>User Login</h4>
        </div>
      </Link>
      <Link to="/ownerlogin">
        <div className="homepage-card">
          <h4>Owner Login</h4>
        </div>
      </Link>
      <Link to="/adminlogin">
        <div className="homepage-card">
          <h4>Admin Login</h4>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
