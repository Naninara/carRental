import React from 'react'
import AdminNavbar from "./AdminNavbar";
import Loader from "../userFuctionalities/loader";
import { useState  } from "react";
import axios from "axios";
import { useEffect } from "react";
function Allcars() {
  const [data, setData] = useState([]);
  const [fe, setFe] = useState(false);
  {
    useEffect(() => {
      axios
        .get(
          `http://localhost:4000/getcars`
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
      <center><h2 className="mt-5">All car details</h2></center>
      {!fe ? (
        <Loader />
      ) : fe && data.length == 0 ? (
        <center>
          {" "}
          <h1 className="mt-4">No car details found</h1>
          <h2>please book a car to view history</h2>
        </center>
      ) : (
        <div className="table-responsive">
          <div className="container">
          <table class="table table-striped" align="center">
            <thead>
              <tr >
                <th scope="col">s.no</th>
                <th scope="col">car name</th>
                <th scope="col">car image</th>
                <th scope="col">Car rent</th>
                <th scope="col">Car seating</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => {
                return (
                  <tr scope="row">
                    <td>{index + 1}</td>
                    <td>{ele.car_name}</td>
                    <td><img src={ele.car_image} width={100} height={100}/></td>
                    <td>{ele.car_rent}</td>
                    <td>{ele.car_seating}</td>
                    
                   
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

export default Allcars