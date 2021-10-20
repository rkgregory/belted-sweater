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
            <h2 className="news-title">FREE SHOW 9/12 AT LITTLE JOY <span className="news-date">SEPTEMBER 3, 2021</span> </h2>
            <p className="news-body">  With Hurt Hawks and Witchborn, proof of vaccination required, 21+, let's shred.</p>
            </div>
          <div className="news-post">
            <h2 className="news-title">HAPPY SUNDAYS MUSIC FESTIVAL <span className="news-date">AUGUST 20, 2021</span> </h2>
            <p className="news-body">  Super stoked to be playing this years Happy Sundays Free Music Festival in Long Beach on 8/29.  There's a ton of killer bands all day, a shuttle between venues, and its free! I'm playing the DiPiazza's stage at 6pm.</p>
            </div>
          <div className="news-post">
            <h2 className="news-title">DEBUT LIVE SHOW THIS THURSDAY!!! <span className="news-date">AUGUST 9, 2021</span> </h2>
            <p className="news-body">  Finally playing my first solo show this Thursday at the Que Sera for Queer Thursdays.  I’ll be shouting over ostentatious drum fills with some awesome bands, queer artists and also there’s a dance party so let’s boogie!  #MASK4MASK</p>
            </div>
          <div className="news-post">
            <h2 className="news-title">POZ IS OUT NOW!!! <span className="news-date">JUNE 25, 2021</span> </h2>
            <p className="news-body"> Poz, my new song/sweet sweet collaboration with the HIRS Collective is out now! It’s on their new record, The Third 100 Songs, which is ridiculously amazing and I’m stoked to be a small part of it, shouting over their sweet riffs. <a href="https://open.spotify.com/track/3aNh6OlkPngB0ZWFq2URGj?si=193eedb0f1f4425a">Check it out!</a></p>
            </div>
          <div className="news-post">
            <h2 className="news-title">NEW INTERVIEW ON THE NEW HELL BENT FOR METAL EPISODE <span className="news-date">JUNE 14, 2021</span> </h2>
            <p className="news-body">I had an awesome conversation about the making of I’m fucking delightful with Matt on the new episode of the LGBT+ metal podcast Hell Bent for Metal.  We discuss loving both the Dillinger Escape Plan and Fifth Harmony, why it’s important to hear super queer lyrics,  and making the record my closeted fourteen year old self would want to listen to, basically Power, Corruption & Lies but with Al Cisneros on vocals and Damon Che on drums.  Plus I tried not to ramble and only made a few Dad jokes. Listen on <a href="https://podcasts.apple.com/us/podcast/hell-bent-for-metal/id1538404697?i=1000525401515" target="_blank">Apple Podcasts.</a></p>
            </div>
          <div className="news-post">
            <h2 className="news-title">SWEET COLLAB WITH THE HIRS COLLECTIVE "POZ" COMES OUT 6/25 <span className="news-date">JUNE 4, 2021</span> </h2>
            <p className="news-body">So I contributed vocals and lyrics to a new, unreleased HIRS Collective song, Poz.  It’s about pharmaceutical price gouging during the onset of the AIDS crisis.  It’s on their new compilation album, The Third 100 Songs, featuring sweet collabs with members of the Screaming Females, RVIVR, & Thou among others, and comes out 6/25 on Get Better Records. Pre order it <a href="https://getbetterrecords.com/products/the-hirs-collective-third-100-songs" target="_blank">here.</a></p>
            </div>
          <div className="news-post">
            <h2 className="news-title">AWESOME INTERVIEW IN THE DEBUT ISSUE OF FACEFUCK FANZINE <span className="news-date">MARCH 24, 2021</span> </h2>
            <p className="news-body">Check it out <a href="https://www.instagram.com/facefuck.fanzine/" target="_blank">here.</a></p>
            </div>
          <div className="news-post">
            <h2 className="news-title">SWEET ALBUM REVIEW FROM GIRL AT THE ROCK SHOWS <span className="news-date">FEBRUARY 25, 2021</span> </h2>
            <p className="news-body">Read it <a href="https://girlattherockshows.com/2021/02/24/belted-sweater-im-fucking-delightful/" target="_blank">here.</a></p>
          </div>
          <div className="news-post">
            <h2 className="news-title">TODAY'S TERRIBLE HITS <span className="news-date">FEBRUARY 15, 2021</span> </h2>
            <p className="news-body">The aging homosexual charm offensive is on the new Terrible Records playlist with a bunch of other awesome tracks. Check it out <a href="https://open.spotify.com/playlist/2z60pBsqsjfQP3szueJRsE" target="_blank">here.</a></p>
          </div>
          <div className="news-post">
            <h2 className="news-title">AWESOME ALBUM WRITE UP WITH LIMP WRIST REFERENCES!!! <span className="news-date">DECEMBER 4, 2020</span> </h2>
            <p className="news-body">F YES. <a href="https://newnoisemagazine.com/new-noise-bandcamp-picks-december-2020/">Check it here.</a> </p>
          </div>
          <div className="news-post">
            <h2 className="news-title">NEW WEBSITE UPDATES <span className="news-date">DECEMBER 1, 2020</span> </h2>
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
