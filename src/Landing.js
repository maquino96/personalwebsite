// import React from 'react'
import {Container, Icon, Button} from 'semantic-ui-react'

const Landing = () => {
    return (
        <Container style={{height:'100%', width: '100%'}}>
            <Icon inverted size='large' name='question circle outline'style={{position: 'absolute', left: '40px', top: '25px', zIndex: '1'}}/>
            <Container>
            <Button inverted size='massive' style={{position: 'relative', zIndex: '1', margin:'25% 25%'}}>Enter</Button>

            </Container>
            
        </Container>

    )
}

export default Landing
