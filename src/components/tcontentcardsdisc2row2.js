import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'


import { Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';
import { FaPlay } from 'react-icons/fa'

import ReactWebMediaPlayer from 'react-web-media-player';


const song=[

    {
        title: 'Pins and Needles',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118752/chaoticorder-globallightingproject/6-Pins-and-Needles_ry7kvk.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118311/chaoticorder-globallightingproject/6-PINS_AND_NEEDLES_qzmgra.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/6-Pins-and-Needles_ry7kvk.jpg'

    },
    {
        title: 'Goodbye',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/7-Goodbye_emp2lc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118309/chaoticorder-globallightingproject/7-GOODBYE_ym9sl3.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/7-Goodbye_emp2lc.jpg'

    },
    {
        title: 'Fooling Myself',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/8-Foolin-Myself_anc23n.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118307/chaoticorder-globallightingproject/8-FOOLING_MYSELF_fhsolw.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/8-Foolin-Myself_anc23n.jpg'

    },
    {
        title: 'Breathe',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/9-Breathe_ojuucg.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118303/chaoticorder-globallightingproject/9-BREATHE_oodelz.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/9-Breathe_ojuucg.jpg'

    },
    {
        title: 'I Still Love You',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/10-I-Still-Love-you_b8nar3.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118309/chaoticorder-globallightingproject/10-I_STILL_LOVE_YOU_hjwisv.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/10-I-Still-Love-you_b8nar3.jpg'

    }
]

class Tcontentdisc2row2 extends React.Component {
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
                    width="1000" 
                    height="800" 
                    effect="fadeInUp" 
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: 'flex'}}>
                        <div style={{ 
                            backgroundImage: `url(${this.state.picture})` ,
                            height: "800px", 
                            width: "1000px",  
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center'} }>
                            <div style={{ 
                                position: 'absolute',
                                left: '70%',
                                top: '50%',
                                /*left: '85%',
                                marginLeft: '-110px',
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

                            </div>

                        </div>
                    </Row>
                </Modal>
                <Row style={{display: 'flex'}}>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[0].picture}
                            title='Pins and Needles'
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
                            style={{width: '200px', minWidth: '200px'}}
                            thumbnail={song[1].picture}
                            title='Goodbye'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />
                            ]}
                            onClick={ () => {
                                this.setState({
                                    modalIsOpen: true,
                                    title: song[1].title,
                                    singer: song[1].singer,
                                    thumbnail: song[1].thumbnail,
                                    audio: song[1].audio,
                                    picture: song[1].picture,
                                    lyric: song[1].lyric
                                })} }
                                
                        />
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '200px', minWidth: '200px'}}
                            thumbnail={song[2].picture}
                            title='Fooling Myself'
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
                    </Col>

                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '200px', minWidth: '200px'}}
                            thumbnail={song[3].picture}
                            title='Breathe'
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
                            style={{width: '200px', minWidth: '200px'}}
                            thumbnail={song[4].picture}
                            title='I Still Love You'
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
            </div>

        );
    }
}
export default Tcontentdisc2row2