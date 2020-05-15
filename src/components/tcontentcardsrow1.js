import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'


import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay, FaAngleDoubleDown } from 'react-icons/fa'

import { Card, CardBody, Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';

//import Crawl from 'react-star-wars-crawl'
import '../css/lyricCrawl.css'
//import 'react-star-wars-crawl/lib/index.css'
//import '../css/tcontencardsrow1.css'


const song = [
    {
        title: "ChemTrails",
        singer: 'Chaotic Order',
        thumbnail: "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
        picture: "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        lyric: [(
            <div>
                <p>Hay hay That’s a big old plane
                <br />
                White lines in the sky, Making me wonder
                <br />
                Hay hay Take the planes away
                <br />
                They dirty the sky, Making it Hotter</p>

                <p>
                    Big O cans flying through the sky
                <br />
                Sure know why it’s on my mind
                <br />
                We talk about a better way
                <br />
                All the lines all through the sky</p>
                <br />
                <p>
                    When it all comes down to faith
                <br />
                There’s nothing there that’s good for you
                <br />
                They say the lines goanna make it rain
                <br />
                It’s only a matter of time no lie</p>
                <br />
                <p>chem trails</p>
                <br />
                <p> Protecting us from bad sun rays
               <br />
                Others say it’s such a haze
                <br />
                Carbon dioxide from the planes
                <br />
                Soot particulates are to blame</p>
                <br />
                <p>
                    When it all comes down to faith
                <br />
                There’s nothing there that’s good for you
                <br />
                They say the lines goanna make it rain
                <br />
                It’s only a matter of time no lie</p>
                <br />
                <p>Chem Trails </p>

            </div>)]



    },
    {
        title: 'Feed The People',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        lyric: [(
            <div>
                <p>Hayeeeeee
                <br />
                Feed the people inside your life
                <br />
                Feed the people just get in line
                <br />
                Feed the people another lie
                <br />
                Feed the people open wide</p>

                <br />
                <p>
                    Uuuu uou,
                    Every time we try to get ahead
                <br />
                Feed the People
                <br />
                Feed the people
                <br />
                Uuuu uou,
                <br />
                We give you take it’s all that we can stand
                <br />
                Feed the People
                <br />
                Feed the People
                <br />
                Uuuu uou
                </p>

                <p>
                    Feed the people almighty dollar
                <br />
                Feed the people ain’t worth a dime
                <br />
                Feed the people whole pack of lies
                <br />
                Feed the people just one more time</p>

                <br />
                <p>
                    Uuuu uou
                    Every time we try to get ahead
                    <br />
                    Feed the People
                    <br />
                    Feed the people
                    <br />
                    Uuuu uou
                </p>

                <br />

                <p>
                    We give you take it’s more than we can stand
                    <br />
                    Feed the People
                    <br />
                    Feed the People
                    <br />
                    Uuuuuou
                </p>

                <p>
                    Feed the people insecticides
                    <br />
                    Feed the people the pesticides
                    <br />
                    Feed the people your dirty water
                    <br />
                    Feed the people there hungry
                </p>
                <br />
                <p>
                    Uuuu uou
                    <br />
                    Every time we try to get ahead
                    <br />
                    Feed the People
                    <br />
                    Feed the people
                </p>
                <br />
                <p>
                    Uuuu uou
                    <br />
                    We give you take it’s all that we can stand
                    <br />
                    Feed the People
                    <br />
                    Feed the People
                </p>
                <br />

                <p>
                    Feed the people insecticides
                    <br />
                    Feed the people the pesticides
                    <br />
                    Feed the people your dirty water
                    <br />
                    Feed the people we’re hungry
                </p>

            </div>)]

    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        lyric: [(
            <div>
                <p>Hey Hey Hey
                <br />
                Burn it
                <br />
                Burn it
                <br />
                Burn it to the ground </p>
                <br />

                <p>
                    Ashes -blowing in the wind
                    <br />
                    Smoke -burns through your eye’s
                    <br />
                    Dust -all through the air
                    <br />
                    Darkness -fall’s through the sky
                </p>
                <br />

                <p>
                    Burn it   - Look around
                    <br />
                    Burn it   - It’s falling down
                    <br />
                    Burn it.   -To the ground
                    <br />
                    Burn it   -We will all be Falling down
                </p>
                <br />

                <p>
                    Axes   -Will lose controls
                    <br />
                    Heat   -Will over load
                    <br />
                    Molten   -Rocks do explode,
                    <br />
                    Then rumble beneath your-feet
                </p>

                <br />

                <p>
                    Burn it    -Plumes of smoke
                    <br />
                    Burn it     -Until we choke
                    <br />
                    Burn it    -There Nothing left
                    <br />
                    Burn it.   -We will burn it to the ground
                </p>
                <br />

                <p>
                    We will burn it to the ground
                    <br />
                    We will burn it to the ground
                </p>


            </div>)]

    },
    {
        title: 'Another Thing',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        lyric: [(
            <div>
                <p>
                    You get a piece of me
                    <br />
                    ya taste so fine
                    <br />
                    Yes I like to hold you down
                </p>
                <br />

                <p>
                    As you move I turn
                    <br />
                    Right on time
                    <br />
                    O so fine
                </p>
                <br />

                <p>
                    Shhhhhh
                    <br />
                    <br />
                    Don’t say a word
                    <br />
                    Harder never deep enough
                    <br />
                    Shiver with delight
                    <br />
                    Rocking it through the night
                </p>
                <br />

                <p>
                    Don’t say a word
                    <br />
                    Harder never deep enough
                    <br />
                    Shiver with delight
                    <br />
                    Rocking it through the night
                </p>

                <p>
                    It’s not what we know
                    <br />
                    It’s who we know
                    <br />
                    We thought it was good
                    <br />
                    So here’s what I got to say
                </p>
                <br />

                <p>
                    Oooooo
                    <br />
                    <br />

                    Try to confuse me
                    <br />
                    In this state of mine
                    <br />
                    Try to abuse me
                    <br />
                    So easy you defy
            </p>
                <br />

                <p>
                    Try to change my world
                    <br />
                    I blink you lie
                    <br />
                    Yes same o rumor in town
                    <br />
                    As you move on out
                    <br />
                    Right on time
                    <br />
                    O not again
            </p>
                <br />

                <p>
                    Shhhhhh
                    <br />
                    <br />

                    Don’t say a word
                    <br />
                    Hammer beating in my
                    <br />
                    Shiver to the bone
                    <br />
                    Were always good in bed
            </p>
                <br />

                <p>
                    Another thing I must confess
                    <br />
                    You’re still a taker who never gives
                    <br />
                    This won’t happen
                    <br />
                    Ever again
            </p>
                <br />

                <p>
                    Always a lie
                    <br />
                    You always deny
            </p>
                <br />

                <p>
                    Try to confuse me
                    <br />
                    In this state of mine
                    <br />
                    Try to abuse me
                    <br />
                    So easily defy
            </p>
                <br />

                <p>
                    You’re a taker who never gives back
                    <br />
                    Difficult and exhausting
                    <br />
                    I’m over it...
            </p>
                <br />


            </div>)]


    },
    {
        title: 'Hate',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        lyric: [(
            <div>
                <p>
                    Hayyyyyyyyyy
                <br />
                <br />

                    Hate is my best friend
                    <br />
                    Hate is what I feel for you
                    <br />
                    Fear is what you see in me
                    <br />
                    Pain I have in store for you
                </p>
                <br />

                <p>
                    Leave me alone
                    <br />
                    Let me be
                    <br />
                    Let me go
                </p>
                <br />

                <p>
                    Is this what you want me to see
                    <br />
                    Is this what you wanted me to be
                    <br />
                    Look at what you’ve done to me
                    <br />
                    What are you doing to me
                    <br />
                    I want you to leave me alone
                    <br />
                    Get back.....
                </p>
                <br />

                <p>Haaaaa</p>
                <br />

                <p>
                    Hate is my best friend
                    <br />
                    Hate is my best friend who’s lonely
                    <br />
                    I hate to be the only one
                    <br />
                    Don’t you know that I’m living in hell
                </p>
                <br />

                <p>
                    Is this what you wanted to see
                <br />
                    <br />

                    Is this what you want me to be
                </p>
                <br />

                <p>
                    I don’t understand
                    <br />
                    Why don’t you let me out
                </p>
                <br />

                <p>
                    Ask your mother while you’re freaking me out
                    <br />
                    I’ll find a way out to cure this disease
                    <br />
                    I’ve never seen the man on the moon
                </p>
                <br />

                <p>ha ha ha ha</p>
                <br />

                <p>
                    I hate you
                    <br />
                    Leave me alone
                    <br />
                    I hate that you hate
                    <br />
                    What we want to be
                    <br />
                    Is this what you wanted to see
                    <br />
                    Is this what you want me to be
                </p>
                <br />

                <p>
                    LEAVE ME ALONE
                    <br />
                    <br />
                    You’re alone in the dark,
                    <br />
                    ha ha ha ha ha
            </p>
                <br />

            </div>)]

    },

]



class TContentCards01 extends React.Component {


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
            classname: ''
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
            classname: '',


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
                    width="1000" height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >

                    <Row style={{ display: 'flex' }}>

                        <div style={{
                            backgroundImage: `url(${this.state.picture})`,
                            height: "800px",
                            width: "1000px",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        >
                            <div style={{
                                verticalAlign: 'middle',
                            }}>
                                <Card style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <CardBody className="lyricsCards">
                                        {this.state.lyric}

                                    </CardBody>
                                    <FaAngleDoubleDown className="angledoubledown" focusable="false" aria-hidden="true" />
                                </Card>
                            </div>


                            <div style={{
                                position: 'absolute',
                                left: '77%',

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
                                        rpm: 15
                                    }}
                                    style={{
                                        backgroundColor: "transparent",
                                        background: "transparent",
                                    }}
                                />

                            </div>
                        </div>
                    </Row>


                </Modal>
                <Row style={{ display: 'flex' }}>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '200px', minWidth: '220px' }}
                            thumbnail={song[0].picture}
                            title='ChemTrails'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={() => {
                                this.setState({
                                    modalIsOpen: true,
                                    title: song[0].title,
                                    singer: song[0].singer,
                                    thumbnail: song[0].thumbnail,
                                    audio: song[0].audio,
                                    picture: song[0].picture,
                                    lyric: song[0].lyric
                                })
                            }}
                        />


                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '220px' }}
                            thumbnail={song[1].picture}
                            title='Feed The People'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={() => {
                                this.setState({
                                    modalIsOpen: true,
                                    title: song[1].title,
                                    singer: song[1].singer,
                                    thumbnail: song[1].thumbnail,
                                    audio: song[1].audio,
                                    picture: song[1].picture,
                                    lyric: song[1].lyric
                                })
                            }}


                        />
                    </Col > <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '220px' }}
                            thumbnail={song[2].picture}
                            title='Burn'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={() => {
                                this.setState({
                                    modalIsOpen: true,
                                    title: song[2].title,
                                    singer: song[2].singer,
                                    thumbnail: song[2].thumbnail,
                                    audio: song[2].audio,
                                    picture: song[2].picture,
                                    lyric: song[2].lyric
                                })
                            }}

                        />
                    </Col> <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '220px' }}
                            thumbnail={song[3].picture}
                            title='Another'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />
                            ]}
                            onClick={() => {
                                this.setState({
                                    modalIsOpen: true,
                                    title: song[3].title,
                                    singer: song[3].singer,
                                    thumbnail: song[3].thumbnail,
                                    audio: song[3].audio,
                                    picture: song[3].picture,
                                    lyric: song[3].lyric
                                })
                            }}

                        />
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '220px' }}
                            thumbnail={song[4].picture}
                            title='Hate'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />
                            ]}
                            onClick={() => {
                                this.setState({
                                    modalIsOpen: true,
                                    title: song[4].title,
                                    singer: song[4].singer,
                                    thumbnail: song[4].thumbnail,
                                    audio: song[4].audio,
                                    picture: song[4].picture,
                                    lyric: song[4].lyric
                                })
                            }}

                        />
                    </Col>
                </Row>
                </React.Fragment>
            
        );
    }
}
export default TContentCards01
