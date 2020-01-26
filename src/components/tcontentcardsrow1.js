import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';


const lyrics = [{
    name: 'KEMTRAILS',
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
},{
    name: 'FEED the PEOPLE',
    lyrics: {
        p1: `INTRO LEAD /      
        Voice -- Hayeeeeee
        Feed the people inside your life 
        Feed the people just get in line 
        Feed the people another lie
        Feed the people open wide
        
        Uuuu uou 
        Every time we try to get ahead
        Feed the People
        Feed the people
        Uuuu uou 
        We give you take it’s all that we can stand 
        Feed the People
        Feed the People
        Uuuu uou 
        
        Feed the people almighty dollar
        Feed the people ain’t worth a dime
        Feed the people whole pack of lies
        Feed the people just one more time
        Uuuu uou 
        Every time we try to get ahead
        Feed the People
        Feed the people
        Uuuu uou 

        We give you take it’s more than we can stand 
        Feed the People
        Feed the People
        Uuuuuou
        `,
        p2: `
        Feed the people insecticides
        Feed the people the pesticides 
        Feed the people your dirty water
        Feed the people there hungry

        Uuuu uou 
        Every time we try to get ahead
        Feed the People
        Feed the people

        Uuuu uou 
        Feed the people insecticides
        Feed the people the pesticides 
        Feed the people your dirty water
        Feed the people we’re hungry
        LEAD / EFFECTS
        END

        `
    }
},{
    name: 'BURN',
    lyrics: {
        p1: `Hey Hey Hey 

        Burn it
        Burn it
        Burn it to the ground      
        
        Ashes -blowing in the wind
        Smoke -burns through your eye’s
        Dust -all through the air
        Darkness -fall’s through the sky
        
        Burn it   - Look around           
        Burn it   - It’s falling down     
        Burn it.   -To the ground             
        Burn it   -We will all be 
        Falling down`,
        p2: `
        Burn it    -Plumes of smoke
        Burn it     -Until we choke
        Burn it    -There Nothing left
        Burn it.   -We will burn it to the ground

        LEAD  

        We will burn it to the ground
        We will burn it to the ground

        END

        `
    }
},{
    name: 'A-THING',
    lyrics: {
        p1: `You get a piece of me 
        ya taste so fine 
        Yes I like to hold you down
        
        As you move I turn        
        Right on time 
        O so fine
        
        Shhhhhh
        
        Don’t say a word 
        Harder never deep enough
        Shiver with delight
        Rocking it through the night
        
        Don’t say a word 
        Harder never deep enough
        Shiver with delight
        Rocking it through the night

        It’s not what we know 
        It’s who we know
        We thought it was good
        So here’s what I got to say

        Oooooo
        `,
        p2: `
        Try to confuse me                 
        In this state of mine
        Try to abuse me
        So easy you defy

        Try to change my world
        I blink you lie
        Yes same o rumor in town
        As you move on out
        Right on time
        O not again

        Shhhhhh

        Don’t say a word
        Hammer beating in my 
        Shiver to the bone
        Were always good in bed

        Another thing I must confess
        You’re still a taker who never gives
        This won’t happen
        Ever again

        Always a lie
        You always deny








        Try to confuse me                         
        In this state of mine
        Try to abuse me
        So easily defy

        You’re a taker who never gives back
        Difficult and exhausting 
        I’m over it.......... 

        `
    }
},{
    name: 'HATE',
    lyrics: {
        p1: `Hayyyyyyyyyy

        Hate is my best friend
        Hate is what I feel for you
        Fear is what you see in me
        Pain I have in store for you
        
        Leave me alone
        Let me be
        Let me go
        
        Is this what you want me to see
        Is this what you wanted me to be
        Look at what you’ve done to me
        What are you doing to me
        I want you to leave me alone
        
        Haaaaa

        Hate is my best friend
        Hate is my best friend who’s lonely
        I hate to be the only one
        Don’t you know that I’m living in hell 

        Is this what you wanted to see
        Is this what you want me to be
`,
        p2: `
        I don’t understand 
        Why don’t you let me out 

        Ask your mother while you’re freaking me out 
        I’ll find a way out to cure this disease
        I’ve never seen the man on the moon 

        ha ha ha ha

        I hate you
        Leave me alone 
        I hate that you hate
        What we want to be 
        Is this what you wanted to see
        Is this what you want me to be

        LEAVE ME ALONE

        You’re alone in the dark, 
        ha ha ha ha ha

        `
    }
},{
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

class TContentCards01 extends React.Component {
    

    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          id: 0
        };
    }

    closeModal = () => {
        this.setState({modalIsOpen: false, content: ''});
    }

    render() {
        console.log(lyrics[0]);
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
                        
                        {lyrics[this.state.id].name} </h1></Col>
                    </Row>

                    <Row style={{display: 'flex'}}>
                        <Col xs="6" lg="6" md="6" style={{margin: "1rem"}}><p> {lyrics[this.state.id].lyrics.p1} </p></Col>
                        <Col xs="6" lg="6" md="6" style={{margin: "1rem"}}><p> {lyrics[this.state.id].lyrics.p2} </p></Col>
                    </Row>
                    
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
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, id: 0})} }
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
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, id: 1})} }
                        

                    />                
                    </Col > <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Burn}
                        title='Burn'
                        description=''description
                        tags={[
                            '',
                            ''
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, id: 2})} }
                        
                    />                
                    </Col> <Col xs="2" lg="2" md="6">
                        <TaggedContentCard
                        href= '#'
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Another}
                        title='Another'
                        description=''description
                        tags={[
                            '',
                            '',
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, id: 3})} }
                        
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
                            '',
                            '',
                        ]}
                        onClick={ () => { this.setState({ modalIsOpen: true, id: 4})} }
                        
                    />                
                    </Col>
                </Row>
        </div>
   );
}
}
export default TContentCards01