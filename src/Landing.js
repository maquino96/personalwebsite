// import React from 'react'
import {Container, Icon, Button, Popup} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

const Landing = ({entered, setEntered}) => {
    const history = useHistory()

    const handleEnter = (e) => {
        e.preventDefault()
        history.push('/home')
        
    }

    return (
        <Container style={{height:'100%', width: '100%'}}>
            <Popup
            content='Click on the screen to produce more particles. The cursor repulses particles. Credit to matteobruni and the tsparticles library for the interactive background.'
            trigger={
                <Icon inverted size='large' name='question circle outline'style={{position: 'absolute', left: '40px', top: '25px', zIndex: '1'}}/>
            }/>
            <Container>
            <Button inverted size='massive' onClick={(e)=>handleEnter(e)} style={{position: 'relative', zIndex: '1', margin:'25% 25%'}}>enter mattaquino.dev</Button>

            </Container>
            
        </Container>

    )
}

export default Landing
