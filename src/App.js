import React, {useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Nav from './components/nav/Nav';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import gsap from 'gsap'

function App() {

  useEffect(() => {
      gsap.to('body',  {duration: 0, css: {visibility: 'visible'}})
  }, [])

  return (
    <div className="app">
      <Nav />

      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
