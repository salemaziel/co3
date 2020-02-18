import React, { Component } from 'react'
import '../css/container01.module.css'

import { Row, Col } from 'reactstrap'

import TcardMobile01b from './tcardMobile01b'



class Container01 extends React.Component {
    render() {
      return (
        <div /*id="container01" data-scroll-id="two" data-scroll-behavior="center" className="container default full screen"*/>
        
            <Row style={{display: 'block'}}>
              <Col>
            <TcardMobile01b />
            </Col>
            </Row>
         
      </div>
      )
    }
}

export default Container01



