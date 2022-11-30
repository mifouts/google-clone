import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <h1>Let's build the google clone</h1>

      {/* home page*/}
      <Home />
      {/* search results page*/}
      </Router>
    </div>
  );
}

export default App;
