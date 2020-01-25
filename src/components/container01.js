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
      <div id="container01" className="full screen" data-scroll-id="one" data-scroll-behavior="center" style={{justifyContent: 'center'}} /*className={container01Styles.columns} className={container01Styles.full} className={container01Styles.full.screen}*/>
          
          
          <div /*className={container01Styles.inner} style={{justifyContent: 'center'}}*/>
            {/**<div className={container01Styles.afterSpacer}>**/}
                
              {/*<h2 id="text01" className={container01Styles.style1}>Feed The People</h2>*/}
              {/**<hr id="divider03" />**/}
              {/*<p id="text02" className={container01Styles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. </p>*/}
              {/**<ResponsivePlayer01 />**/}
              {/*<ReactWebMediaPlayer
	            width={500} height={350}
	            title="Chemtrails"
	            thumbnail={Chemtrails}
	            audio={Chemtrailsmp3}
	            logo={{
		            img: "../../images/logo-white.png",
		            href: "#"
	                }}
                />*/}
              <Mediaplayer01a />
           
            <Container style={{
                      paddingBottom: '10em',
                      justifyContent: 'center',
          }}>
          

          <Row /*style={{justifyContent: 'center'}}*/>
              <Col xs="6">
              </Col>
              <Col xs="6">
              <SpotifyPlayer
                uri="spotify:album:6NwNaCmHzQNvTSi0hRpALe"
                size={{width: 376, height: 400}}
                theme='black'
              />
              {/*<SpotifyPlayer
                uri="spotify:track:7sxyTA1EIoeEENTkMHQPmd"
                size={{width: 376, height: 400}}
                theme='black'
              />*/}
              </Col>
              
            </Row>
          </Container>
              <br />
              <hr />
              {/*<Rmusic2 />*/}
              

              
          </div>
          </div>
      )
    }
}

export default Container01