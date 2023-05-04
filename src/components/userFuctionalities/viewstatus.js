import React from "react";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "./loader";
function Viewstatus() {
  const [feedback,setFeedback]=useState([]);
  const[fe,setFe] = useState(false);
  const toDetails = (id) => {};
  const [feedbackDetails, SetfeedbackDetails] = useState({
    overallRating: "",
    Rent: "",
    suggestions: "",

  });

  {useEffect(() => {
    axios.get(`https://puce-badger-toga.cyclic.app/getbookingdetails:${sessionStorage.getItem("gmail")}`).then((res) => {
      setFeedback(res.data);
      console.log(feedback)
      setFe(true);
    });
  }, [])};

  const PostData = (e) => {
    e.preventDefault();
    if(+feedbackDetails.overallRating>5 || +feedbackDetails.overallRating==NaN){
      alert("rating must below 5 or please number only")
      return;
    }
  };
  const HandleForm = (e) => {
    console.log(feedbackDetails);
    SetfeedbackDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  let Empty = (<h1>No booking details aviliable</h1>);
  let FormData = (
    <div>
      <form onSubmit={PostData}>
        <div class="form-group">
          <label>Overall Rating</label>

          <input
            type="text"
            class="form-control"
            id="exampleFormControlSelect1"
            placeholder="please enter rating from 1 to 5 " 
            name="overallRating"
            onChange={HandleForm} 
          ></input>
        </div>
        <br />
        <div class="form-group">
          <label>About Rental</label>
          <input
            type="email"
            class="form-control"
            placeholder="Suggest your opinion about rent"
            name="Rent"
            onChange={HandleForm}
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label>Suggestions</label>
          <textarea
            class="form-control"
            rows="3"
            name="suggestions"
            onChange={HandleForm}
            required
          ></textarea>
        </div>
        <br />
        <input
          type="submit"
          style={{
            marginBlockStart: "1%",
            marginInlineStart: "0%",
          }}
          className="btn btn-primary"
          data-bs-target="#exampleModalToggle2"
          data-bs-toggle="modal"
        />
      </form>
    </div>
  );
  return (
    <>
 
      <div>
        <Navbar />
      </div>
      <div className="car-cards row">
        {!fe?<Loader/>:fe && feedback.length==0 ?<center> <h1 className="mt-4">No Booking details found</h1><h2>please book a car to give feedback</h2></center>: feedback.map((ele) => {
          return (
            <article className="single-card" key={ele.id}>
              <div className="temporary_text">
                <img src={ele.car_image} className="car-img"></img>
              </div>
              <div className="card_content">
                <span className="card_title">{ele.car_name}</span>
                <hr />
                <span className="card_subtitle">Rented on: {ele.start_date.substring(0,10)}</span>
                <span className="card_subtitle">Returned on :{ele.end_date.substring(0,10)}</span>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-outline-1 feedback-btn"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Give Feedback
                </button>
                <div className="card_description">
                  <p className="details">More Details</p>
                  <p>Fuel:{ele.car_fuel}</p>
                  <p>car seating:{ele.car_seating}</p>
                  <p>car rent:{ele.car_rent}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* model */}
      {/* -----------------------------Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
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
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Thankyou
              </h1>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Thankyou for your valueable feedback
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewstatus;
