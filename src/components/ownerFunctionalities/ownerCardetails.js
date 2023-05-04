import React from "react";
import OwnerNavbar from "./OwnerNavbar";
import { useLocation } from "react-router-dom";

function OwnerCardetails() {
  const location = useLocation();
  return (
    <>      <OwnerNavbar />
    
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

export default OwnerCardetails;
