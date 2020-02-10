import React from 'react'
import '../css/container02.module.css'
import '../css/Rmusicjinkeindex.css'

import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'


//import SongLink from './mediaplayer/songlink'

//import ReactCardCarousel from 'react-card-carousel';

import TCardMobile from './tcardMobile'
import { Row, Col } from 'reactstrap';


import { Link } from 'react-router-dom'

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
          <Col className="nomobile">
            <TContentCards01/>
          </Col>
          <Col className="mobile-slider"  style={{display: 'none'}}>
              <TCardMobile />
          </Col>
          <Col className="nomobile">
            <TContentCards02/>
          </Col>
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
                <Link to="/discography" style={{
                            color: "white",
                            fontSize: "2em",
                            fontVariant: "small-caps",
                            }}>View Artist Discography </Link>
            </Col>

        </Row>
          
        </Row>
        
        
      </div>
      )
    }
}

export default Container02

