import React from 'react'
import '../css/container02.module.css'
//import '../css/Rmusicjinkeindex.css'

import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'
import Logo from '../images/logo-white-huge.png'

 
//import SongLink from './mediaplayer/songlink'

//import ReactCardCarousel from 'react-card-carousel';

import TCardMobile from './tcardMobile'
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
        
        <Row className="songheaderRow" > 
          <Col>
              <img className="songheader" src={Logo} alt='' /*mode='fit' */ />
              <p 
               id="text04" 
               className="style4" 
               style={{
                 fontWeight: '500',
                 fontVariant: 'small-caps',
                 textAlign: 'center',
                 color: '#FCAC02 !important',
                 margin: '0',
                 fontSize: "2em"
               }}
             > Feed The People</p>
              </Col>
           
              </Row>
        <Row /*style={{  display: /*'flex',* /
          
          }}*/>
          <Col style={{textAlign: "center", marginTop: '1em', marginBottom: '1rem', paddingTop: '1em'}} />
            
          <LazyLoad offset={100}>
          <Col className="nomobile">
            <TContentCards01/>
          </Col>
          </LazyLoad>
          <LazyLoad offset={50}>
          <Col className="mobile-slider"  style={{display: 'none'}}>
              <TCardMobile />
          </Col>
          </LazyLoad>
          <LazyLoad offset={50}>
          <Col className="nomobile">
            <TContentCards02/>
          </Col>
          </LazyLoad>
          
        </Row>
        <Row>
            <Col style={{
            textAlign: "center", 
            marginTop: '3rem', 
            marginBottom: '3rem'
            }}>
              }
                
            </Col>

        </Row>
        
      </div>
      )
    }
}

export default Container02

