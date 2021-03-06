import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import {useHistory} from 'react-router-dom'

const AboutContainer = () => {
    const history = useHistory()
    const buttonClick = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        if (e.target.value === 'github') {
            window.open('https://github.com/maquino96', "_blank")

        } else if (e.target.value === 'linkedin') {
            window.open('https://www.linkedin.com/in/matthew-aquino-27211899/', "_blank")
        } else if( e.target.value === 'medium') {
            window.open('https://matthewaquino.medium.com/', "_blank")
        } else {
          window.open('https://drive.google.com/file/d/1YMYKqd9O5IA1EI1EXfXjoQeUk3Nz_xN2/view?usp=sharing', "_blank")
        }
    }


  return (
    <Container
      style={{
        backgroundColor: "white",
        height: "27em",
        borderRadius: "15px",
        opacity: ".95",
        // overflowY: 'scroll'
      }}
    >
      <Header as="h2" style={{paddingTop:'.5em'}}>
        <Header.Content>
          Matthew Aquino
          <Header.Subheader>Software Engineer</Header.Subheader>
        </Header.Content>
      </Header>

      <Container style={{width: '90%', textAlign: 'left'}}>
          Hi, welcome to my site. Feel free to checkout my projects and blog posts to the right. If you want to reach out feel free to contact me at matthewaquino96@gmail.com or any of the sites below. 

      </Container>

      <Header as='h3' style={{marginTop: '.5em', marginBottom: '.5em'}}>
          Connect with me on:
      </Header>
      <Container style={{}}>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='github' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='github square'/>Github</Button>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='linkedin' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='linkedin'/>Linkedin</Button>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='medium' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='medium'/>Medium</Button>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='resume' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='file'/>Resume</Button>
      </Container>
      <Button basic  color='black' onClick={()=>{history.push('/')}} style={{marginTop: '.75em'}}>Back</Button>
    </Container>
    
  );
};

export default AboutContainer;
