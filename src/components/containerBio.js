import React from 'react'
import containerBioStyles from '../css/containerBio.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'
import ResponsivePlayer from './responsiveplayer01'



class ContainerBio extends React.Component {
    render() {
      return (
        <div id="containerBio" data-scroll-id="three" data-scroll-behavior="center" className="container columns full screen">
        <div id="inner" >
          <span />
          <div className="afterSpacer" >
            <h2 id="text07" className="style1" /*style={{
              marginBottom: "1rem",
              color: "#7c795d",  fontSize: '45px', fontWeight: 'normal', lineHeight: '48px', margin: 0}}*/ >Artist Bio </h2>
            <p id="text10" className="style2" /*className={containerBioStyles.style2}  align= "justify"
            style={{color: 'white', fontSize: '18px', lineHeight: '32px', margin: "0 0 24px"}}*/
            >
            <br/>
            <strong>What is Lorem Ipsum?</strong><br/>
            <br/>
            <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           <br/>
           <br/>
           <br/>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
           
          </div>
        </div>
      </div>
      )
    }
}

export default ContainerBio