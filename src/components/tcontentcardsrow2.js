import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Angel from '../images/song-art/shaman-ANGEL.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';



const lyrics = [{
    name: 'SORRY',
    lyrics: {
        p1: `Intro.
        Cry Vocals 
        Uuummm aaaaaaa
        
        I’m so sorry
        Ya I didn’t mean
        to make you  go away
        
        Air—
        
        I’m so sorry 
        
        For putting you ten feet 
        Under ground
        
        Sorry 
        Didn’t mean to make you go

        Down into the ground 
        I put you there`,
        p2: `
        Since you’ve gone away 
        I miss your soul

        Sorry
        Down into the ground

        Sorry
        I didn’t mean to let you go   

        LEAD—

        Mmmmmmmm
        The grass is always greener
        Where I know you are 
        `
    }
},{
    name: 'CHAINS',
    lyrics: {
        p1: `Chains
        Chains
        
        Nogoooo
        
        Bang my head a way I don’t 
        want to be 
        Don’t know why you take me there
        Twist and turn my insecurity 
        Do you like to watch me     squirm  
        
        Shut up 
        Shut up and leave me be
        There’s no pleasing you
        All the pain I grieve 
        Why do I endure your shame
        Breaking through - through all these chains
        Remove the shackles of my pain
        Breaking through-through all these chains

        All the chains
        What you do is insanity                    
        Insane to me

        The fear inside me
        Is suspicious               
        Suspicious 

        Are you pleased with your 
        devise        

        Devise
`,
        p2: `
        Devise

        Or will you leave 
        As I lay dying              

        Shut up 
        Shut up and leave me be
        There’s no pleasing you
        All the pain I’ve grieve  
        Nogooo

        LEAD

        All the pain I greave 
        Breaking through the chains

        Why do I endure your shame
        Breaking through - through all these chains
        Remove the shackles of my pain
        Bbreaking through - through all  these chains





        All the chains          
        All the Pain
        All the chains           
        All the Pain—
        All the chains 
        All the chains
        All the chains 
        All the chains   

        Nogoooo

        All the pain I grieve
        Breaking through the chains
        All the pain I grieve

        Breaking through the chains
        Chains 
        Chains 
        Chains
        Pain I greave   
        Chains
        Through the chains

        `
    }
},{
    name: 'EARTH',
    lyrics: {
        p1: `Who am I                  
        Who brings you light
        Through the darkness
        Of the night   
        
        Oooooo  
        
        Who am I     
        What are we
        Where do we go    
        Why do we live
        How much longer
        For the eeeeeeearth
        
        Who am I          
        
        Who brings you light
        Through the darkness
        Of the night

        Aaaaaa Aaaaaa Aaaa

        WE WILL RETURN   

         `,
        p2: `

        LEAD

        Through the night
        Black or white
        Makes no difference
        Without the light  

        Soooooooo

        Who am I   
        What are we
        Where do we go   
        Why do we live
        How much longer     
        For the eeeeearth

        On the earth 
        Do the good 
        Aand good will be
        Until the end of end

        Aaaaaa Aaaaaa Aaaa

        HuuRrrraaaaaaaaaa

        `
    }
},{
    name: 'NEVER',
    lyrics: {
        p1: `I’m not an angel 
        I never said I was
        Some things are best                 left unsaid
        Halfway through my life  
        I’m still searching on
        For something better than yesterday 
        
        Mmmmmmmmm
        
        Pathway through our lives
        Youth were searching for
        Never knowing what you’ll      find
        
        If love could’ve saved us you’d still be here
        You’re the life of the party Uninvited  
        Stop preaching to the preacher we’ve all been around the block
        It’s not our first rodeo              
        how far can we go

        Red Yellow Green Blue are the Colors of our soles 


            `,
        p2: `
        Life lives in memories from      
        the sunrise to the sun set  
        Dose it matter after all we’re do we go from here
        Can you really see - see where you’re going too
        
        Walking to the edge of the earth to the top of the ice 
        As it starts to crack slipping I’m falling down 
        Better way of life 
        In my life I’m nobody 
        Cause I can’t spend it with you

        What goes around comes around as it reaches through your soul

        What you’ve done will come back to you
        `
    }
},{
    name: 'COLORS',
    lyrics: {
        p1: `Hay hay
        That’s a big old plane
        White lines in the sky,
        Making me wonder 
        
        Hay hay
        Take the planes away
        They dirty the sky
        Making it Hotter
         
        Big O cans flying through the sky
        Sure know why it’s on my mind
        We talk about a better way
        All the lines all through the sky
         
        When it all comes down to fait 
        There’s nothing there that’s good for you`,
        p2: `
        They say the lines goanna make it rain  
        It’s only a matter of time no lie
        Cheam trails 
        Protecting us from bad sun rays
        Others say it’s such a haze
        Carbon dioxide from the planes
        Soot particulates are to blame When it all comes down to fait 
        There’s nothing there that’s good for you                                        
        They say the lines goanna make it rain  
        It’s only a matter of time no lie

        Cheam trails
        Cheam trails
        Cheam trails

        `
    }
}]

class TContentCards02 extends React.Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          index: 0
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
                    visible={this.state.modalIsOpen} width="600" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}
                    >
                     <Row style={{display: 'flex'}}>
                        <Col xs="6" lg="6" md="6" style={{margin: "1rem"}}><h1> 
                        
                        {lyrics[this.state.index].name} </h1></Col>
                    </Row>

                    <Row style={{display: 'flex'}}>
                        <Col xs="6" lg="6" md="6" style={{margin: "1rem"}}><p> {lyrics[this.state.index].lyrics.p1} </p></Col>
                        <Col xs="6" lg="6" md="6" style={{margin: "1rem"}}><p> {lyrics[this.state.index].lyrics.p2} </p></Col>
                    </Row>
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
                        onClick={ () => { this.setState({ modalIsOpen: true, index: 0})} }
                    />   
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        href= '#'
                        thumbnail={Chains}
                        title='Chains'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, index: 1})} }
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
                        onClick={ () => { this.setState({ modalIsOpen: true, index: 2})} }                    
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
                        onClick={ () => { this.setState({ modalIsOpen: true, index: 3})} }
                        
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
                        onClick={ () => { this.setState({ modalIsOpen: true,index: 4})} }
                    />   
                    </Col>
                </Row>
            </div>
           
   );
}
}
export default TContentCards02