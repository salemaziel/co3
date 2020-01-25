import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';



class TContentCards01 extends React.Component {

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
                        thumbnail={Chemtrails}
                        title='Chem Trails'
                        description=''description
                        tags={[
                            'song',
                            'tag'
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Chem Trails Lyrics'})} }
                    />                
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Feedthepeople}
                        title='Feed the people'
                        description=''description
                        tags={[
                            'song',
                            'tag'
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Feed the people lyrics'})} }
                        

                    />                
                    </Col > <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Burn}
                        title='Burn'
                        description=''description
                        tags={[
                            'song',
                            'tag'
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Burn Lyrics'})} }
                        
                    />                
                    </Col> <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Another}
                        title='Another'
                        description=''description
                        tags={[
                            'song',
                            'new',
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Another Lyrics'})} }
                        
                    />                
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Hate}
                        title='Hate'
                        description=''description
                        tags={[
                            'song',
                            'new',
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, content: 'Hate Lyrics'})} }
                        
                    />                
                    </Col>
                </Row>
        </div>
   );
}
}
export default TContentCards01