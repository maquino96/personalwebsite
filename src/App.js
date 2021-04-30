import {useState} from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import About from './About/About';
import ProjectsRoute from './Projects/ProjectsRoute';
import BlogsRoute from './Blogs/BlogsRoute';
// import {Header} from 'semantic-ui-react'
import NavBar from './About/NavBar';
import Background from './Background';
import Landing from './Landing';


function App() {

  const [entered, setEntered] = useState(false)

  return (
    <div className="App" style={{height: '100%'}}>
      <Background
            entered={entered}
            setEntered={setEntered}
          />
      <Switch>
        <Route exact path='/'>
          <Landing/> 
        </Route>
        <Route exact path='/home'>
          <NavBar/>
          <About/>
        </Route>
        <Route exact path = '/projects'>
          <NavBar/>
          <ProjectsRoute />
        </Route>
        <Route exact path = '/blogs'>
          <NavBar/>
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
