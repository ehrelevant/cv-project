import Education from './components/Education';
import General from './components/General';
import Practical from './components/Practical';

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
        <General />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default App;
