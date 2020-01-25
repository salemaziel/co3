import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Angel from '../images/song-art/shaman-ANGEL.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';





class TContentCards02 extends React.Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          content: ''
        };
    }

    closeModal = () => {
        this.setState({modalIsOpen: false, content: ''});
    }

    render() {
        let {
          href,
          thumbnail,
          title,
          description,
          tags,
          ...other
        } = this.props;
        return (
            <div>
                <Modal
                    visible={this.state.modalIsOpen} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}
                    >
                    <h1> {this.state.content} </h1>
                </Modal>
                <Row style={{display: 'flex'}}>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Sorry}
                        title='Sorry'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Sorry Lyrics'})} }
                    />   
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <gedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Chains}
                        title='Chains'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Chains Lyrics'})} }
                    />   
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Angel}
                        title='Angel'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Angel Lyrics'})} }                    
                    />   
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Never}
                        title='Never'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Never Lyrics'})} }
                        
                    />   
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Earth}
                        title='Earth'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Earth Lyrics'})} }
                    />   
                    </Col>
                </Row>
            </div>
           
   );
}
}
export default TContentCards02