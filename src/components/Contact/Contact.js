import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import "../theme.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import FA from "react-fontawesome";

import loadingWheelLottie from "../../lotties/loading-wheel.json";

function Contact(props) {
  

  return (
    <React.Fragment>
      <Nav />
      {/* <img
        src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/photos/yosef-pic-4.jpeg"
        alt=""
        className="contact-img"
      /> */}
      <div className="contact-container">
        <div className="content-wrapper">
          <div className="contact-form-bg">
            <h1 className="shows-header">CONTACT</h1>

            <div className="container form-container text-left">
              <p className="contact-description">
              <a className="contact-email" href="mailto:beltedsweaterband@gmail.com">beltedsweaterband@gmail.com</a> 
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Contact;
