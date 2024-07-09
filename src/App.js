import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Achievement from './components/Achievement';

function App() {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certificate />
      <Achievement />
    </div>
  );
}

export default App;
