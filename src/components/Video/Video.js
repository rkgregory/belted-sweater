import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../theme.css";
import "../Video/Video.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Video (props) {
  return (
    <React.Fragment>
      <Nav />

      <div className="video-container">
        <div className="video-vid">
        
        <iframe id="video-vid" src="https://www.youtube.com/embed/aVVBRGTI13k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Video;
