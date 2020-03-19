import React, { useState } from 'react'
import { TaggedContentCard } from 'react-ui-cards'


import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'

import { Collapse, Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';

import Crawl from 'react-star-wars-crawl'
import '../css/lyricCrawl.css'
import 'react-star-wars-crawl/lib/index.css'
//import '../css/tcontencardsrow1.css'


const song = [
    {
        title: "ChemTrails",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
        picture: "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        lyric: "Hay hay That’s a big old plane White lines in the sky, Making me wonder Hay hay Take the planes away They dirty the sky Making it Hotter Big O cans flying through the sky Sure know why it’s on my mind We talk about a better way All the lines all through the sky When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails Protecting us from bad sun rays Others say it’s such a haze Carbon dioxide from the planes Soot particulates are to blame When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails chem trails chem trails"
    },
    {
        title: 'Feed The People',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        lyric: 'Hay hay That’s a big old plane White lines in the sky, Making me wonder Hay hay Take the planes away They dirty the sky Making it Hotter Big O cans flying through the sky Sure know why it’s on my mind We talk about a better way All the lines all through the sky When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails Protecting us from bad sun rays Others say it’s such a haze Carbon dioxide from the planes Soot particulates are to blame When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails chem trails chem trails'

    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        lyric: 'Hay hay That’s a big old plane White lines in the sky, Making me wonder Hay hay Take the planes away They dirty the sky Making it Hotter Big O cans flying through the sky Sure know why it’s on my mind We talk about a better way All the lines all through the sky When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails Protecting us from bad sun rays Others say it’s such a haze Carbon dioxide from the planes Soot particulates are to blame When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails chem trails chem trails'

    },
    {
        title: 'Another Thing',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        lyric: 'Hay hay That’s a big old plane White lines in the sky, Making me wonder Hay hay Take the planes away They dirty the sky Making it Hotter Big O cans flying through the sky Sure know why it’s on my mind We talk about a better way All the lines all through the sky When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails Protecting us from bad sun rays Others say it’s such a haze Carbon dioxide from the planes Soot particulates are to blame When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails chem trails chem trails'


    },
    {
        title: 'Hate',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        lyric: 'Hay hay That’s a big old plane White lines in the sky, Making me wonder Hay hay Take the planes away They dirty the sky Making it Hotter Big O cans flying through the sky Sure know why it’s on my mind We talk about a better way All the lines all through the sky When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails Protecting us from bad sun rays Others say it’s such a haze Carbon dioxide from the planes Soot particulates are to blame When it all comes down to fait There’s nothing there that’s good for you They say the lines goanna make it rain It’s only a matter of time no lie chem trails chem trails chem trails'

    },
    
]


/*const Lyriccrawl = () => (
    <Crawl
     title=''
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
      "
    />
)*/



class TContentCards01 extends React.Component {


    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            id: '',
            title: '',
            singer: '',
            thumbnail: '',
            audio: '',
            picture: '',
            lyric: '',
            render: ''
        };
    }
    

 


    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            id: '',
            title: '',
            singer: '',
            thumbnail: '',
            audio: '',
            picture:'',
            lyric: '',
            render: ''

        });
    }

       

 

    render() {
        let {
            thumbnail,
            title,
            description,
            tags,
            ...other
        } = this.props;


        return (
            <div>
            {/*<React.Fragment>*/}
                <Modal
                    visible={this.state.modalIsOpen}
                    width="1000" height="800"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    
                    <Row style={{ display: 'flex'}}>
                    
                        <div style={{
                            backgroundImage: `url(${this.state.picture})` ,
                            height: "800px",
                            width: "1000px",
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center',
                            display: 'flex',
                            flexDirection: 'column'
                            }}
                        >
{/*<Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
>*/}

            
{/*</Collapse>*/}

    )
                            <div style={{ 
                                position: 'absolute',
                                left: '70%',
                                top: '50%',
                                /*marginLeft: '-110px',
                            marginTop: '370px'*/}}>
                                <ReactWebMediaPlayer
                                    width={200} height={200}
                                    title={this.state.title}
                                    thumbnail={this.state.thumbnail}
                                    audio={this.state.audio}
                                    vinyl={{
                                        img: this.state.thumbnail,
                                        rpm: 15}}
                                    style={{
                                            backgroundColor: "transparent",
                                            background: "transparent",
                                    }}
                                />
                                <button style={{zIndex: 2}}> See Lyrics </button>
                            </div>
                        </div>
                        <div>
                        
                        </div>
                    </Row>
                    

                </Modal>
                <Row style={{display: 'flex'}}>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[0].picture}
                            title='ChemTrails'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                title: song[0].title,
                                singer: song[0].singer,
                                thumbnail: song[0].thumbnail,
                                audio: song[0].audio,
                                picture: song[0].picture,
                                lyric: song[0].lyric
                            })} }
                        />


                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[1].picture}
                            title='Feed The People'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                title: song[1].title,
                                singer: song[1].singer,
                                thumbnail: song[1].thumbnail,
                                audio: song[1].audio,
                                picture: song[1].picture,
                                lyric: song[1].lyric
                            })} }


                        />
                    </Col > <Col xs="2" lg="2" md="6">
                    <TaggedContentCard
                        className="plzwork"
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={song[2].picture}
                        title='Burn'
                        description=''
                        tags={[
                            <FaPlay focusable="false" aria-hidden="true" />

                        ]}
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[2].title,
                            singer: song[2].singer,
                            thumbnail: song[2].thumbnail,
                            audio: song[2].audio,
                            picture: song[2].picture,
                            lyric: song[2].lyric
                        })} }

                    />
                </Col> <Col xs="2" lg="2" md="6">
                    <TaggedContentCard
                        className="plzwork"
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={song[3].picture}
                        title='Another'
                        description=''
                        tags={[
                            <FaPlay focusable="false" aria-hidden="true" />
                        ]}
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[3].title,
                            singer: song[3].singer,
                            thumbnail: song[3].thumbnail,
                            audio: song[3].audio,
                            picture: song[3].picture,
                            lyric: song[3].lyric
                        })} }

                    />
                </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[4].picture}
                            title='Hate'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />
                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                title: song[4].title,
                                singer: song[4].singer,
                                thumbnail: song[4].thumbnail,
                                audio: song[4].audio,
                                picture: song[4].picture,
                                lyric: song[4].lyric
                            })} }

                        />
                    </Col>
                </Row>
                {/*</React.Fragment>*/}
                </div>
        );
    }
}
export default TContentCards01
