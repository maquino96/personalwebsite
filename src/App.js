import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import About from './About/About';
import ProjectsRoute from './Projects/ProjectsRoute';
import BlogsRoute from './Blogs/BlogsRoute';
// import {Header} from 'semantic-ui-react'
import NavBar from './About/NavBar';
import Background from './Background';


function App() {

  return (
    <div className="App" style={{height: '100%'}}>
      <Background/>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <About/>
        </Route>
        <Route exact path = '/projects'>
          <ProjectsRoute />
        </Route>
        <Route exact path = '/blogs'>
          <BlogsRoute />
        </Route>
        <Route path='*'>
          <h1 class='error'> Error: 404 NOT FOUND </h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
