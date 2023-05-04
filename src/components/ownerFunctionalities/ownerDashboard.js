import React from "react";
import OwnerNavbar from "./OwnerNavbar";
import { useNavigate } from "react-router-dom";
import Loader from "../userFuctionalities/loader";
import { useState, useEffect } from "react";
import axios from "axios";

function OwnerDashboard() {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [fe, setFe] = useState(false);
  const toDetails = (id) => {
    const employee = details.filter((incar) => incar._id == id);
    navigate("/ownercardetails", { state: employee[0] });
  };

  return (
    <>
      {useEffect(() => {
        axios.get("https://puce-badger-toga.cyclic.app/getcars").then((res) => {
          setDetails(res.data);
          setFe(true);
        });
      }, [])}
      ;
      <OwnerNavbar />
      <div className="car-cards row">
        {!fe ? (
          <Loader />
        ) : (
          details.map((ele) => {
            return (
              <article className="single-card" key={ele._id}>
                <div className="temporary_text">
                  <img src={ele.car_image} className="car-img"></img>
                </div>
                <div className="card_content">
                  <span className="card_title">{ele.car_name}</span>
                    <hr/>
                  <span className="card_subtitle">Rent:{ele.car_rent}</span>
                  <div className="card_description">
                    <p className="details">More Details</p>
                    <p>Fuel:{ele.car_fuel}</p>
                    <p>car seating:{ele.car_seating}</p>
                    <p>licence:{ele.car_licencePlate}</p>
                    <button
                      className="btn btn-primary rent-button"
                      onClick={() => {
                        toDetails(ele._id);
                      }}
                    >
                      view Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </>
  );
}

export default OwnerDashboard;
