import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/search" />
            <h1>Search Page</h1>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
