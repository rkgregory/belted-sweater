import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./News.css";
import "../theme.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function News(props) {
  return (
    <React.Fragment>
      <Nav />

      <div className="container shows-container">
        <div className="content-wrapper">
          <h1 className="shows-header">NEWS</h1>

          {/* copy and paste from lines 18 to 21 to make a new post */}
          <div className="news-post">
            <h2 className="news-title">TODAY'S TERRIBLE HITS <span className="news-date">FEBRUARY 15, 2021</span> </h2>
            <p className="news-body">The aging homosexual charm offensive is on the new Terrible Records playlist with a bunch of other awesome tracks. Check it out <a href="https://open.spotify.com/playlist/2z60pBsqsjfQP3szueJRsE" target="_blank">here.</a></p>
          </div>
          
          <div className="news-post">
            <h2 className="news-title">NEW WEBSITE UPDATES <span className="news-date">DECEMBER 24, 2020</span> </h2>
            <p className="news-body">OMG</p>
          </div>

          

          {/* <div className="news-post">
            <h2 className="news-title">CHRIS GREGORY MAKES STUPID NEWS SECTION ON WEBSITE / <span className="news-date">DECEMBER 24, 2020</span> </h2>
            <p className="news-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, a velit. Aut molestias ab nisi ratione exercitationem recusandae, et ex consectetur minima itaque error modi repellendus deserunt earum. Reiciendis quia in eveniet sit consectetur ducimus eos doloribus recusandae distinctio, dolores, veniam minus cupiditate facilis assumenda dignissimos, eligendi dolore accusantium expedita.</p>
          </div> */}

          {/* <div className="news-post">
            <h2 className="news-title">CHRIS GREGORY MAKES STUPID NEWS SECTION ON WEBSITE / <span className="news-date">DECEMBER 24, 2020</span> </h2>
            <p className="news-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, a velit. Aut molestias ab nisi ratione exercitationem recusandae, et ex consectetur minima itaque error modi repellendus deserunt earum. Reiciendis quia in eveniet sit consectetur ducimus eos doloribus recusandae distinctio, dolores, veniam minus cupiditate facilis assumenda dignissimos, eligendi dolore accusantium expedita.</p>
          </div> */}
          
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default News;
