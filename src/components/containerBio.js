import React from 'react'
import '../css/containerBio.css'
import Jackbio from '../images/JacksCave_1600x.jpg'
import Lazyload from 'react-lazyload'
import Jcavemobile from './jcavemobile'


const ContainerBio = () => (
        <div id="containerBio" data-scroll-id="four" data-scroll-behavior="center" className="container columns full screen">
            <div id="inner" >
                <div className="afterSpacer">
                  
                    <img className="jcavefull" src={Jackbio} 
                          alt="Primary artist of Chaotic Order Jack Dubord"
                          className="jackbio">
                    </img>
                    <Jcavemobile className="jcavemobile" />
                  
            
          </div>
        </div>
      </div>
      )

export default ContainerBio