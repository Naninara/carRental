import React from "react";
import OwnerNavbar from "./OwnerNavbar";
import Loader from "../userFuctionalities/loader";
import { useState, useEffect } from "react";
import axios from "axios";
function Ownerpayment() {
  const [data, setData] = useState([]);
  const [fe, setFe] = useState(false);
  {
    useEffect(() => {
      axios.get(`http://localhost:4000/getbookingdetails`).then((res) => {
        setData(res.data);
        setFe(true);
      });
    }, []);
  }
  return (
    <>
      <OwnerNavbar />
      {!fe ? (
        <Loader />
      ) : fe && data.length == 0 ? (
        <center>
          {" "}
          <h1 className="mt-4">No Booking details found</h1>
          <h2>please book a car to view history</h2>
        </center>
      ) : (
        <div className="table-responsive container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">s.no</th>
                <th scope="col">Buyer name</th>
                <th scope="col">Car name</th>
                <th scope="col">Rent Amount</th>
                <th scope="col">Payment On</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => {
                return (
                  <tr scope="row">
                    <td>{index + 1}</td>
                    <td>{ele.user_name}</td>
                    <td>{ele.car_name}</td>
                    <td>{ele.car_rent}</td>
                    <td>{ele.start_date.substring(0,10)}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Ownerpayment;
