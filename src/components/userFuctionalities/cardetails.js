import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";

import Navbar from "./navbar";
function Cardetails() {
  const location = useLocation();
  let [BookingDetails, SetBookingDetails] = useState({
    car_name: location.state.car_name,
    car_fuel: location.state.car_fuel,
    car_image: location.state.car_image,
    car_rent: location.state.car_rent,
    car_seating: location.state.car_seating,
    gmail: sessionStorage.getItem("gmail"),
    name: "",
    mobile: "",
    address: "",
    StartTime: "",
    EndTime: "",
  });
  const check = () => {
    const e = document.getElementsByTagName("input");
    const s = document.getElementById("error");
    for (let i = 0; i < e.length; i++) {
      if (e[i].value == "") {
        alert("please fill all details");
        return false;
      }
    }
    let d1 = new Date(e[4].value.substring(0, 10));
    let d2 = new Date(e[5].value.substring(0, 10));

    if (d1 >= d2) {
      s.innerHTML = "end date must be after start date ";
      return false;
    }
    return true;
  };
  const HandleForm = (e) => {
    console.log(BookingDetails);
    SetBookingDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const PostData = (e) => {
    e.preventDefault();
    let a = check();
    if (a) {
      axios
        .post("http://localhost:4000/bookingdetails", { BookingDetails })
        .then((res) => {
          SetBookingDetails(res.data);
          alert("booking successful please pay the payment in booking section");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return;
  };
  let FormData = (
    <div>
      <form onSubmit={PostData}>
        <input
          required
          className="form-control"
          id="outlined-basic"
          label="Name"
          name="name"
          placeholder="enter your name"
          variant="outlined"
          onChange={HandleForm}
        />
        <br />
        <br />
        <input
          required
          className="form-control"
          name="mobile"
          id="outlined-basic"
          placeholder="enter your mobile number"
          label="Mobile Number"
          variant="outlined"
          onChange={HandleForm}
        />
        <br />
        <br />
        <input
          required
          type="textarea"
          name="address"
          className="form-control"
          id="outlined-textarea"
          label="Address"
          placeholder="Address"
          onChange={HandleForm}
          multiline
        />
        <br />
        <br />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <label htmlFor="StDate">From Date</label>
          <input
            required
            name="StartTime"
            id="StDate"
            type="datetime-local"
            onChange={HandleForm}
            style={{
              width: "100%",
              border: "1.5px solid lightgrey",
              margin: "3px 0px 0px 0px",
              padding: "5px",
            }}
          />
          <label htmlFor="StDate">To Date</label>
          <input
            required
            name="EndTime"
            id="StDate"
            type="datetime-local"
            onChange={HandleForm}
            style={{
              width: "100%",
              border: "1.5px solid lightgrey",
              margin: "3px 0px 0px 0px",
              padding: "5px",
            }}
          />
        </div>
        <br />
        <br />
        <div id="error"></div>
        <input
          className="btn btn-primary"
          type="submit"
          name=""
          value="submit"
        />
      </form>
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="singlecarmain">
        <div className="carbooking">
          <div className="carimg">
            <div className="card ">
              <div className="card-body mt-5">
                <div className="card ">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={location.state.car_image}
                        className="img-fluid mt-4 m-auto rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <h3 className="card-title">
                          {location.state.car_name}
                        </h3>
                        <hr />
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {location.state.car_rent} Rent Per hour /-
                          </small>

                          <br />
                          <small className="text-body-secondary">
                            Description : {location.state.car_description}
                          </small>
                          <br />
                          <small className="text-body-secondary">
                            Fuel Type : {location.state.car_fuel}
                          </small>
                          <br />
                          <small className="text-body-secondary">
                            Max Persons : {location.state.car_seating}
                          </small>
                          <br />
                          <hr />
                          <small className="text-body-secondary">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-outline-1"
                              data-bs-target="#exampleModalToggle"
                              data-bs-toggle="modal"
                            >
                              Book Car
                            </button>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div
          className="modal-dialog modal-dialog-centered "
          style={{
            width: "auto",
            maxWidth: "500px",
            minWidth: "310px",
          }}
        >
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Enter Your Details
              </h1>
              <button
                type="button"
                className="btn-close bg-light "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                padding: "30px",
              }}
            >
              {FormData}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardetails;
