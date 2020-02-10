import React, { Component } from 'react'
import '../css/containerDiscography.module.css'
import '../css/Rmusicjinkeindex.css'

import Tcontentdisc2row1 from './tcontentcardsdisc2row1'
import Tcontentdisc2row2 from './tcontentcardsdisc2row2'



//import ReactCardCarousel from 'react-card-carousel';

import TCardMobile from './tcardMobile'
import { Row, Col } from 'reactstrap';

import Helmet from 'react-helmet'

import { Link } from 'react-router-dom'

export default class Discography extends Component {
//class Discography extends React.Component {
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
      id="containerDisc" className="full screen" data-scroll-id="one" data-scroll-behavior="center"  >

        <Row>
        <Row>
            <Col style={{
            textAlign: "left", 
            marginTop: '1rem', 
            marginBottom: '1rem'
            }}>
              <Link to="/" style={{
                            color: "white",
                            fontSize: "2em"
                            }}>Back</Link>
            </Col>

        </Row>
          <Col style={{textAlign: "center", marginTop: '1rem', marginBottom: '1rem'}}>
          </Col>
          <Col className="nomobile">
            <Tcontentdisc2row1 />
          </Col>
          <Col className="mobile-slider"  style={{display: 'none'}}>
              <TCardMobile />
          </Col>
          <Col className="nomobile">
            <Tcontentdisc2row2 />
          </Col>
          
          
        </Row>
        
        
      </div>
      
      )
    }
}

//export default Discography

