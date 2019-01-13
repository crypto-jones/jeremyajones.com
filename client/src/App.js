import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/Nav/NavBar';
import Sticky from 'react-sticky-el';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Sticky>
          <NavBar />
        </Sticky>
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
