import React from 'react'
import container04Styles from '../css/container04.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'
import ResponsivePlayer from './responsiveplayer01'
import formStyles from '../css/forms.module.css'
import { Container, Row, Col } from 'reactstrap';



class Container04 extends React.Component {
    render() {
      return (
        <div id="container04" data-scroll-id="signup" data-scroll-behavior="center" className="container columns full screen" >
        
            <div style={{textAlign: "center", marginTop: '1rem', marginBottom: '1rem', width: '350px'}}>
            <br/>
            <br/>
            <br/>
            <h1 id="text11" className={container04Styles.style1}  style={{color: "white", fontSize: '3rem'}}>Contact Us</h1>
            <br/>
            <br/>
              <form id="form02" method="post">
                <div className={container04Styles.inner}>
                  <div className={formStyles.field}>
                    <label htmlFor="form02-fname">Name</label>
                    <input type="text" name="fname" id="form02-fname" placeholder maxLength={128} required />
                  </div>
                  <div className={formStyles.field}>
                    <label htmlFor="form02-email">Email</label>
                    <input type="email" name="email" id="form02-email" placeholder maxLength={128} required />
                  </div>
                  <div className={formStyles.field}>
                    <input type="text" name="sms" id="form02-sms" placeholder="Sms" maxLength={128} />
                  </div>
                  <br/>
                  <div >
                    <button type="submit" style={{width: '100%', padding: '0px', margin: '0px'}}>Submit</button>
                  </div>
                </div>
                <input type="hidden" name="id" defaultValue="form02" />
              </form>
            </div>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="fname" />
              <input type="email" name="email" />
            </form>
      </div>
      )
    }
}

export default Container04