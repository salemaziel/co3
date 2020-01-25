import React from 'react'
import container01Styles from '../css/container01.module.css'
import '../css/Rmusicjinkeindex.css'

import ResponsivePlayer01 from './responsiveplayer01'
import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'
import Mediaplayer01a from './mediaplayer/media01a'

//import ReactWebMediaPlayer from 'react-web-media-player';
import Chemtrails from '../images/song-art/Chemtrails.jpg'
//import Chemtrailsmp3 from '../audio/1-Chemtrails.mp3'
import Logowhite from '../images/logo-white.png'

import Visualizer from './visualizer'
import SpotifyPlayer from 'react-spotify-player';
//import SongLink from './mediaplayer/songlink'


import { Container, Row, Col } from 'reactstrap';



//import Rmusic2 from './Rmusic2'

class Container01 extends React.Component {
    render() {
      return (
      <div 
      id="container01" className="full screen" data-scroll-id="one" data-scroll-behavior="center"  >
        <Row>
          <Col style={{textAlign: "center"}}>
            <SpotifyPlayer />
          </Col>
          <Col>
            <TContentCards01/>
          </Col>
          <Col>
            <TContentCards02/>
          </Col>
        </Row>
      </div>
      )
    }
}

export default Container01