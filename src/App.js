import React from 'react';
import Index from './components/homePage/index';
import About from './components/About-page/About'
import Service from './components/Service/index'
import Works from './components/Works/index'
import Blog from './components/Blog/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
  <Router>
    <Switch>
      <Route exact path ='/'>
         <Index/>
      </Route>
      <Route path='/about'>
         <About/>
      </Route>
      <Route path='/services'>
          <Service/>
      </Route>
      <Route path='/works'>
         <Works/>
      </Route>
      <Route path='/blog'>
          <Blog/>
      </Route>
    </Switch>
  </Router>

  );
}

export default App;
