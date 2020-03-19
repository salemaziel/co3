import React, { Component } from "react";
import Slider from "react-slick";
import { TaggedContentCard } from 'react-ui-cards'

import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Row } from 'reactstrap';
import Modal from 'react-awesome-modal';



const song = [
    {
        title: "ChemTrails",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
    },
    {
        title: 'Feed The People',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg'
    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg'

    },
    {
        title: 'Another Thing',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg'
    },
    {
        title: 'Hate',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg'

    },
    {
        title: 'Sorry',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg'

    },
    {
        title: 'Chains',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg'
    },
    {
        title: 'Earth',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg'

    },
    {
        title: 'Never End',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg'

    },
    {
        title: 'Colors',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg'

    }
]
           
class TCardMobile extends React.Component {
        
    
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
    const settings = {
      className: "plzwork",
      initialSlide: 0,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 5,
      swipe: true,
      swipeToSlide: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            className: "plzwork",
                initialSlide: 0,
                infinite: true,
                centerPadding: "50px",
                slidesToShow: 4,
                swipe: true,
                swipeToSlide: true,
                centerMode: true,
          }
        },
        {
          breakpoint: 736,
          settings: {
            className: "plzwork",
            initialSlide: 0,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 3,
            swipe: true,
            swipeToSlide: true,
            centerMode: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: "plzwork",
            initialSlide: 0,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 2,
            swipe: true,
            swipeToSlide: true,
            centerMode: false,
          }
        },
        {
            breakpoint: 360,
            settings: {
              className: "plzwork",
              initialSlide: 0,
              infinite: true,
              centerPadding: "50px",
              slidesToShow: 1.5,
              swipe: true,
              swipeToSlide: true,
              centerMode: false,
            }
          }
      ],
      focusOnSelect: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
        let {
            thumbnail,
            title,
            description,
            tags,
            ...other
        } = this.props;
        let cards;
        let { styleDisplay } = this.props;

    return (
      <React.Fragment>
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
                                    width={275} height={275}
                                    title={this.state.title}
                                    thumbnail={this.state.thumbnail}
                                    audio={this.state.audio}
                                />
                    </div>
                </Row>
            </Modal>
    
        <Row /*style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}*/>
        
        {/*<h2>Swipe To Slide</h2>*/}
        <Slider {...settings}>
            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[0].thumbnail}
                    title='ChemTrails'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
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
            </div>

            <div>
            <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/ minWidth: '175px', boxShadow: '3px 2px 6px black'}}           
                    thumbnail={song[1].thumbnail}
                    title='Feed The People'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
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
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{width: '20px', minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[2].thumbnail}
                    title='Burn'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
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
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[3].thumbnail}
                    title='Another Thing'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
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
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[4].thumbnail}
                    title='Hate'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
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
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[5].thumbnail}
                    title='Sorry'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                        ]} 
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[5].title,
                            singer: song[5].singer,
                            thumbnail: song[5].thumbnail,
                            audio: song[5].audio,
                            picture: song[5].picture
                        })} }
                />
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[6].thumbnail}
                    title='Chains'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                        ]} 
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[6].title,
                            singer: song[6].singer,
                            thumbnail: song[6].thumbnail,
                            audio: song[6].audio,
                            picture: song[6].picture
                        })} }
                />
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[7].thumbnail}
                    title='Earth'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                        ]} 
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[7].title,
                            singer: song[7].singer,
                            thumbnail: song[7].thumbnail,
                            audio: song[7].audio,
                            picture: song[7].picture
                        })} }
                />
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[8].thumbnail}
                    title='Never End'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                        ]} 
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[8].title,
                            singer: song[8].singer,
                            thumbnail: song[8].thumbnail,
                            audio: song[8].audio,
                            picture: song[8].picture
                        })} }
                />
            </div>

            <div>
                <TaggedContentCard
                    className="plzwork"
                    style={{/*width: '20px',*/minWidth: '175px', boxShadow: '3px 2px 6px black'}}
                    thumbnail={song[9].thumbnail}
                    title='Colors'
                    description=''
                    tags={[
                            <div
                                >
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                        ]} 
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            title: song[9].title,
                            singer: song[9].singer,
                            thumbnail: song[9].thumbnail,
                            audio: song[9].audio,
                            picture: song[9].picture
                        })} }
                />
            </div>

        </Slider>
      
      </Row>
    </React.Fragment>
    );
  }
}
export default TCardMobile