import React, { Component } from 'react'

import './css/main2.css'
import './css/Rmusicjinkeindex.css'
import './css/Rmusic.css'
import './App.css'
import Containerheader from './components/containerHeader'
import Container01 from './components/container01'
import Container02 from './components/container02'
import ContainerBio from './components/containerBio'
import Container04 from './components/container04'
import ContainerFooter from './components/containerFooter'

import Embed from 'react-song-embed'

import Helmet from 'react-helmet'
import Albumcover from './images/album-cover2.jpg'


export default class Home extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      playlist: null,
//      playlistIsPlaying: false,
//      currentSongIndex: 0,
//      theme: 'spotify'
//    }
//    this.updatePlaylist = this.updatePlaylist.bind(this)
//    this.receiveStateUpdates = this.receiveStateUpdates.bind(this)
//    this.handleThemeChange = this.handleThemeChange.bind(this)
//  }

  render() {
    return (
      <React.Fragment>
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Chaotic Order Music: Feed The People - Available Now!</title>
            <meta name="description" content="Official Website for Chaotic Order, metal band from San Diego, CA" />
            <meta property="og:site_name" content="Chaotic Order Music" />
            <meta property="og:title" content="Chaotic Order Music" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={Albumcover} />
            <meta property="og:description" content="Official Website for Metal Band Chaotic Order" />
            <meta property="og:url" content="https://chaoticordermusic.com" />
            <meta property="twitter:card" content="summary_large_image" />
          </Helmet>
        <div className="main">
            <div id="wrapper">
              <Embed 
                  url="https://album.link/VdPNv59kZRQM8" 
                  height={52} 
                  dark 
                  style={{
                      display: 'fixed', 
                    position: 'relative',
                }} />
                <div id="main">
                    <div className="inner">
                    <section id="home-section">
                      <Containerheader />

                      <Container01 />

                      <Container02 />

                      <ContainerBio />
                      <Container04 />

                    
                    <ContainerFooter/>
                    </section>

                    </div>
                    
                  </div>
              </div>
        </div>
      </React.Fragment>
      
    )
  }

//  updatePlaylist(playlist, currentSongIndex) {
//    // New playlist received, get array containing song sources
//    playlist = playlist.map(song => song.src)
//    if (Number.isInteger(currentSongIndex)) {
//      if (JSON.stringify(playlist) !== JSON.stringify(this.state.playlist))
//        this.setState({ playlist, playlistIsPlaying: true, currentSongIndex: currentSongIndex })
      // Not new playlist, just toggling play or pause
//      else this.setState({ playlistIsPlaying: !this.state.playlistIsPlaying })
      // New Song index
//      if (currentSongIndex !== this.state.currentSongIndex) this.setState({ currentSongIndex })
//    } else {
//      if (JSON.stringify(playlist) !== JSON.stringify(this.state.playlist))
//        this.setState({ playlist, playlistIsPlaying: true, currentSongIndex: 0 })
//      else this.setState({ playlistIsPlaying: !this.state.playlistIsPlaying })
//    }
//  }

//  handleThemeChange(event) {
//    this.setState({theme: event.target.value})
//  }

//  receiveStateUpdates(payload) {
//    this.setState(payload)
//  }
}

