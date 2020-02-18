import React from 'react'
import '../css/containerHeader.module.css'

import Logo from '../images/logo-white-huge.png'
import Albumcover from '../images/album-cover2.jpg'


class Containerheader extends React.Component {
    render() {
      return (
        <div id="containerHeader" className="container full screen" data-scroll-id="one" data-scroll-behavior="center"  /*className={container01Styles.columns} className={container01Styles.full} className={container01Styles.full.screen}*/>
          <img className='albumpromo' 
          src={Albumcover} 
          alt=''
           /*mode='fit'*/ />
          <div className="inner" /*className={containerHeaderStyles.inner}*/> 
          
             <img className='albumlogo' src={Logo} alt='' /*mode='fit' */ />
               <p 
               id="text04" 
               className="style4" 
               style={{
                 color: '#FCAC02 !important',
               }}
             > Feed The People - available now!</p>
         
         </div>
         </div>
      )
    }
}

export default Containerheader