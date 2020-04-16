import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'

import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'

import { Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';

//import Crawl from 'react-star-wars-crawl'
//import 'react-star-wars-crawl/lib/index.css'
//import '../css/tcontencardsrow1.css'

const song = [
    {
        title: "Where Were You",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118752/chaoticorder-globallightingproject/1-where-were-you_ufda2c.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118300/chaoticorder-globallightingproject/1-WHERE_WERE_YOU_wgoc56.mp3",
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026965/chaoticorder-feedthepeople/glp-first-album/1_WHERE_WERE_YOU_-Lyrics_t6xfzu.jpg'
    },
    {
        title: 'Wake Up',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118752/chaoticorder-globallightingproject/2-wake-up_h0tc9z.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/2-WAKE_UP_nnmu69.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026966/chaoticorder-feedthepeople/glp-first-album/2_WAKE_UP_-Lyrics_wvg3eu.jpg'

    },
    {
        title: 'Tears',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118752/chaoticorder-globallightingproject/3-Tears_fym2g1.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/3-TEARS_lnpihr.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026965/chaoticorder-feedthepeople/glp-first-album/3_TEARS_-Lyrics_wtebwq.jpg',
    },
    {
        title: 'Dirty Mine',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/4-Dirty-Mine_g35szv.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118307/chaoticorder-globallightingproject/4-DIRTY_MINE_rjsmiu.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026965/chaoticorder-feedthepeople/glp-first-album/4_DIRTY_MINE_-Lyrics_xrw7qb.jpg'

    },
    {
        title: 'Primitive Man',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/5-Primitive-Man_gfmwue.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118299/chaoticorder-globallightingproject/5-PRIMITVE_MAN_lrsghw.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026967/chaoticorder-feedthepeople/glp-first-album/5_PRIMITIVE_MAN_-Lyrics_yww0ot.jpg',

    },
]


class Tcontentdisc2row1 extends React.Component {


    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            title: '',
            singer: '',
            thumbnail: '',
            audio: '',
            picture: '',
            lyric: '',

        };
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            title: '',
            singer: '',
            thumbnail: '',
            audio: '',
            picture: '',
            lyric: '',
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
                <Modal
                    visible={this.state.modalIsOpen}
                    width="1000" height="800"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    
                    <Row style={{ display: 'flex'}}>
                    
                        <div style={{
                            backgroundImage: `url(${this.state.picture})` ,
                            height: "1000px", 
                            width: "1000px",
                            maxHeight: '100vh',  
                            backgroundSize: 'cover', 
                            backgroundPosition: 'top center',
                            } }>

                            <div style={{ 
                                position: 'absolute',
                                left: '8%',
                                top: '73%',
                            }}>
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
                            </div>
                        </div>
                        
                    </Row>
                    

                </Modal>
                <Row style={{display: 'flex'}}>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[0].picture}
                            title='Where Were You'
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
                                picture: song[0].picture
                            })} }
                            
                        />
                            
                       
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[1].picture}
                            title='Wake Up'
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
                                picture: song[1].picture
                            })} }
                            


                        />
                    </Col > <Col xs="2" lg="2" md="6">
                    <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={song[2].picture}
                        title='Tears'
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
                            picture: song[2].picture
                        })} }
                        

                    />
                </Col> <Col xs="2" lg="2" md="6">
                    <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={song[3].picture}
                        title='Dirty Mine'
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
                            picture: song[3].picture
                        })} }
                        

                    />
                </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[4].picture}
                            title='Primitive Man'
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
                                picture: song[4].picture
                            })} }
                            

                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Tcontentdisc2row1
