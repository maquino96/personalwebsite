import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import AboutContainer from './AboutContainer'
import BlogsContainer from './BlogsContainer'
import ProjectsContainer from './ProjectsContainer'

const About = () => {
    return (
        <Container>
            <Grid>
                <Grid.Column width={6}>
                    <AboutContainer />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Grid.Row>
                        <ProjectsContainer />
                    </Grid.Row>
                    <Grid.Row>
                        <BlogsContainer />
                    </Grid.Row>

                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default About
