import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-wrapper">
          <p className="footer-company-name">BELTED SWEATER</p>

          {/* <div className="footer-links">
            <p className="footer-links-title">Links</p>
            <a href="/" className="footer-link">
              <p>Home</p>
            </a>
            <a href="/about" className="footer-link">
              <p>About</p>
            </a>
          </div> */}

          <div className="footer-icons">
            <a
              href="https://www.instagram.com/beltedsweater/"
              target="_blank"
            >
              <i className="fa fa-instagram footer-icon"></i>
            </a>
            <a
              href="https://twitter.com/belted_sweater"
              target="_blank"
            >
              <i className="fa fa-twitter footer-icon"></i>
            </a>
            <a
              href="https://open.spotify.com/artist/6wbfybaJLHBTnqeMEk7B9z"
              target="_blank"
            >
              <i className="fa fa-spotify footer-icon"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCZRyFVQuyDiq3klCeRHxN4g"
              target="_blank"
            >
              <i className="fa fa-youtube footer-icon"></i>
            </a>
            <a
              href="https://music.apple.com/us/artist/belted-sweater/1531354292"
              target="_blank"
            >
              <i className="fa fa-apple footer-icon"></i>
            </a>
            <a
              href="https://soundcloud.com/christopher-gregory-197663152"
              target="_blank"
            >
              <i className="fa fa-soundcloud footer-icon"></i>
            </a>
            <a
              href="https://beltedsweater.bandcamp.com/"
              target="_blank"
            >
              <i className="fa fa-bandcamp footer-icon"></i>
            </a>
          </div>
          <p className="footer-text">&copy; 2020 BELTED SWEATER</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
