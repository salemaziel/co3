import React from 'react'
import '../css/containerHeader.module.css'

import Logo from '../images/logo-white-huge.png'
import Albumcover from '../images/album-cover2.jpg'
import { Row } from 'reactstrap'
import { Col } from 'reactstrap'


class Containerheader extends React.Component {
    render() {
      return (
        <div id="containerHeader" className="container full screen" data-scroll-id="one" data-scroll-behavior="center"  /*className={container01Styles.columns} className={container01Styles.full} className={container01Styles.full.screen}*/>
          <div className="inner">
            <Row className="mainrow">
              <Col xs="5" className='albumpromo'>
                <img className='albumpromo' 
                  src={Albumcover} 
                  alt=''
               />
              </Col>
              <Col xs="5" className="albumlogo" /*className={containerHeaderStyles.inner}*/> 
          
              <img className='albumlogo' src={Logo} alt='' /*mode='fit' */ />
                <p className="albumlogo"
             > Feed The People </p>
              </Col>
          </Row>
         </div>
        </div>
         
      )
    }
}

export default Containerheader