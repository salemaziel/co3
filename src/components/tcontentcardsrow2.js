import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Angel from '../images/song-art/shaman-COLORS.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';

import ReactWebMediaPlayer from 'react-web-media-player';


const song=[

    {
        title: 'Chains',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593769/chaoticorder-feedthepeople/medicineman-CHAINS_aee5zv.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3'

    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'C',
        audio:
            'U'

    },
    {
        title: 'Chaotic Order',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593780/chaoticorder-feedthepeople/shaman-COLORS_hypvjz.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3'

    },
    {
        title: 'Never End',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593773/chaoticorder-feedthepeople/The-Magician-NEVEREND_vimjgw.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3'

    },
    {
        title: 'Colors',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593779/chaoticorder-feedthepeople/HighPriestess-EARTH_cr9rox.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3'

    }
]

class TContentCards02 extends React.Component {
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
            <div>
                <Modal
                    visible={this.state.modalIsOpen} 
                    width="1000" 
                    height="600" 
                    effect="fadeInUp" 
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: 'flex'}}>
                        <div style={{ 
                            backgroundImage: `url(${this.state.id})` ,
                            height: "600px", 
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
                                        rpm: 20}}

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
                            thumbnail={Sorry}
                            title='Sorry'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Sorry,
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
                            thumbnail={Chains}
                            title='Chains'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => {
                                this.setState({
                                    modalIsOpen: true,
                                    id: Chains,
                                    title: song[1].title,
                                    singer: song[1].singer,
                                    thumbnail: song[1].thumbnail,
                                    audio: song[1].audio
                                })} }
                        />
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            href= '#'
                            thumbnail={Earth}
                            title='Earth'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Earth,
                                title: song[2].title,
                                singer: song[2].singer,
                                thumbnail: song[2].thumbnail,
                                audio: song[2].audio
                            })} }
                        />
                    </Col>

                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            href= '#'
                            thumbnail={Never}
                            title='Never'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Never,
                                title: song[3].title,
                                singer: song[3].singer,
                                thumbnail: song[3].thumbnail,
                                audio: song[3].audio
                            })} }

                        />
                    </Col>

                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            href= '#'
                            thumbnail={Angel}
                            title='Colors'
                            description=''
                            tags={[
                                '',

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Angel,
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
export default TContentCards02