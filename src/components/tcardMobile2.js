import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Angel from '../images/song-art/shaman-COLORS.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'
import ReactWebMediaPlayer from 'react-web-media-player';

import Where from '../images/song-art/global-lighting-album/1-where-were-you.jpg'
import Wake from '../images/song-art/global-lighting-album/2-wake-up.jpg'
import Tears from '../images/song-art/global-lighting-album/3-Tears.jpg'
import Dirty from '../images/song-art/global-lighting-album/4-Dirty-Mine.jpg'
import Primitive from '../images/song-art/global-lighting-album/5-Primitive-Man.jpg'
import Pins from '../images/song-art/global-lighting-album/6-Pins-and-Needles.jpg'
import Goodbye from '../images/song-art/global-lighting-album/7-Goodbye.jpg'
import Fooling from '../images/song-art/global-lighting-album/8-Foolin-Myself.jpg'
import Breathe from '../images/song-art/global-lighting-album/9-Breathe.jpg'
import Still from '../images/song-art/global-lighting-album/10-I-Still-Love-you.jpg'



import { FaPlay } from 'react-icons/fa'

import {  Row } from 'reactstrap';
import Modal from 'react-awesome-modal';

import ReactCardCarousel from 'react-card-carousel';


const song = [
    {
        title: "Where Were You",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/1-where-were-you_ufda2c.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118300/chaoticorder-globallightingproject/1-WHERE_WERE_YOU_wgoc56.mp3",
    },
    {
        title: 'Wake Up',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/2-wake-up_h0tc9z.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/2-WAKE_UP_nnmu69.mp3'

    },
    {
        title: 'Tears',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/3-Tears_fym2g1.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/3-TEARS_lnpihr.mp3'

    },
    {
        title: 'Dirty Mine',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/4-Dirty-Mine_g35szv.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3'

    },
    {
        title: 'Primitive Man',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/5-Primitive-Man_gfmwue.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3'

    },
    {
        title: 'Pins and Needles',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/6-Pins-and-Needles_ry7kvk.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3'

    },
    {
        title: 'Goodbye',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/7-Goodbye_emp2lc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3'

    },
    {
        title: 'Fooling Myself',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/8-Foolin-Myself_anc23n.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3'

    },
    {
        title: 'Breathe',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/9-Breathe_ojuucg.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3'

    },
    {
        title: 'I Still Love YOu',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/10-I-Still-Love-you_b8nar3.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3'

    }
]
class TCardMobile extends React.Component {


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
            thumbnail,
            title,
            description,
            tags,
            ...other
        } = this.props;
        let cards;;
        let { styelDisplay } = this.props;

        return (
            <div style={{
            }}>
                <Modal
                    visible={this.state.modalIsOpen}
                    width="275" height="275"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: 'flex'}}>
                            <div style={{
                                position: 'absolute'}}>
                                <ReactWebMediaPlayer
                                    width={200} height={200}
                                    title={this.state.title}
                                    thumbnail={this.state.thumbnail}
                                    audio={this.state.audio}

                                />
                            </div>
                    </Row>

                </Modal>
                <Row style={{ display: 'flex' }}>
                    <ReactCardCarousel  disable_keydown={false} disable_box_shadow={true}>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Where}
                                title='Where Were You'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Where,
                                            title: song[0].title,
                                            singer: song[0].singer,
                                            thumbnail: song[0].thumbnail,
                                            audio: song[0].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>

                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Wake}
                                title='Wake Up'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Wake,
                                            title: song[1].title,
                                            singer: song[1].singer,
                                            thumbnail: song[1].thumbnail,
                                            audio: song[1].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Tears}
                                title='Tears'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Tears,
                                            title: song[2].title,
                                            singer: song[2].singer,
                                            thumbnail: song[2].thumbnail,
                                            audio: song[2].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Dirty}
                                title='Dirty Mine'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Dirty,
                                            title: song[3].title,
                                            singer: song[3].singer,
                                            thumbnail: song[3].thumbnail,
                                            audio: song[3].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Primitive}
                                title='Primitive Man'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Primitive,
                                            title: song[4].title,
                                            singer: song[4].singer,
                                            thumbnail: song[4].thumbnail,
                                            audio: song[4].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Pins}
                                title='Pins and Needles'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Pins,
                                            title: song[5].title,
                                            singer: song[5].singer,
                                            thumbnail: song[5].thumbnail,
                                            audio: song[5].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Goodbye}
                                title='Goodbye'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Goodbye,
                                            title: song[6].title,
                                            singer: song[6].singer,
                                            thumbnail: song[6].thumbnail,
                                            audio: song[6].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Fooling}
                                title='Fooling Myself'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Fooling,
                                            title: song[7].title,
                                            singer: song[7].singer,
                                            thumbnail: song[7].thumbnail,
                                            audio: song[7].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Breathe}
                                title='Breathe'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Breathe,
                                            title: song[8].title,
                                            singer: song[8].singer,
                                            thumbnail: song[8].thumbnail,
                                            audio: song[8].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>
                        <div >
                            <TaggedContentCard
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Still}
                                title='I Still Love YOu'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Still,
                                            title: song[9].title,
                                            singer: song[9].singer,
                                            thumbnail: song[9].thumbnail,
                                            audio: song[9].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />
                        </div>

                    </ReactCardCarousel>
                </Row>

            </div>
        );
    }
}
export default TCardMobile