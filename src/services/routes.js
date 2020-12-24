import React from "react";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import Shows from "../components/Shows/Shows";
import Map from "../components/Map/Map";
import Stems from "../components/Stems/Stems";
import TheDullBlade from "../components/TheDullBlade/TheDullBlade";
import Join from "../components/Join/Join";
import RequestedShows from "../components/Map/RequestedShows";
import Video from "../components/Video/Video";
import Bio from "../components/Bio/Bio";
import News from "../components/News/News";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/bio": () => <Bio />,
  "/contact": () => <Contact />,
  "/shows": () => <Shows />,
  "/news": () => <News />,
  // "/map": () => <Map />,
  // "/stems": () => <Stems />,
  // "/thedullblade": () => <TheDullBlade />,
  "/join": () => <Join />,
  "/video": () => <Video />,
  // "/requested-shows": () => <RequestedShows />,
};
export default routes;
