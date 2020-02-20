import React, { Component } from 'react'
import '../css/containerDiscography.module.css'

import Tcontentdisc2row1 from './tcontentcardsdisc2row1'
import Tcontentdisc2row2 from './tcontentcardsdisc2row2'

import { FaAngleLeft } from 'react-icons/fa'

import Glplogo from '../images/song-art/global-lighting-album/Chaoticorder.png'


import TCardMobile from './tcardMobile01b'
import { Row, Col } from 'reactstrap';

import Helmet from 'react-helmet'

import { Link } from 'react-router-dom'

//export default class Discography extends Component {
class Discography extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
      return (
        <div 
      id="containerDisc" className="container default full screen" data-scroll-id="one" data-scroll-behavior="center"  >
        <div className="inner">
        {/*<Row style={{
                display: 'flex',
        width: 'inherit', }}>*/}
        <Row className="backrow">
            <Col className="backcol">
                <Link to="/" 
                      style={{
                            color: "white",
                            fontSize: "3em",
                            justifyContent: 'center',
                            }}>
                              <FaAngleLeft className="back01"/>
                              <FaAngleLeft className="back02"/>
                </Link>
            </Col>
        </Row>

        <Row className="glplogo">
            <Col>
              <img className="glplogo" src={Glplogo} alt='' /*mode='fit' */ />
            </Col>
        </Row>
        <Row className="glpsongs">
          <Col className="nomobile2">
            <Tcontentdisc2row1 />
                          </Col>
         {/* <Col className="mobile-slider2"  style={{display: 'none'}}>
              <TCardMobile />
                          </Col>*/}
          <Col className="nomobile2">
            <Tcontentdisc2row2 />
                        </Col>
          
          
        </Row>
        {/*</Row>*/}
                          </div>
      </div>
      
      )
    }
}

export default Discography

