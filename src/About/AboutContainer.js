import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const AboutContainer = () => {


    const buttonClick = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        if (e.target.value === 'github') {
            window.open('https://github.com/maquino96', "_blank")

        } else if (e.target.value === 'linkedin') {
            window.open('https://www.linkedin.com/in/matthew-aquino-27211899/', "_blank")
        } else {
            window.open('https://matthewaquino.medium.com/', "_blank")
        }
    }


  return (
    <Container
      style={{
        backgroundColor: "white",
        height: "27em",
        borderRadius: "15px",
        opacity: ".95",
        overflowY: 'hidden'
      }}
    >

      <Header as="h2" style={{paddingTop:'1em'}}>
        <Header.Content>
          Matthew Aquino
          <Header.Subheader>Software Engineer</Header.Subheader>
        </Header.Content>
      </Header>

      <Container style={{width: '90%', textAlign: 'left'}}>
          Hi, welcome to my site. Feel free to checkout my projects and blog posts to the right. If you want to reach out feel free to contact me at matthewaquino96@gmail.com or any of the sites below. 

      </Container>

      <Header as='h3'>
          Connect with me on:
      </Header>
      <Container style={{}}>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='github' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='github square'/>Github</Button>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='linkedin' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='linkedin'/>Linkedin</Button>
          <Button color='black' onClick={(e)=>buttonClick(e)} value='medium' style={{marginLeft: '10px', marginTop: '10px'}}><Icon name='medium'/>Medium</Button>
      </Container>
      <Button style={{marginTop: '3em'}}>Background</Button>
    </Container>
    
  );
};

export default AboutContainer;
