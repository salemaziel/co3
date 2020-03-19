import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'


import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';
import { FaPlay } from 'react-icons/fa'

import ReactWebMediaPlayer from 'react-web-media-player';


const song = [
    {
        title: 'Sorry',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg'

    },
    {
        title: 'Chains',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        lyric: '',

    },
    {
        title: 'Earth',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        lyric: '',

    },
    {
        title: 'Never End',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        lyric: ''

    },
    {
        title: 'Colors',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        lyric: ''

    }
]

class TContentCards02 extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            title: '',
            singer: '',
            thumbnail: '',
            audio: '',
            picture: ''
        };
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            title: '',
            singer: '',
            thumbnail: '',
            audio: '',
            picture: ''
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
            <React.Fragment>
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
                                left: '85%',
                                marginLeft: '-110px',
                                marginTop: '370px'}}>
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
                            title='Sorry'
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
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[1].picture}
                            title='Chains'
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
                                    picture: song[1].picture
                                })} }
                        />
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[2].picture}
                            title='Earth'
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
                    </Col>

                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[3].picture}
                            title='Never End'
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
                            })} }

                        />
                    </Col>

                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={song[4].picture}
                            title='Colors'
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
            </React.Fragment>

        );
    }
}
export default TContentCards02