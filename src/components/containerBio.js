import React from 'react'
import containerBioStyles from '../css/containerBio.module.css'
import Glpalbum from '../images/song-art/global-lighting-album/album-cover-glp.jpg'

import { Link } from 'react-router-dom'


class ContainerBio extends React.Component {
    render() {
      return (
        <div id="containerBio" data-scroll-id="three" data-scroll-behavior="center" className="container columns full screen">
        <div id="inner" >
          <span />
          <div className="afterSpacer" >
            <h2 id="text07" className="style1" /*style={{
              marginBottom: "1rem",
              color: "#7c795d",  fontSize: '45px', fontWeight: 'normal', lineHeight: '48px', margin: 0}}*/ >Chaotic Order </h2>
            <h3 className="style4" style={{
                                      fontVariant: "small-caps",
            }}><strong>Seeking Order in Chaos</strong></h3>
            <p id="text10" className="style2" /*className={containerBioStyles.style2}  align= "justify"
            style={{color: 'white', fontSize: '18px', lineHeight: '32px', margin: "0 0 24px"}}*/
            >
            <br/>
            <br/>
            <br/>
            <br/>
                All proceeds of Chaotic Order go to funding the Global Lighting Project, a 501(c)3 nonprofit working toward bringing sustainable, renewable light and energy sources to our brothers and sisters in communities around the world.
           <br/>
           <br/>
           <br/>
              Chaotic Order's first album, released in 2016, was named after the seedling nonprofit. 
            </p>
            
            <Link to="/discography" style={{
                            color: "white",
                            fontSize: "2em",
                            fontVariant: "small-caps",
                            justifyContent: "center",
                            marginTop: "50px",
                          
                            }}><img style={{
                              marginTop: "50px"

                            }}src={Glpalbum} width="300px" mode="fit"></img> </Link>
          </div>
        </div>
      </div>
      )
    }
}

export default ContainerBio