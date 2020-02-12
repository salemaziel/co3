import React from 'react'
import '../css/container02.module.css'
//import '../css/Rmusicjinkeindex.css'

import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'


//import SongLink from './mediaplayer/songlink'

//import ReactCardCarousel from 'react-card-carousel';

import TCardMobile from './tcardMobile'
import { Row, Col } from 'reactstrap';
import LazyLoad, { lazyload } from 'react-lazyload';


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
      id="container02" className="full screen" data-scroll-id="one" data-scroll-behavior="center"  >
        <Row>
          <Col style={{textAlign: "center", marginTop: '1rem', marginBottom: '1rem'}}>
            {/*<Spotify
              uri="spotify:album:6NwNaCmHzQNvTSi0hRpALe"
              / *size={{width: 650, height: 420}}* /
              view="list"
              theme="black"
            className="SpotifyPlayer" />*/}
          </Col>
          <LazyLoad offset={100}>
          <Col className="nomobile">
            <TContentCards01/>
          </Col>
          </LazyLoad>
          <LazyLoad offset={100}>
          <Col className="mobile-slider"  style={{display: 'none'}}>
              <TCardMobile />
          </Col>
          </LazyLoad>
          <LazyLoad offset={100}>
          <Col className="nomobile">
            <TContentCards02/>
          </Col>
          </LazyLoad>
          
        </Row>
        <Row>
            <Col style={{
            textAlign: "center", 
            marginTop: '1rem', 
            marginBottom: '1rem'
            }}>
              {/*<a href="/discography" style={{
                            color: "white",
                            fontSize: "2em",
                            fontVariant: "small-caps",
                            }}>View Artist Discography</a>*/}
                
            </Col>

        </Row>
        
      </div>
      )
    }
}

export default Container02

