import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';
import Chemtrails from '../../images/song-art/Chemtrails.jpg'
//import Chemtrailsmp3 from '../../audio/1-Chemtrails.mp3'
//import Chemtrailsmp3 from 'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3'
import Logowhite from '../../images/logo-white.png'

import '../../css/media01.css'

import Feed from '../../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
//import Feedmp3 from '../../audio/2-FeedThePeople.mp3'

import Burn from '../../images/song-art/The-Tower-BURN.jpg'
//import Burnmp3 from '../../audio/3-BURNIT.mp3'

import Another from '../../images/song-art/The-Wait-ANOTHERTHING.jpg'
//import Anothermp3 from '../../audio/4-AnotherThing.mp3'

import Hate from '../../images/song-art/the-oracle-HATE.jpg'
//import Hatemp3 from '../../audio/5-HATEREPULSION.mp3'

import Sorry from '../../images/song-art/closeyoureyestosee-SORRY.jpg'
//import Sorrymp3 from '../../audio/6-Sorry.mp3'

import Chains from '../../images/song-art/medicineman-CHAINS.jpg'
//import Chainsmp3 from '../../audio/7-CHAINS.mp3'

import Angel from '../../images/song-art/shaman-COLORS.jpg'
//import Angelmp3 from '../../audio/8-ChaoticOrder.mp3'

import Never from '../../images/song-art/The-Magician-NEVEREND.jpg'
//import Nevermp3 from '../../audio/9-NeverEnd.mp3'

import Earth from '../../images/song-art/HighPriestess-EARTH.jpg'
//import Earthmp3 from '../../audio/10-Colors.mp3'


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

	},
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


class Mediaplayer01a extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  title: [],
		  thumbnail: [], 
		  audio: [],
		}
		
	  }
    render() {
      return (
        <div className="songart">
			<row style={{
                    display: 'flex',
                }}>
            <ReactWebMediaPlayer
	            title="Chemtrails"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/Chemtrails_fw7xav.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/Chemtrails_fw7xav.jpg', rpm: 20}}
				width={200}
				height={200}
            />
            <ReactWebMediaPlayer
	            title="Feed The People"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/album-cover-2500x1364-FEEDTHEPEOPLE_lnpgkv.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593761/chaoticorder-feedthepeople/album-cover-2500x1364-FEEDTHEPEOPLE_lnpgkv.jpg', rpm: 20}}
				width={200}
				height={200}
            />
	            
            <ReactWebMediaPlayer
				title="Burn"
				thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593779/chaoticorder-feedthepeople/The-Tower-BURN_e3erzi.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593779/chaoticorder-feedthepeople/The-Tower-BURN_e3erzi.jpg', rpm: 20}}
				width={200}
				height={200}
		/>
		
	            
            <ReactWebMediaPlayer
	            title="Another Thing"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593736/chaoticorder-feedthepeople/The-Wait-ANOTHERTHING_uqplhn.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593736/chaoticorder-feedthepeople/The-Wait-ANOTHERTHING_uqplhn.jpg', rpm: 20}}
				width={200}
				height={200}
            />
	            
            <ReactWebMediaPlayer
	            title="Hate"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593775/chaoticorder-feedthepeople/the-oracle-HATE_jcwpqs.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593775/chaoticorder-feedthepeople/the-oracle-HATE_jcwpqs.jpg', rpm: 20}}
				width={200}
				height={200}
            />
				
            </row>

			<row style={{
                    display: 'flex',
                }}>
                    <ReactWebMediaPlayer
						title="Sorry"
						thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593768/chaoticorder-feedthepeople/closeyoureyestosee-SORRY_yf4soq.jpg"
						audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3"
						vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593768/chaoticorder-feedthepeople/closeyoureyestosee-SORRY_yf4soq.jpg', rpm: 20}}
						width={200}
						height={200}
					/>
            <ReactWebMediaPlayer
	            title="Chains"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593769/chaoticorder-feedthepeople/medicineman-CHAINS_aee5zv.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593769/chaoticorder-feedthepeople/medicineman-CHAINS_aee5zv.jpg', rpm: 20}}
				width={200}
				height={200}
            />
	            
            <ReactWebMediaPlayer
	            title="Earth"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593780/chaoticorder-feedthepeople/shaman-COLORS_hypvjz.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593780/chaoticorder-feedthepeople/shaman-COLORS_hypvjz.jpg', rpm: 20}}
				width={200}
				height={200}
            />
	            
            <ReactWebMediaPlayer
	            title="Never End"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593773/chaoticorder-feedthepeople/The-Magician-NEVEREND_vimjgw.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593773/chaoticorder-feedthepeople/The-Magician-NEVEREND_vimjgw.jpg', rpm: 20}}
				width={200}
				height={200}
            />
	            
            <ReactWebMediaPlayer
	            title="Colors"
	            thumbnail="https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593779/chaoticorder-feedthepeople/HighPriestess-EARTH_cr9rox.jpg"
				audio="https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3"
				vinyl={{ img: 'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1579593779/chaoticorder-feedthepeople/HighPriestess-EARTH_cr9rox.jpg', rpm: 20}}
				width={200}
				height={200}
            />


                </row>


        </div>
        )
    }
}

export default Mediaplayer01a