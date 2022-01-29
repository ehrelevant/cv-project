import General from './components/General';
import Education from './components/Education';

import './App.css';

import React, { Component } from 'react';
import uniqid from 'uniqid';


class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        website: '',
        address1: '',
        address2: '',
        address3: '',
        photoUrl: '',
      },
      educationalExp: [],
      /*
      practicalExp: [
        {
          id: uniqid(),
          index: 0,
          company: '',
          address: '',
          position: '',
          startDate: '',
          endDate: '',
        }
      ]
      */
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.onGeneralChange = this.onGeneralChange.bind(this);
    this.onEducationChange = this.onEducationChange.bind(this);
    this.onPracticalChange = this.onPracticalChange.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.addPracticalEntry = this.addPracticalEntry.bind(this);
  }

  onGeneralChange(evt) {
    evt.preventDefault();
    const target = evt.target;
    const form = target.form;
    this.setState({
      generalInfo: {
        firstName: form['firstName'].value,
        lastName: form['lastName'].value,
        email: form['email'].value,
        phoneNumber: form['phoneNumber'].value,
        website: form['website'].value,
        address1: form['address1'].value,
        address2: form['address2'].value,
        address3: form['address3'].value,
        photoUrl: '',
      },
    });
  }

  onEducationChange(evt, entryId) {
    evt.preventDefault();
    const target = evt.target;
    const form = target.form;
    this.setState({
      educationalExp: this.state.educationalExp.map(entry => {
        if(entry.id === entryId) {
          return {
            id: entry.id,
            university: form['university'+entryId].value,
            address: form['address'+entryId].value,
            degree: form['degree'+entryId].value,
            gpa: form['gpa'+entryId].value,
            startDate: form['startDate'+entryId].value,
            endDate: form['endDate'+entryId].value,
          }
        } else {
          return entry;
        }
      })
    });
  }

  onPracticalChange(evt) {
    evt.preventDefault();
  }

  addEducationEntry(evt) {
    evt.preventDefault();
    this.setState({
      educationalExp: this.state.educationalExp.concat({
        id: uniqid(),
        university: '',
        address: '',
        degree: '',
        gpa: '',
        startDate: '',
        endDate: '',
      })
    });
  }

  addPracticalEntry(evt) {
    evt.preventDefault();
  }

  formSubmit(evt) {
    evt.preventDefault();
    console.log(evt.target);
  }

  render() {
    return (
      <main>
        <form onSubmit={this.formSubmit}>
          <General onGeneralChange={this.onGeneralChange} generalInfo={this.state.generalInfo} />
          <hr></hr>
          {this.state.educationalExp.map(entry => {
            return (
              <Education onEducationChange={this.onEducationChange} educationalEntry={entry} key={entry.id} />
            )
          })}
          <button onClick={this.addEducationEntry}>Add Entry</button>
          <hr></hr>
          <button type="submit">Generate CV</button>
        </form>
      </main>
    );
  }
}

export default App;
