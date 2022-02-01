import Form from './components/Form';
import Display from './components/Display';

import './styles/App.css';

import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <Form />
        <hr />
        <Display />
      </main>
    );
  }
}

export default App;
