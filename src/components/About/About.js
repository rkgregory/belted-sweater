import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
import "../theme.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import aboutImg from "../../resources/yosef-1.jpg";
import Gallery from "../Gallery/Gallery";
import CrownEmote from "../../resources/crown-emote.png";
import ThroneEmote from "../../resources/throne-emote.png";
import BladeEmote from "../../resources/blade-emote.png";

function About(props) {
  return (
    <React.Fragment>
      <Nav />

      <div className="about-container">
        <div className="about-h-container">
          <h1 className="about-header">BELTED SWEATER</h1>
          <h2 className="about-bio">Belted Sweater is the solo project of Los Angeles based drummer Christopher Patrick Gregory. His debut LP, I'm fucking delightful, sounds like if Henry Rollins was in the Pet Shop Boys but with live drums and even gayer lyrics, chronicling terribly humiliating Grindr hookups and free clinic visits; basically Blood on the Tracks in the age of anonymous Craigslist encounters. He tracked all the instruments himself, like a moderately chubby amalgam of late period, leather daddy Trent Reznor and Dirty Mind-era Prince, using acoustic drums, synths and hoarse shouting.</h2>
          {/* <h2 className="about-sub-header">
            <img src={BladeEmote} className="title-emote"></img>
            <p className="key-text">ENGINEER</p>
            <img src={CrownEmote} className="title-emote"></img>
            <p className="key-text">PRODUCER</p>
            <img src={ThroneEmote} className="title-emote"></img>
            <p className="key-text">SONGWRITER</p>
          </h2> */}
          <Gallery />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default About;
