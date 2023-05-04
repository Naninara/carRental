import React from "react";
import AdminNavbar from "./AdminNavbar";
import Loader from "../userFuctionalities/loader";
import { useState  } from "react";
import axios from "axios";
import { useEffect } from "react";
function AdminDashboard() {
  const [data, setData] = useState([]);
  const [fe, setFe] = useState(false);
  {
    useEffect(() => {
      axios
        .get(
          `http://localhost:4000/getsignupdetails`
        )
        .then((res) => {
          setData(res.data);
          setFe(true);
        });
    }, []);
  }
  return (
    <>
      <AdminNavbar />
      <center><h2 className="mt-5">All user details</h2></center>
      {!fe ? (
        <Loader />
      ) : fe && data.length == 0 ? (
        <center>
          {" "}
          <h1 className="mt-4">No Userdetails details found</h1>
          <h2>please book a car to view history</h2>
        </center>
      ) : (
        <div className="table-responsive">
          <div className="container">
          <table class="table table-striped" align="center">
            <thead>
              <tr >
                <th scope="col">s.no</th>
                <th scope="col">Username</th>
                <th scope="col">Gmail</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => {
                return (
                  <tr scope="row">
                    <td>{index + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.gmail}</td>
                    <td>{ele.password}</td>
                    
                   
                  </tr> 
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;
