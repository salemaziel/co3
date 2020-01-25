import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';
import { Button } from 'reactstrap'



class PlayList extends Component {
    state = {
        audio: {
            audio_url: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
            thumbnail: "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/Chemtrails_fw7xav.jpg",
            title: 'Chemtrails - Chaotic Order'
        }
    }
    handleChangeMusic() {
       const audio = {
        audio_url: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3",
        thumbnail: "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/album-cover-2500x1364-FEEDTHEPEOPLE_lnpgkv.jpg",
        title: 'Feed Thw People - Chaotic Order',
        autoplay: true
       }

       this.setState({audio});
    }
    render() {
        const {audio} = {...this.state};
        return (
            <div>
            <ReactWebMediaPlayer
                        width={'100%'} height={400}
                        title={audio.title}
                        thumbnail={audio.thumbnail}
                        audio={audio.audio_url}
                        logo={{
                            img: "https://nusid.net/your-logo.png",
                            href: "https://www.npmjs.com/package/react-web-media-player",
                            autoplay: true,
                        }}
            />

            <Button onClick={() => this.handleChangeMusic()}>Update the current audio</Button>
            </div>
        );
    }
}

export default PlayList;