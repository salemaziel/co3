import React from 'react'
import '../css/containerGLP.css'
import Glpalbum from '../images/song-art/global-lighting-album/album-cover-glp.jpg'

import { Link } from 'react-router-dom'

import { Row, Col } from 'reactstrap'


const ContainerGLP = () => (
        <div id="ContainerGLP" data-scroll-id="three" data-scroll-behavior="center" className="container columns full screen">
        <div id="inner" >
          
          <div className="afterSpacer" >
            <Row className="firstalbumHeader"
            style={{
               
            }}>
              <Col className="firstalbumtitle">
                  <h1 className="style1">
                      <span className="glpspan">Global Lighting Project 2016</span>
                  </h1>
            
                  <h2 id="text07" className="style1">
                      Chaotic Order
                  </h2>
                </Col>
            <Col>
            <Link to="/discography01" style={{
                            color: "white",
                            fontSize: "2em",
                            fontVariant: "small-caps",
                            justifyContent: "center",
                            marginTop: "50px",
                          
                            }}><img
                                className="firstalbum"
                                src={Glpalbum}
                                /*mode="fit"*/></img> 
              </Link>
          </Col>
          </Row>
          <Row className="firstalbumHeader" /*style={{display: 'flex', width: '350px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}/*className="oldAlbumText"*/ >
            <Col className="firstalbumtitle">
            <div className="proceeds">
            <p className="proceeds" /*id="text10" className="style2"*/ /*className={ContainerGLPStyles.style2} */ /*align= "justify"*/
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
            </div>
            </Col>
            </Row>
          </div>
        </div>
      </div>
      )

export default ContainerGLP