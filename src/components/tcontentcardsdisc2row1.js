import React from "react";
import { TaggedContentCard } from "react-ui-cards";

import ReactWebMediaPlayer from "react-web-media-player";

import { FaPlay, FaAngleDown } from "react-icons/fa";

import Modal from "react-awesome-modal";

import { Card, CardBody, Row, Col } from "reactstrap";

//import TContentCards01 from "./tcontentcardsrow1";
//import tcardStyle from "./tcards.module.css";


const song = [
  {
    title: "Where Were You",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589413985/chaoticorder-globallightingproject/images-noLyrics/1-wherewereyou_eu9iho.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118300/chaoticorder-globallightingproject/1-WHERE_WERE_YOU_wgoc56.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1589413985/chaoticorder-globallightingproject/images-noLyrics/1-wherewereyou_eu9iho.jpg",
    lyric: [
      <div>
        <p>
          There's a time in my life I loathe
          <br />
          I thought I needed you
          <br />
          Every time I think of you
          
          <br />
           I'd like to be alone
          <br />I see Now 
          <br />
          I'm sure I'm gonna make you cry you when you walk on
          by
        </p>
        <p>
          Get up and fight,
          <br />
          fight for your life
          <br />
          Fight for the cause 
          <br />
          you know is right The time has come,
          <br />
          Time to move on
          <br />
          I'm gonna live to set you free.
        </p>
        <p>
          Where were you,
          <br />
          this fight for life
          <br />
          A place in time yeah you know is right
          <br />
          Where are you in this place in time
          <br />
          A place in time yeah, you know is right
          <br />
          Get up and fight, fight for your life
          <br />
          Fight for the cause you know is right
          <br />
          The time has come,
          <br />
          Time to move on
          <br />
          I'm gonna live to set you free
        </p>
        <p>
          There's a time in my life I know
          <br />
          That need to deal with you
          <br />
          Every time I think of you I'd like to be alone
        </p>
        <p>
          You're fooling yourself with your alibis
          <br />
          Now I know why I said goodbye can see it's time to be free
          <br />
          All those lies you told to me
          <br />
          Get up and fight fight for your life
          <br />
          Fight for the cause you know is right The time has come,
          <br />
          Time to move on I'm gonna live to set you free
          <br />
          Where were you, this fight for life
          <br />
          A place in time yeah, you know is right
          <br />
          Where are you in this place in time
          <br />
          A place in time yeah, you know is right
          <br />
          Get up and fight, fight for your life
          <br />
          Fight for the cause you know is right
        </p>
        <p>
          The time has come,
          <br />
          Time to move on
          <br />
          I'm gonna live to set you free
        </p>
      </div>,
    ],
  },
  {
    title: "Wake Up",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589413979/chaoticorder-globallightingproject/images-noLyrics/2-wakeup_owuj0d.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/2-WAKE_UP_nnmu69.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1589413979/chaoticorder-globallightingproject/images-noLyrics/2-wakeup_owuj0d.jpg",
    lyric: [
      <div>
        <p>
          The heavy metal nightmares,
          <br />
          Spoils all your dreams,
          <br />
          Eternity and darkness,
          <br />
          Trapped inside your skull
          <br />
          Your life weighs upon you,
          <br />
          it's breathing down your neck
          <br />
          There's a vessel waiting to take away your soul
        </p>
        <p>
          Nothing leads to nowhere,
          <br />
          No such thing as black
          <br />
          Tearing through the threshold,
          <br />
          spinning in your bed
        </p>
        <p>
          Wake up - it's inside your head
          <br />
          Wake up before you're dead
        </p>
        <p>
          A little easy money,
          <br />
          a whole lot of greed
          <br />
          It's mixed in a tall glass,
          <br />
          is it what you need
          <br />
          The shadows are alive now, behind every door
          <br />
          Looking over your shoulder,
          <br />
          you're running ever more
        </p>
        <p>
          Nothing leads to nowhere,
          <br />
          No such thing as black
          <br />
          Tearing through the threshold,
          <br />
          spinning in your bed
        </p>
        <p>
          Wake up - it's inside your head
          <br />
          Wake up - before you're dead
        </p>
        <p>Still time to change, all your dirty deeds</p>
        <p>
          You look around, for a better way
          <br />
          Don't be a fool, change the rules
          <br />
          Look - deep inside, for what you can do
        </p>
        <p>
          Wake up, it's coming for you
          <br />
          Wake up, time to save your soul
          <br />
          Wake up, still time to change
          <br />
          Wake up, deep inside of you
        </p>
      </div>,
    ],
  },
  {
    title: "Tears",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589413991/chaoticorder-globallightingproject/images-noLyrics/3-tears_w3nfbk.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/3-TEARS_lnpihr.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1589413991/chaoticorder-globallightingproject/images-noLyrics/3-tears_w3nfbk.jpg",
    lyric: [
      <div>
        <p>
          Another exhausting day,
          <br />
          there's no time to play
          <br />
          Never ending debts and all those bills to pay
        </p>
        <p>
          Can't you see, I've got to get away
          <br />
          I've got I call your phone,
          <br />
          I love to hear you say I want to be with you,
          <br />
          oh I love you so
        </p>
        <p>
          World so heavy, I can't hold it up
          <br />
          I feel so weak,
          <br />
          I can hardly breathe
          <br />
          It's time to go,
          <br />
          I've got to get away
          <br />
          I'll never come back to this place again
        </p>
        <p>
          And she said Dream with me,
          <br />
          dream with me and see Close your eyes,
          <br />
          float across the sea
          <br />
          Sure to be,
          <br />
          you will soon be free
        </p>
        <p>
          Friday comes,
          <br />
          never soon enough
          <br />
          Celebrating friends never seem to end
        </p>
        <p>
          I Call your phone,
          <br />
          you have great news
          <br />
          She said Baby in me,
          <br />
          changes everything
        </p>
        <p>
          And she said
          <br />
          Dream with me,
          <br />
          dream with me and see
          <br />
          Close your eyes,
          <br />
          float across the sea
          <br />
          Sure to be, you will soon be free
        </p>
        <p>
          With my friends In the car,
          <br />
          Go faster and faster
          <br />
          I heard them laugh,
          <br />
          I Didn't want to hit those trees
          <br />
          1 Should have went straight home,
          <br />
          I'm now in jail
          <br />
          So many years - So many tears
        </p>
        <p>
          Dream with me,
          <br />
          dream with me and see
          <br />
          Close your eyes,
          <br />
          float across the sea
          <br />
          Sure to be, you will soon be free
        </p>
        <p>
          Oh we love you so
          <br />
          Baby said hello
          <br />
          Yes he's walking now
          <br />
          Soon you will be free
        </p>
      </div>,
    ],
  },
  {
    title: "Dirty Mine",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589413986/chaoticorder-globallightingproject/images-noLyrics/4-dirtymine_k9deu0.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118307/chaoticorder-globallightingproject/4-DIRTY_MINE_rjsmiu.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1589413986/chaoticorder-globallightingproject/images-noLyrics/4-dirtymine_k9deu0.jpg",
    lyric: [
      <div>
        <p>
          She works so hard, all week long
          <br />
          She's always up and on her feet
        </p>
        <p>
          She loves to dance, then be romanced
          <br />
          She's feeling good and so divine
        </p>
        <p>
          She sips into a good wine buzz
          <br />
          She moves so fine, I lose my mind
        </p>
        <p>
          Both knowing that time has come
          <br />
          For us to be one on one
        </p>
        <p>
          We get behind closed doors
          <br />
          Our fantasies they do come true
          <br />
          She's my lady, she's my lover
          <br />
          She's my dirty mine
          <br />
          oh so fine on my mind
          <br />
          Girl yeah yeah
          <br />
          Whoo a whoo
        </p>
        <p>
          She walks on by
          <br />
          Can't help but notice
          <br />
          Her friendly smile is never out of place
        </p>
        <p>
          She moves so fine,
          <br />
          she's on my mind
          <br />
          My baby... oh, she's back for more
        </p>
        <p>
          She likes Heavy Metal,
          <br />
          Country music too
          <br />
          It's Country Metal with all her curves
        </p>
        <p>
          We get behind closed doors
          <br />
          Our fantasies they do come true
        </p>
        <p>
          She's my lady,
          <br />
          she's my lover
          <br />
          She's my, dirty mine baby
          <br />
          Oh so fine oh my my my
        </p>
        <p>Giddy up</p>
        <p>
          She works so hard, all week long
          <br />
          She's always up and on her feet
        </p>
        <p>
          She's my lady, she's my lover
          <br />
          She's my dirty mine baby
          <br />
          So fine all mine mine yeah yeah yeah
        </p>
        <p>
          Ohooh ooooh
          <br />
          Yeah yeah yeah giddy up and now
          <br />
          titty titty
        </p>
        <p>
          See all the ladies there on the dance floor
          <br />
          Looking so hot we couldn't ask for more
        </p>
        <p>
          Whoo a whoo
          <br />
          Whoo a whoo
          <br />
          Whoo a whoo
          <br />
          Dirty mine girl ha ha ha ha
        </p>
        <p>Giddy up</p>
      </div>,
    ],
  },
  {
    title: "Primitive Man",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589413997/chaoticorder-globallightingproject/images-noLyrics/5-primitiveman_fe7nt7.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118299/chaoticorder-globallightingproject/5-PRIMITVE_MAN_lrsghw.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1589413997/chaoticorder-globallightingproject/images-noLyrics/5-primitiveman_fe7nt7.jpg",
    lyric: [
      <div>
        <p>Ohh, huah, Ohn, huah Ohh, huah, Ohh, huah</p>
        <p>
          I climb the mountains and I live in a cave
          <br />
          I search the valley for what I crave
          <br />
          Sweet scent of woman penetrates my brain
          <br />
          This primal love is driving me insane
        </p>
        <p>
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive
        </p>
        <p>
          Ohh, huah, Ohh, huah
          <br />
          I tracked her scent to the watering hole
          <br />
          Where she lay wet naked, so beautiful
        </p>
        <p>
          I drag her back to my cave and then
          <br />
          Showed her my club
          <br />
          She said you're so primitive
        </p>
        <p>
          As they see us fly through the sky
          <br />
          She hears the calls and knowing why
          <br />
          The forces move her to the light
          <br />
          In her body grows intelligent life
          <br />
          She's alien desire
        </p>
        <p>
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive
        </p>
        <p>
          I paint your picture in blood on the wall
          <br />
          On a sabretooth rug we love until dawn
          <br />
          Then I slay a big t-rex, stoke the fire
          <br />
          As her eyes start to glow
        </p>
        <p>
          As They see us l through the sky
          <br />
          She hears the calls and knowing why
          <br />
          The forces move her to the light,
          <br />
          In the body grows intelligent Me
          <br />
          She's alien desire
        </p>
        <p>
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive
          <br />
          Primitive man primitive man so primitive{" "}
        </p>
      </div>,
    ],
  },
];

class Tcontentdisc2row1 extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: "",
      singer: "",
      thumbnail: "",
      audio: "",
      picture: "",
      lyric: "",
    };
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      title: "",
      singer: "",
      thumbnail: "",
      audio: "",
      picture: "",
      lyric: "",
      className: "",
    });
  };

  render() {
    let { thumbnail, title, description, tags, ...other } = this.props;
    return (
      <div>
        <Modal
          visible={this.state.modalIsOpen}
          width="1000"
          height="800"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <Row style={{ display: "flex" }}>
            <div
              style={{
                backgroundImage: `url(${this.state.picture})`,
                height: "800px",
                width: "1000px",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  verticalAlign: "middle",
                }}
              >
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardBody className="lyricsCards">
                    {this.state.lyric}
                  </CardBody>
                  <FaAngleDown
                    className="angledown"
                    focusable="false"
                    aria-hidden="true"
                  />
                </Card>
              </div>

            {/*  <div
                style={{
                  position: "absolute",
                  left: "8%",
                  top: "73%",
                }}
              >*/}
                                          <div style={{
                                position: 'absolute',
                                left: '77%',

                                top: '50%',
                                /*marginLeft: '-110px',
                            marginTop: '370px'*/}}>
                <ReactWebMediaPlayer
                  width={200}
                  height={200}
                  title={this.state.title}
                  thumbnail={this.state.thumbnail}
                  audio={this.state.audio}
                  vinyl={{
                    img: this.state.thumbnail,
                    rpm: 15,
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
        <Row style={{ display: "flex" }}>
          <Col xs="2" lg="2" md="6">
            <TaggedContentCard
              style={{ width: "20px", minWidth: "220px" }}
              thumbnail={song[0].picture}
              title="Where Were You"
              description=""
              tags={[<FaPlay focusable="false" aria-hidden="true" />]}
              onClick={() => {
                this.setState({
                  modalIsOpen: true,
                  title: song[0].title,
                  singer: song[0].singer,
                  thumbnail: song[0].thumbnail,
                  audio: song[0].audio,
                  picture: song[0].picture,
                  lyric: song[0].lyric,
                });
              }}
            />
          </Col>
          <Col xs="2" lg="2" md="6">
            <TaggedContentCard
              style={{ width: "20px", minWidth: "220px" }}
              thumbnail={song[1].picture}
              title="Wake Up"
              description=""
              tags={[<FaPlay focusable="false" aria-hidden="true" />]}
              onClick={() => {
                this.setState({
                  modalIsOpen: true,
                  title: song[1].title,
                  singer: song[1].singer,
                  thumbnail: song[1].thumbnail,
                  audio: song[1].audio,
                  picture: song[1].picture,
                  lyric: song[1].lyric,
                });
              }}
            />
          </Col>{" "}
          <Col xs="2" lg="2" md="6">
            <TaggedContentCard
              style={{ width: "20px", minWidth: "220px" }}
              thumbnail={song[2].picture}
              title="Tears"
              description=""
              tags={[<FaPlay focusable="false" aria-hidden="true" />]}
              onClick={() => {
                this.setState({
                  modalIsOpen: true,
                  title: song[2].title,
                  singer: song[2].singer,
                  thumbnail: song[2].thumbnail,
                  audio: song[2].audio,
                  picture: song[2].picture,
                  lyric: song[2].lyric,
                });
              }}
            />
          </Col>{" "}
          <Col xs="2" lg="2" md="6">
            <TaggedContentCard
              style={{ width: "20px", minWidth: "220px" }}
              thumbnail={song[3].picture}
              title="Dirty Mine"
              description=""
              tags={[<FaPlay focusable="false" aria-hidden="true" />]}
              onClick={() => {
                this.setState({
                  modalIsOpen: true,
                  title: song[3].title,
                  singer: song[3].singer,
                  thumbnail: song[3].thumbnail,
                  audio: song[3].audio,
                  picture: song[3].picture,
                  lyric: song[3].lyric,
                });
              }}
            />
          </Col>
          <Col xs="2" lg="2" md="6">
            <TaggedContentCard
              style={{ width: "20px", minWidth: "220px" }}
              thumbnail={song[4].picture}
              title="Primitive Man"
              description=""
              tags={[<FaPlay focusable="false" aria-hidden="true" />]}
              onClick={() => {
                this.setState({
                  modalIsOpen: true,
                  title: song[4].title,
                  singer: song[4].singer,
                  thumbnail: song[4].thumbnail,
                  audio: song[4].audio,
                  picture: song[4].picture,
                  lyric: song[4].lyric,
                });
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Tcontentdisc2row1;
