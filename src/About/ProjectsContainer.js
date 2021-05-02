import React from "react";
import { Container, Card, Image, Header } from "semantic-ui-react";
import images from "../Images";

const ProjectsContainer = () => {

  return (
    <Container
      style={{
        backgroundColor: "white",
        height: "27em",
        borderRadius: "15px",
        opacity: "0.95",
        marginBottom: "3em",
        overflowX: 'hidden'
      }}
    >
      <Header as='h1' style={{paddingTop: '2vh'}}>Projects</Header>
      <Card.Group itemsPerRow={3} style={{ padding: "0 2vw" }}>
        <Card onClick={()=>{window.open('https://stoxx.netlify.app', "_blank")}}>
          <Image src={images.stoxMain} />
          <Card.Content>
            <Card.Header>StoX</Card.Header>
            <Card.Meta>
              <span className="date">April 2021</span>
            </Card.Meta>
            <Card.Description>
              Quote stocks and add them to your watchlist. 
            </Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={()=>{window.open('https://apartmenthunter.netlify.app', "_blank")}}>
        <Image src={images.apartmenthunterMain} />
          <Card.Content>
            <Card.Header>Apartment//Hunter</Card.Header>
            <Card.Meta>
              <span className="date">March 2021</span>
            </Card.Meta>
            <Card.Description>
              Enter a zipcode to find and filter listings in that area.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={()=>{window.open('https://github.com/maquino96/pomodorapp-frontend', "_blank")}}>
        <Image src={images.pomodorappMain} />
          <Card.Content >
            <Card.Header>PomodorApp</Card.Header>
            <Card.Meta>
              <span className="date">February 2021</span>
            </Card.Meta>
            <Card.Description >
              Work and break timer based off the pomodoro method.
            </Card.Description>
          </Card.Content>
        </Card>

        {/* <Card>
        <Image src={images.pomodorappMain} />
          <Card.Content>
            <Card.Header>PomodorApp</Card.Header>
            <Card.Meta>
              <span className="date">February 2021</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card> */}
        
      </Card.Group>
    </Container>
  );
};

export default ProjectsContainer;
