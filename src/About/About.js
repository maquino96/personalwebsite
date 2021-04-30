import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import AboutContainer from "./AboutContainer";
import BlogsContainer from "./BlogsContainer";
import ProjectsContainer from "./ProjectsContainer";
import Headshot_profile from "../Images/Headshot_profile.png";


const About = () => {
  return (
    <Container style={{ marginTop: "2em",width: "90%" }}>
      <Grid>
        <Grid.Column width={4} >
          <Image
            centered
            src={Headshot_profile}
            style={{
              height: "27em",
              borderRadius: "50%",
              marginBottom: '3em'
            }}
          />
          <AboutContainer />
        </Grid.Column>
        <Grid.Column width={12} >
          <Grid.Row>
            <ProjectsContainer />
          </Grid.Row>
          <Grid.Row>
            <BlogsContainer />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default About;
