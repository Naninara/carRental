import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import OwnerNavbar from "./OwnerNavbar";
function OwnerviewStatus() {
  //----------getting Todays Date-------------

  const current = new Date();
  const date = [
    current.getFullYear(),
    current.getMonth() + 1,
    current.getDate(),
  ];

  //-----------Setting  Booked and has To take cars details----------------------------------
  let [bookedCars, setbookedCars] = useState([]);

  const setdata = () => {
    const result = AllBookings.filter(checkcar);

    function checkcar(car) {
      const tempdate_time = car.end_date.split("T");
      const tempdate = tempdate_time[0].split("-");

      if (parseInt(tempdate[0]) >= parseInt(date[0])) {
        if (parseInt(tempdate[2]) >= parseInt(date[2])) {
          return car;
        }
      }
    }
    setbookedCars(result);
  };

  //getting all detils

  let [AllBookings, setAllbookings] = useState([]);
  {
    useEffect(() => {
      axios.get("https://puce-badger-toga.cyclic.app/getbookingdetails").then((res) => {
        setAllbookings(res.data);
      });
    }, []);
  }

  useEffect(() => {
    setdata();
  }, [AllBookings]);

  return (
    <>
      <OwnerNavbar />
      <div className="car-cards row">
        {bookedCars.map((ele) => {
          return (
            <article className="single-card" key={ele._id}>
              <div className="temporary_text">
                <img src={ele.car_image} className="car-img"></img>
              </div>
              <div className="card_content">
                <span className="card_title">{ele.car_name}</span>
                <span className="card_subtitle">
                  Booked on: {ele.start_date}
                </span>
                <span className="card_subtitle">
                  Booked for: {ele.end_date}
                </span>
                <div className="card_description">
                  <p className="details">More Details</p>
                  <p>Username: {ele.user_name}</p>
                  <p>mobile number :{ele.user_mobile}</p>
                  <p>gmail :{ele.gmail}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default OwnerviewStatus;
