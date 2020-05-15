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
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026968/chaoticorder-feedthepeople/glp-first-album/6_PINS_NEEDLES_-Lyrics_zqpuek.jpg',
        lyric: [
            <div>
              <p>It's a long and lonely road 
              <br />
This unforgiven world we're sold 
<br />
A life dance on a razors edge 
<br />
We try so hard every day 
</p><p>
And it's only when I think of you 
<br />
That gets me through these desperate times 
<br />
Yeah yeah 
<br />
Pins and needles, 
<br />
Ho no Pins and needles, 
<br />
Ho no 
</p><p>
And I know, we're searching for our way back 
<br />
Though I can hardly breathe
<br />
Pins and needles 
<br />
Piercing, breaking, tearing me apart
</p><p>
And here we are my friend 
<br />
A stabbing knife at my back again 
<br />
They say tomorrow's another day 
<br />
How much more can I take 
<br />
Cause only when I think about you 
<br />
Can I get through theses desperate times 
<br />
And only when I dream about you 
<br />
Can I get through 
</p><p>
The pins and needles, 
<br />
Ho no Pins and needles, 
<br />
Ho no 
</p><p>

And I know, 
<br />
we're searching for our way back 
<br />
Though I can hardly breathe 
<br />
Pins and needles 
<br />
Piercing, breaking, tearing me apart 
</p><p>

How much more can I take 
<br />
How much more can I take 
</p><p>

Ho no Pins and needles, 
<br />
Ho no Pins and needles 
</p><p>

And I know, we're searching for our way back 
</p><p>

Pins and needles
<br />
Piercing, breaking, tearing me apart 
<br />
Though I can hardly breathe 
<br />
Tearing me apart{" "}
              </p>
            </div>,
          ],
    },
    {
        title: 'Goodbye',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/7-Goodbye_emp2lc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118309/chaoticorder-globallightingproject/7-GOODBYE_ym9sl3.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026968/chaoticorder-feedthepeople/glp-first-album/7_GOODBUY_-Lyrics_ja5o5s.jpg',
        lyric: [
            <div>
              <p>An uncontrollable time in life 
              <br />
Something more I should have said 
<br />
Something more i'd say
</p><p>
I'd say Rain on my window pain 
<br />
The sky is falling down
</p><p>
Don't know what to do 
<br />
Don't know what to say 
<br />
All I can do is pray 
<br />
To help me find my way 
<br />
Get me through this PAIN
</p><p>
How our lives they used to be 
<br />
And don't forget the best of days 
<br />
Now it's time to say
</p><p>
Rain on my window pain 
<br />
The sky is falling down
</p><p>
Don't know what to do 
<br />
Don't know what to say anymore 
<br />
All I can do is pray 
<br />
To help me find my way 
<br />
Get me through this PAIN
</p><p>
Soon the pain will go away
</p><p>
Rain on my window pain 
<br />
The sky is falling down
</p><p>
Don't know what to do 
<br />
Don't know what to say anymore 
<br />
All I can do is pray 
<br />
To help me find my way 
<br />
And now it's time to say
</p><p>
Goodbye{" "}
              </p>
            </div>,
          ],
    },
    {
        title: 'Fooling Myself',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/8-Foolin-Myself_anc23n.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118307/chaoticorder-globallightingproject/8-FOOLING_MYSELF_fhsolw.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026967/chaoticorder-feedthepeople/glp-first-album/8_FOOLIN_MYSELF_-Lyrics_zelpvp.jpg',
        lyric: [
            <div>
              <p>Looking down this trail of life, 
              <br />
with no way to go
<br />
I look in my mind, 
<br />
I'm dreaming again
</p><p>
Ouoo0o 
<br />
Fooling myself, fooling myself again 
<br />
I'm fooling myself, 
<br />
for thinking I can
</p><p>
Swimming through my body, 
<br />
I come across my soul 
<br />
Still inside my head, 
<br />
my one and only friend
</p><p>
And when I think of colors, 
<br />
they all turn to red
</p><p>
Ouuuooooo
</p><p>
Fooling myself, 
<br />
fooling myself again 
<br />
I'm fooling myself, 
<br />
for thinking I can
</p><p>
For thinking I can 
<br />
For thinking I can?{" "}
              </p>
            </div>,
          ],
    },
    {
        title: 'Breathe',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/9-Breathe_ojuucg.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118303/chaoticorder-globallightingproject/9-BREATHE_oodelz.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026968/chaoticorder-feedthepeople/glp-first-album/9_BREATHE_-Lyrics_ztpq6c.jpg',
        lyric: [
            <div>
              <p>
                  [ Instrumentals ]
            </p>
            </div>,
          ],
    },
    {
        title: 'I Still Love You',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581118753/chaoticorder-globallightingproject/10-I-Still-Love-you_b8nar3.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118309/chaoticorder-globallightingproject/10-I_STILL_LOVE_YOU_hjwisv.mp3',
        picture: 'https://res.cloudinary.com/dexdumfqy/image/upload/v1587026967/chaoticorder-feedthepeople/glp-first-album/10_I_STILL_LOVE_YOU_-Lyrics_vcr24p.jpg',
        lyric: [
            <div>
              <p>Flying from San Diego Bay, Maui Island a kiss away 
              <br />
Such a sight a sight to see, 
<br />
the eye candy of Lahaina way 
<br />
Take to Front Street 393, 
<br />
see the beach Polanui
</p><p>
"Meet the Lindsey's and you'll see ,
The place of love flowing in the breeze
</p><p>
I left the mainland to find my way
Now I know what I need to say 
the time is right it will be ok 
</p><p>
I Still love you 
And I need you
</p><p>
I Love you 
And I Miss you
</p><p>
Oooo, oooo, oooo, oooo
Oooo, oooo, oooo, oooo
</p><p>
Walking down on to the beach 
A pink sun setting through the cloud
I feel the sand melting at my feet 
Sipping on this cool blue drink
</p><p>
Palm trees whisper in the breeze 
The misty ocean it sings to me
I've never felt so warm and free 
can stay and never leave
</p><p>
I left the mainland to find my way 
Now I know what I need to say 
The time is right it will be ok 
</p><p>
I Still love you 
And I need you love you 
And I miss you
</p><p>
Oooo, oooo, oooo, oooo
Oooo, oooo, oooo, oooo{" "}
              </p>
            </div>,
          ],
    }
]

class Tcontentdisc2row2 extends React.Component {
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
                            height: "1000px", 
                            width: "1000px",  
                            maxHeight: '100vh',
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center'} }>
                            <div style={{ 
                                position: 'absolute',
                                left: '77%',
                                top: '75%',
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
                            style={{width: '20px', minWidth: '200px'}}
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
                            style={{width: '20px', minWidth: '200px'}}
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
                            style={{width: '20px', minWidth: '200px'}}
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
                            style={{width: '20px', minWidth: '200px'}}
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