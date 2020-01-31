import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'

import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';


const song = [
    {
        title: "ChemTrails",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/Chemtrails_fw7xav.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
    },
    {
        title: 'Feed The People',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/album-cover-2500x1364-FEEDTHEPEOPLE_lnpgkv.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3'

    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593779/chaoticorder-feedthepeople/The-Tower-BURN_e3erzi.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3'

    },
    {
        title: 'Another Thing',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593736/chaoticorder-feedthepeople/The-Wait-ANOTHERTHING_uqplhn.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3'

    },
    {
        title: 'Hate',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593775/chaoticorder-feedthepeople/the-oracle-HATE_jcwpqs.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3'

    },
    {
        title: 'Sorry',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593768/chaoticorder-feedthepeople/closeyoureyestosee-SORRY_yf4soq.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3'

    }
]
class TContentCards01 extends React.Component {


    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            id: '',
            title: '',
            singer: '',
            thumbnail: '',
            audio: ''
        };
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            id: '',
            title: '',
            singer: '',
            thumbnail: '',
            audio: ''
        });
    }

    render() {
        let {
            href,
            thumbnail,
            title,
            description,
            tags,
            ...other
        } = this.props;
        return (
            <div style={{
            }}>
                <Modal
                    visible={this.state.modalIsOpen}
                    width="1000" height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: 'flex'}}>
                        <div style={{
                            backgroundImage: `url(${this.state.id})` ,
                            height: "600px", 
                            width: "1000px",  
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center',
                            } }>
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
                            style={{width: '20px', minWidth: '200px'}}
                            href= '#'
                            thumbnail={Chemtrails}
                            title='Chem Trails'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Chemtrails,
                                title: song[0].title,
                                singer: song[0].singer,
                                thumbnail: song[0].thumbnail,
                                audio: song[0].audio
                            })} }
                        />
                            
                       
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            href= '#'
                            thumbnail={Feedthepeople}
                            title='Feed the people'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Feedthepeople,
                                title: song[1].title,
                                singer: song[1].singer,
                                thumbnail: song[1].thumbnail,
                                audio: song[1].audio
                            })} }


                        />
                    </Col > <Col xs="2" lg="2" md="6">
                    <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Burn}
                        title='Burn'
                        description=''
                        tags={[
                            '',

                        ]}
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            id: Burn,
                            title: song[2].title,
                            singer: song[2].singer,
                            thumbnail: song[2].thumbnail,
                            audio: song[2].audio
                        })} }

                    />
                </Col> <Col xs="2" lg="2" md="6">
                    <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Another}
                        title='Another'
                        description=''
                        tags={[
                            '',
                            ,
                        ]}
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            id: Another,
                            title: song[3].title,
                            singer: song[3].singer,
                            thumbnail: song[3].thumbnail,
                            audio: song[3].audio
                        })} }

                    />
                </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            href= '#'
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={Hate}
                            title='Hate'
                            description=''
                            tags={[
                                '',
                                ,
                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Hate,
                                title: song[4].title,
                                singer: song[4].singer,
                                thumbnail: song[4].thumbnail,
                                audio: song[4].audio
                            })} }

                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default TContentCards01