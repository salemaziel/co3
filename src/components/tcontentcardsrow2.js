import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'


import { FaPlay, FaAngleDoubleDown } from 'react-icons/fa'

import { Card, CardBody, Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';
import '../css/lyricCrawl.css'

import ReactWebMediaPlayer from 'react-web-media-player';


const song = [
    {
        title: 'Sorry',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg',
        lyric: [(
            <div>
                <p>
                    Uuummm aaaaaaa
                </p>
                <br />

                <p>
                    I’m so sorry
                    Ya I didn’t mean
                    to make you  go away
                </p>
                <br />

                <p>
                    I’m so sorry

                    For putting you ten feet
                    Under ground
                </p>
                <br />

                <p>
                    Sorry
                    I’m sorry you’ve gone away
                <br />
                    <br />
                Sorry
Didn’t mean to make you go
                </p>
                <br />

                <p>
                    Down into the ground
                    I put you there
                </p>
                <br />

                <p>
                    Since you’ve gone away
                    I miss your soul
            </p>
                <br />

                <p>
                    Sorry
                    Down into the ground
            </p>
                <br />

                <p>
                    Sorry
                    I didn’t mean to let you go
            </p>
                <br />

                <p>
                    Mmmmmmmm
                    The grass is always greener
                    Where I know you are
            </p>
                <br />


            </div>)]

    },
    {
        title: 'Chains',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        lyric: [(
            <div>
                <p>
                    Chains
                    <br />
                    Chains
                    <br />
                    <br />

                    Nogoooo
                </p>
                <br />

                <p>
                    Bang my head a way I don’t
                    want to be
                    <br />
                    Don’t know why you take me there
                    <br />
                    Twist and turn my insecurity
                    <br />
                    Do you like to watch me     squirm
                </p>
                <br />

                <p>
                    Shut up
                    <br />
                    Shut up and leave me be
                    <br />
                    There’s no pleasing you
                    <br />
                    All the pain I grieve
                </p>
                <br />

                <p>
                    Why do I endure your shame
                    <br />
                    Breaking through - through all these chains
                    <br />
                    Remove the shackles of my pain
                    <br />
                    Breaking through-through all these chains
                </p>
                <br />

                <p>
                    All the chains
                </p>
                <br />

                <p>
                    What you do is insanity
                    <br />
                    Insane to me
            </p>
                <br />

                <p>
                    The fear inside me
                    <br />
                    Is suspicious
                    <br />
                    Suspicious

            </p>
                <br />

                <p>
                    Are you pleased with your
                    devise
                    <br />
                    Devise
            </p>
                <br />

                <p>
                    Or will you leave
                    <br />
                    As I lay dying
                </p>
                <br />

                <p>
                    Shut up
                    <br />
                    Shut up and leave me be
                    <br />
                    There’s no pleasing you
                    <br />
                    All the pain I’ve grieve
                </p>
                <br />

                <p>
                    Nogooo
                </p>
                <br />

                <p>
                    All the pain I greave
                    <br />
                    Breaking through the chains
                </p>
                <br />

                <p>
                    Why do I endure your shame
                    <br />
                    Breaking through - through all these chains
                    <br />
                    Remove the shackles of my pain
                </p>
                <br />

                <p>
                    All the chains
                    <br />
                    All the Pain
                    <br />
                    All the chains
                    <br />
                    All the Pain—
                    <br />
                    All the chains
                    <br />
                    All the chains
                    <br />
                    All the chains
                    <br />
                    All the chains
                </p>
                <br />

                <p>
                    Nogoooo
                    <br />
                    <br />
                    All the pain I grieve
                    <br />
                    Breaking through the chains
                    <br />
                    All the pain I grieve
                    <br />
                    Breaking through the chains
                    <br />
                    Chains
                    <br />
                    Chains
                    <br />
                    Chains
                    <br />
                    Pain I greave
                    <br />
                    Chains
                    <br />
                    Through the chains
                </p>
                <br />
            </div>)]

    },
    {
        title: 'Earth',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        lyric: [(
            <div>
                <p>
                    Who am I
                    <br />
                    Who brings you light
                    <br />
                    Through the darkness
                    Of the night
                </p>
                <br />

                <p>
                    Oooooo
                </p>
                <br />

                <p>
                    Who am I
                    <br />
                    What are we
                    <br />
                    Where do we go
                    <br />
                    Why do we live
                    <br />
                    How much longer
                    <br />
                    For the eeeeeeearth
                </p>
                <br />

                <p>
                    Who am I
                    <br />
                    Who brings you light
                    <br />
                    Through the darkness
                    Of the night
                </p>
                <br />

                <p>
                    Aaaaaa Aaaaaa Aaaa
                    <br />
                    <br />
                    WE WILL RETURN
                </p>
                <br />

                <p>
                    Through the night
                    <br />
                    Black or white
                    <br />
                    Makes no difference
            </p>
                <br />

                <p>
                    Soooooooo
                    <br />
                    <br />

                    Without the light
            </p>
                <br />

                <p>
                    Who am I
                    <br />
                    What are we
                    <br />
                    Where do we go
                    <br />
                    Why do we live
                    <br />
                    How much longer
                    <br />
                    For the eeeeearth
            </p>
                <br />

                <p>
                    On the earth
                    <br />
                    Do the good
                    <br />
                    Aand good will be
                    Until the end of end
            </p>
                <br />

                <p>
                    Aaaaaa Aaaaaa Aaaa
                    <br />
                    <br />

                    HuuRrrraaaaaaaaaa
                </p>
                <br />
            </div>)]

    },
    {
        title: 'Never End',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        lyric: [(
            <div>
                <p>
                    Tik Tik Tik
                </p>
                <br />

                <p>
                    Take me to another place
                    <br />
                    Past the stars that never end
                    <br />
                    Stopping time all hands stand still.
                    <br />
                    Never end this endless dream
                </p>
                <br />

                <p>
                    Let’s rooooooooooll
                </p>
                <br />

                <p>
                    Holding the hands of time
                    <br />
                    Bleeding through your sole
                    <br />
                    As we fade away
                    <br />
                    Never to return
                    <br />
                    <br />
                    Never to return

                </p>
                <br />

                <p>
                    Through the darkest night
                    <br />
                    Wake the spirit light
                    <br />
                    Something there you cannot see
                    <br />
                    Time that never ends
                    <br />
                    Time that never ends
                    <br />
                    Never ends
                </p>
                <br />

                <p>
                    Holding the hands of time
                    <br />
                    Bleeding through your sole.
                    <br />
                    And as we fade away
                    <br />
                    Never to return
                </p>
                <br />

                <p>
                    Never to return
                    <br />
                    Never to return
                </p>
                <br />

                <p>
                    Let’s rooooooooll
                </p>
                <br />

                <p>
                    Holding the hands of time
                    <br />
                    Bleeding through your sole
                    <br />
                    As we fade away
                    <br />
                    Never to return
                    <br />
                    <br />
                    Never to return...
                </p>
                <br />

            </div>)]

    },
    {
        title: 'Colors',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        lyric: [(
            <div>
                <p>
                    I’m not an angel
                    <br />
                    I never said I was
                    <br />
                    Some things are best left unsaid
                    <br />
                    Halfway through my life
                    <br />
                    I’m still searching on
                    <br />
                    For something better than yesterday
                </p>
                <br />

                <p>
                    Mmmmmmmmm
                </p>
                <br />

                <p>
                    Pathway through our lives
                    <br />
                    Youth were searching for
                    <br />
                    Never knowing what you’ll find
                </p>
                <br />

                <p>
                    If love could’ve saved us you’d still be here
                    <br />
                    You’re the life of the party Uninvited
                    <br />
                    Stop preaching to the preacher we’ve all been around the block
                    <br />
                    It’s not our first rodeo
                    <br />
                    how far can we go
                </p>
                <br />

                <p>
                    Red Yellow Green Blue are the Colors of our soles
                </p>
                <br />

                <p>
                    Life lives in memories from the sunrise to the sun set
                    <br />
                    Dose it matter after all we’re do we go from here
                    <br />
                    Can you really see -
                    <br />
                    See where you’re going to
            </p>
                <br />

                <p>
                    Walking to the edge of the earth to the top of the ice
                    <br />
                    As it starts to crack slipping I’m falling down
                    <br />
                    Better way of life
                    <br />
                    In my life I’m nobody
                    <br />
                    Cause I can’t spend it with you
            </p>
                <br />

                <p>
                    What goes around comes around as it reaches through your soul
                    <br />
                    <br />

                    What you’ve done will come back to you
                    <br />
                    <br />

                    What you’ve done will surely be there
                    <br />
                    <br />

                    What goes around is what you reap in us all
            </p>
                <br />

                <p>
                    What goes around
                    <br />
                    <br />

                    Will come back to you
                    <br />
                    Aaaaaaaa
            </p>
                <br />

            </div>)]

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
            classname: ''
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
                    <Row style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: `url(${this.state.picture})`,
                            height: "800px",
                            width: "1000px",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
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
                                marginTop: '370px'*/
                            }}>
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
                            style={{ width: '20px', minWidth: '200px' }}
                            thumbnail={song[0].picture}
                            title='Sorry'
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
                                    lyric: song[0].lyric,
                                })
                            }}

                        />
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '200px' }}
                            thumbnail={song[1].picture}
                            title='Chains'
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
                                    lyric: song[1].lyric,
                                })
                            }}
                        />
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '200px' }}
                            thumbnail={song[2].picture}
                            title='Earth'
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
                    </Col>

                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                            className="plzwork"
                            style={{ width: '20px', minWidth: '200px' }}
                            thumbnail={song[3].picture}
                            title='Never End'
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
                            style={{ width: '20px', minWidth: '200px' }}
                            thumbnail={song[4].picture}
                            title='Colors'
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
export default TContentCards02