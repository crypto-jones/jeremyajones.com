import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Projects />
      </div>
    );
  }
}

export default App;
