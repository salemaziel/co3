import React from 'react'
import containerBioStyles from '../css/containerInfo.css'



class ContainerInfo extends React.Component {
    render() {
      return (
        
        <div id="containerInfo" className="container default full screen">
          <div className={containerBioStyles.inner}>
            <h2 id="text09" className={containerBioStyles.style1}>For More Info</h2>
            {/**<hr id="divider04" />**/}
            <p id="text08" className={containerBioStyles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
            <ul id="buttons01" className="style1 buttons">
              <li>
                <a href="#" className="button n01">
                  <svg>
                    <use xlinkHref="#icon-a3b" />
                  </svg>
                  <span className={containerBioStyles.label}>Continue</span>
                </a>
              </li>
            </ul>
            <p id="text12" className={containerBioStyles.style5}>© Chaotic Order Music. All rights reserved.</p>
          </div>
        </div>
      
      )
    }
}

export default ContainerInfo