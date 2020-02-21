import React from 'react'
import '../css/container01.module.css'

import { Row, Col } from 'reactstrap'




class Container01 extends React.Component {
    render() {
      return (
        <div id="container01" data-scroll-id="two" data-scroll-behavior="center" className="container default full screen">
        <div className="inner">
          <div className="afterSpacer01">
            {/*<h3 /*className="style1"* />Album Artwork Provided by Murray Kruger</h3>*/}
            {/*<h2 id="text05" className={container01Styles.style1}></h2>
            <p id="text06" className={container01Styles.style2}></p>*/}
            {/*<Row style={{
                
            }}>
              <Col sm="4" />
              <Col sm="4" />
              <Col sm="4"><p style={{textAlign: "right"}}>Artwork by Murray Kruger Artwork by Murray Kruger Artwork by Murray Kruger Artwork by Murray Kruger</p></Col>
          </Row>*/}
            
 
          
          <Row style={{
            /*display: 'inline-block',*/
            alignContent: 'right',
            justifyContent: 'right',
            padding: '0',
              }}>
                {/*<Col sm="4" >
                  <div></div>
                  </Col>
                <Col sm="4">
                  <div></div>
            </Col>*/}
                <Col sm="4">
                    <p className="style1"
                    style={{
                        fontSize: "1em", 
                        textAlign: "right", 
                        padding: "0"}}
                      >Artwork provided by <br /> 
                        <a href="https://www.murraykruger.com" 
                            style={{
                                textDecoration: 'underline',
                                color: 'white',
                       }}>MURRAY KRUGER </a> </p></Col>
                      </Row>
                      </div>
        </div>
       {/* <Row style={{
            display: 'inline-block',
            alignContent: 'right',
            justifyContent: 'right',
            padding: '0 4em',
              }}>
                <Col sm="4" >
                  <div></div>
                  </Col>
                <Col sm="4">
                  <div></div>
                </Col>
                <Col sm="4">
                    <p className="style1"
                    style={{
                        fontSize: "1em", 
                        textAlign: "right", 
                        padding: "0"}}
                      >Artwork provided by <br /> 
                        <a href="https://www.murraykruger.com" 
                            style={{
                                textDecoration: 'underline',
                                color: 'white',
                       }}>MURRAY KRUGER </a> </p></Col>
                      </Row>*/}
      </div>
      )
    }
}

export default Container01



