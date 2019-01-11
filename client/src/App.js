import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
