import React, { Component } from 'react'
import ContainerDisc from './components/containerDisc'
import Embed from 'react-song-embed'
import Helmet from 'react-helmet'

//export default class Discography extends Component {
//    render() {
//        return (
  const Discography = () => (
          <React.Fragment>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Chaotic Order Music: Discography</title>
                <meta name="description" content="Discography of Past Albums by Chaotic Order, metal band from San Diego, CA" />
                <meta property="og:site_name" content="Chaotic Order Music" />
                <meta property="og:title" content="Chaotic Order Music" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="" />
                <meta property="og:description" content="Official Website for Metal Band Chaotic Order" />
                <meta property="og:url" content="https://chaoticordermusic.com/discography" />
                <meta property="twitter:card" content="summary_large_image" />
              </Helmet>
            {/*<div className="main">*/}
                <div id="wrapper">
                  <Embed 
                      url="https://album.link/VdPNv59kZRQM8" 
                      height={52} 
                      dark 
                      style={{
                          display: 'fixed', 
                        position: 'relative',
                    }} />
                    <div id="main">
                        <div className="inner">
                        <section id="home-section" style={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      /*maxWidth: "100%"*/
                                                      
                        }}>
                          <ContainerDisc />
    
                        </section>
    
                        </div>
                        
                      </div>
                  </div>
                    {/*</div>*/}
          </React.Fragment>
          
        )
export default Discography