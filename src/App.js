import Education from './components/Education';
import General from './components/General';
import Practical from './components/Practical';

import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>Personal Information</p>
        <General />
        <hr></hr>
        <p>Educational Experience</p>
        <Education />
        <hr></hr>
        <p>Practical Experience</p>
        <Practical />
      </div>
    );
  }
}

export default App;
