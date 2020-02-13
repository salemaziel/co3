import React from 'react'
import container01Styles from '../css/container01.module.css'
import '../css/container01.module.css'

import { Row, Col } from 'reactstrap'




class Container01 extends React.Component {
    render() {
      return (
        <div id="container01" data-scroll-id="two" data-scroll-behavior="center" className="container full screen">
        <div id="main" className="inner">
          <div className="afterSpacer">
            {/*<h2 id="text05" className={container01Styles.style1}></h2>
            <p id="text06" className={container01Styles.style2}></p>*/}
            {/*<Row style={{
                
            }}>
                
              <Col sm="4"><p style={{textAlign: "right"}}>Artwork by Murray Kruger</p></Col>
          </Row>*/}
            

          </div>
          <span />
        </div>
      </div>
      )
    }
}

export default Container01



