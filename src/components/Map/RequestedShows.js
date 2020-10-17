import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.css";
import MapChart from "./MapChart";
import { postCityState, getAllCityStates } from "../../services/requestService";

import LottieAnimation from "../LottieAnimation/LottieAnimation";

import loadingLottie from "../../lotties/loading-wheel.json";

// import { checkValidEmail, checkValidName } from "../../services/util";

// import RequestShow from "./RequestShow";

import "./Map.css";

// import allStates from "./data/allstates.json";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function RequestedShows(props) {
  const [requestData, setRequestData] = useState([]);
  const [showRequestData, setShowRequestData] = useState(false);

  //   const [showMapChart, setShowMapChart] = useState(true);

  const [showLoading, setShowLoading] = useState(false);

  useEffect(async () => {
    // show loading wheel
    setShowLoading(true);

    let reqData = await getAllCityStates();

    console.log("RESP: " + JSON.stringify(reqData));

    setRequestData(reqData.data);

    console.log(requestData);

    // not loading anymore
    setShowLoading(false);
    setShowRequestData(true);
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <div className="map-container">
        <div className="map-selected-content">
          {!showLoading && (
            <h1 className="map-chart-header">REQUESTED SHOWS</h1>
          )}
          <div className="btns-container">
            {showRequestData &&
              requestData.map((entry) => (
                <div>
                  <p className="request-data">
                    {entry.city.toUpperCase()}, {entry.state.toUpperCase()}:{" "}
                    {entry.count + 1}
                  </p>
                </div>
              ))}

            {showLoading && <LottieAnimation src={loadingLottie} width={250} />}
          </div>
        </div>
      </div>

      {!showLoading && <Footer />}
    </React.Fragment>
  );
}

export default RequestedShows;
