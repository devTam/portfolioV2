import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
