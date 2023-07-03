import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/home';
import About from '../Pages/about';
import Skills from '../Pages/skills';
import Projects from '../Pages/projects';
import Contact from '../Pages/contact';



const Routes =() => (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
      </Switch>
);
export default Routes;