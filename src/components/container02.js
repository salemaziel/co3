import React from 'react'
import '../css/container02.module.css'
//import '../css/Rmusicjinkeindex.css'

import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'
import Logo from '../images/logo-white-huge.png'

 
//import SongLink from './mediaplayer/songlink'

//import ReactCardCarousel from 'react-card-carousel';

import TCardMobile01b from './tcardMobile01b'
import { Row, Col } from 'reactstrap';
import LazyLoad from 'react-lazyload';


class Container02 extends React.Component {


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
      id="container02" className="container default full screen" data-scroll-id="one" data-scroll-behavior="center">
        <div className="inner">
        <Row className="songheaderRow" > 
          <Col>
              <img className="songheader" src={Logo} alt='' /*mode='fit' */ />
              <p className="songheader" >
                  Feed The People
              </p>
          </Col>
           
        </Row>
        
        <Row className="ftpsongs">
          {/*<Col style={{textAlign: "center", marginTop: '1em', marginBottom: '1rem', paddingTop: '1em'}} />*/}
            
          {/*<LazyLoad offset={100}>*/}
              <Col className="nomobile">
                <TContentCards01/>
              </Col>
          {/*</LazyLoad>*/}

          {/*<LazyLoad offset={50}>*/}
              <Col className="mobile-slider"  /*style={{display: 'none'}}*/>
                  <TCardMobile01b />
              </Col>
          {/*</LazyLoad>*/}
          
          {/*<LazyLoad offset={50}>*/}
              <Col className="nomobile">
                  <TContentCards02/>
              </Col>
          {/*</LazyLoad>*/}
          
      </Row>
      
      {/*<Row>
            <Col style={{
            textAlign: "center", 
            marginTop: '3rem', 
            marginBottom: '3rem'
            }}>
              
                
            </Col>

          </Row>*/}
        </div>
      </div>
      )
    }
}

export default Container02

