import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';

import './styles/App.css';

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
      practicalExp: [],
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
            id: entryId,
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

  onPracticalChange(evt, entryId) {
    evt.preventDefault();
    const target = evt.target;
    const form = target.form;
    this.setState({
      practicalExp: this.state.educationalExp.map(entry => {
        if(entry.id === entryId) {
          return {
            id: entryId,
            company: form['university'+entryId].value,
            address: form['address'+entryId].value,
            position: form['position'+entryId].value,
            startDate: form['startDate'+entryId].value,
            endDate: form['endDate'+entryId].value,
          }
        } else {
          return entry;
        }
      })
    });
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
    this.setState({
      practicalExp: this.state.practicalExp.concat({
        id: uniqid(),
        company: '',
        address: '',
        position: '',
        startDate: '',
        endDate: '',
      })
    });
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

          <hr />
          <p>Educational Experience</p>

          {this.state.educationalExp.map((entry, index) => {
            return (
              <div key={entry.id}>
                ({index+1})
                <Education onEducationChange={this.onEducationChange} educationalEntry={entry} />
                <br />
              </div>
            )
          })}
          <button onClick={this.addEducationEntry}>+ Add Entry</button>

          <hr />
          <p>Practical Experience</p>

          {this.state.practicalExp.map((entry, index) => {
            return (
              <div key={entry.id}>
                ({index+1})
                <Practical onPracticalChange={this.onPracticalChange} practicalEntry={entry} />
                <br />
              </div>
            )
          })}
          <button onClick={this.addPracticalEntry}>+ Add Entry</button>

          <hr />

          <button type="submit">Generate CV</button>
        </form>
      </main>
    );
  }
}

export default App;
