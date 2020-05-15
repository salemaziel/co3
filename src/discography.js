import React from "react";
import ContainerDisc from "./components/containerDisc";
import ContainerContact from "./components/containerContact";
import Embed from "react-song-embed";
import { Helmet } from "react-helmet";

import "./css/main2.css";

const Discography = () => (
  <React.Fragment>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>Chaotic Order Music: Discography</title>
      <meta
        name="description"
        content="Discography of Past Albums by Chaotic Order, metal band from San Diego, CA"/>
      <meta property="og:site_name" content="Chaotic Order Music" />
      <meta property="og:title" content="Chaotic Order Music Discography" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:description" content="Official Website for Metal Band Chaotic Order"/>
      <meta property="og:url" content="https://chaoticordermusic.com/discography"/>
      <meta property="twitter:card" content="summary_large_image" />
    </Helmet>
    {/*<div className="main">*/}
    <div id="wrapper">
      <Embed
        /*rel="preload"*/
        url="https://album.link/VdPNv59kZRQM8"
        height={52}
        dark
        style={{
          display: "fixed",
          position: "relative",
          zIndex: '20'
        }}
      />
      <div id="main">
        <div className="inner" style={{ height: "stretch" }}>
          <section
            id="home-section"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ContainerDisc />
            <ContainerContact
              id="containerContact"
              style={{ border: "none!important" }}
            />
          </section>
        </div>
      </div>
    </div>
    {/*</div>*/}
  </React.Fragment>
);
export default Discography;
