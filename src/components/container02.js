import React from 'react'
import '../css/container02.css'

import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'
import Logo from '../images/logo-white-huge.png'

 

import TCardMobile01b from './tcardMobile01b'
import { Row, Col } from 'reactstrap';


const Container02 = () => (

        <div 
      id="container02" className="container default full screen" data-scroll-id="one" data-scroll-behavior="center">
        <div className="inner">
        {/*<Row className="songheaderRow" > 
          <Col>
              <img className="songheader" src={Logo} alt='' />
              <p className="songheader" >
                  Feed The People
              </p>
          </Col>
           
</Row>*/}
        
        <Row className="ftpsongs">
            
              <Col className="nomobile">
                <TContentCards01/>
              </Col>

              <Col className="mobile-slider" >
                  <TCardMobile01b />
              </Col>
          
              <Col className="nomobile">
                  <TContentCards02/>
              </Col>
          
      </Row>
      
        </div>
      </div>
)

export default Container02

