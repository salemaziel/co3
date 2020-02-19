import React from 'react'
import '../css/containerBio.module.css'
import Glpalbum from '../images/song-art/global-lighting-album/album-cover-glp.jpg'

import { Link } from 'react-router-dom'

import { Row, Col, Container } from 'reactstrap'

class ContainerBio extends React.Component {
    render() {
      return (
        <div id="containerBio" data-scroll-id="three" data-scroll-behavior="center" className="container columns full screen">
        <div id="inner" >
          
          <div className="afterSpacer" >
            <Row className="firstalbumHeader"
            style={{
               
            }}>
              <Col className="firstalbumtitle">
            <h1 className="style1"><span className="glpspan">Global Lighting Project 2016</span></h1>
            <h2 id="text07" className="style1" /*style={{
              marginBottom: "1rem",
              color: "#7c795d",  fontSize: '45px', fontWeight: 'normal', lineHeight: '48px', margin: 0}}*/ >Chaotic Order </h2>
            {/*<h3 className="style4" style={{
                                      fontVariant: "small-caps",
            }}><strong>Seeking Order in Chaos</strong></h3>*/}
            </Col>
            <Col>
            <Link to="/discography" style={{
                            color: "white",
                            fontSize: "2em",
                            fontVariant: "small-caps",
                            justifyContent: "center",
                            marginTop: "50px",
                          
                            }}><img irst
                                className="firstalbum"
                                src={Glpalbum}
                                /*mode="fit"*/></img> 
              </Link>
          </Col>
          </Row>
          <Row /*style={{display: 'flex', width: '350px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}/*className="oldAlbumText"*/ >
            <Col>
            <p /*id="text10" className="style2"*/ /*className={containerBioStyles.style2} */ /*align= "justify"*/
           /* style={{color: 'white', fontSize: '1.3em', lineHeight: '32px', margin: "0 0 24px"}}*/
            >
            {/*<br/>
            <br/>
            <br/>
            <br/>*/}
                All proceeds of Chaotic Order go to funding the Global Lighting Project, a 501(c)3 nonprofit working toward bringing sustainable, renewable light and energy sources to our brothers and sisters in communities around the world.
           {/*<br/>
           <br/>
           <br/>*/}
              Chaotic Order's first album, released in 2016, was named after the seedling nonprofit. 
            </p>
            </Col>
            </Row>
          </div>
        </div>
      </div>
      )
    }
}

export default ContainerBio