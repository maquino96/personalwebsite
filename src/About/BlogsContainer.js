import React from 'react'
import { Container, Card, Header } from 'semantic-ui-react'

const BlogsContainer = () => {
    return (
        <Container style={{backgroundColor: 'white', height: '27em', borderRadius: '15px', opacity: '0.95', overflowY: 'scroll', overflowX: 'hidden'}}>
            <Header as='h1' style={{paddingTop: '2vh'}}>Blogs</Header>
            <Card.Group itemsPerRow={2} style={{padding: '0 4vh'}}>
                <Card fluid onClick={()=>{window.open('https://medium.com/geekculture/data-visualization-with-plotly-js-59bae614cc65', "_blank")}} style={{height: '10vh'}}>
                    <Header as='h3' style={{paddingTop: '2.5vh'}}>
                        Data Visualization with Plotly.js
                        <Header.Subheader>Published: April 19</Header.Subheader>
                    </Header>
                </Card>
                <Card fluid onClick={()=>{window.open('https://blog.usejournal.com/implementing-the-google-maps-api-into-a-react-app-a57cfbf46abb', "_blank")}} style={{height: '10vh'}}>
                    <Header as='h3' style={{paddingTop: '2.5vh'}}>
                    Implementing the Google Maps API into a React App
                    <Header.Subheader>Published: March 29</Header.Subheader>

                    </Header>
                </Card>
                <Card fluid onClick={()=>{window.open('https://matthewaquino.medium.com/event-delegation-in-javascript-677443938ce2', "_blank")}} style={{height: '10vh'}}>
                    <Header as='h3' style={{paddingTop: '2.5vh'}}>
                    Event Delegation in JavaScript
                    <Header.Subheader>Published: March 8</Header.Subheader>
                    </Header>
                </Card>
                <Card fluid onClick={()=>{window.open('https://matthewaquino.medium.com/basics-of-git-branching-and-workflow-on-git-b073522c1e69', "_blank")}} style={{height: '10vh'}}>
                    <Header as='h3' style={{paddingTop: '2.5vh'}}>
                    Basics of Branching and Workflow on Git
                    <Header.Subheader>Published: February 19</Header.Subheader>
                    </Header>
                </Card>
            </Card.Group>
        </Container>
    )
}

export default BlogsContainer
