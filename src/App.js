import Form from './components/Form';
import Display from './components/Display';

import './styles/App.css';

import React, { Component } from 'react';
import uniqid from 'uniqid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        title: '',
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
        title: form['title'].value,
        email: form['email'].value,
        phoneNumber: form['phoneNumber'].value,
        website: form['website'].value,
        address1: form['address1'].value,
        address2: form['address2'].value,
        address3: form['address3'].value,
        photoUrl: '',
      },
    });
    console.log(this.state)
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
      practicalExp: this.state.practicalExp.map(entry => {
        if(entry.id === entryId) {
          return {
            id: entryId,
            company: form['company'+entryId].value,
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

  render() {
    return (
      <main>
        <Form state={this.state}
              onGeneralChange={this.onGeneralChange}
              onEducationChange={this.onEducationChange}
              onPracticalChange={this.onPracticalChange}
              addEducationEntry={this.addEducationEntry}
              addPracticalEntry={this.addPracticalEntry}
              />
        <hr />
        <Display state={this.state}/>
      </main>
    );
  }
}

export default App;
