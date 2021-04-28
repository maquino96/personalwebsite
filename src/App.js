import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import About from './Home/About';
import ProjectsRoute from './Projects/ProjectsRoute';
import BlogsRoute from './Blogs/BlogsRoute';


function App() {
  return (
    <div className="App">
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
