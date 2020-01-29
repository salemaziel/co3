import React from 'react'
import container01Styles from '../css/container01.module.css'
import '../css/container01.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'



//import Rmusic2 from './Rmusic2'

class Container01 extends React.Component {
    render() {
      return (
        <div id="container01" data-scroll-id="two" data-scroll-behavior="center" className="container columns full screen">
        <div className={container01Styles.inner}>
          <div className={container01Styles.afterSpacer}>
            <h2 id="text05" className={container01Styles.style1}></h2>
           {/*} <hr id="divider02" />*/}
            <p id="text06" className={container01Styles.style2}></p>
            {/**<TContentCards />**/}
            {/**<ul id="buttons04" className="style1 buttons">
              <li>
                <a href="#three" className="button n01">
                  <svg>
                    <use xlinkHref="#icon-a3b" />
                  </svg>
                  <span className="label">Next</span>
                </a>
              </li>
            </ul>**/}
          </div>
          <span />
        </div>
      </div>
      )
    }
}

export default Container01



