import Form from './components/Form';
import Display from './components/Display';

import './styles/App.css';

import React, { useState } from 'react';
import uniqid from 'uniqid';


function App() {
  const [state, setState] = useState({
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
      photo: '',
      profile: '',
    },
    educationalExp: [],
    practicalExp: [],
  });

  const onGeneralChange = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    const form = target.form;
    setState({
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
        photo: form['photo'].files[0],
        profile: form['profile'].value,
      },

      educationalExp: state.educationalExp,
      practicalExp: state.practicalExp,
    });
  }

  const onEducationChange = (evt, entryId) => {
    evt.preventDefault();
    const target = evt.target;
    const form = target.form;
    setState({
      generalInfo: state.generalInfo,
      practicalExp: state.practicalExp,

      educationalExp: state.educationalExp.map(entry => {
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

  const onPracticalChange = (evt, entryId) => {
    evt.preventDefault();
    const target = evt.target;
    const form = target.form;
    setState({
      generalInfo: state.generalInfo,
      educationalExp: state.educationalExp,

      practicalExp: state.practicalExp.map(entry => {
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

  const addEducationEntry = (evt) => {
    evt.preventDefault();
    setState({
      generalInfo: state.generalInfo,
      practicalExp: state.practicalExp,

      educationalExp: state.educationalExp.concat({
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

  const addPracticalEntry = (evt) => {
    evt.preventDefault();
    setState({
      generalInfo: state.generalInfo,
      educationalExp: state.educationalExp,

      practicalExp: state.practicalExp.concat({
        id: uniqid(),
        company: '',
        address: '',
        position: '',
        startDate: '',
        endDate: '',
      })
    });
  }

  return (
    <main>
      <Form state={state}
            onGeneralChange={onGeneralChange}
            onEducationChange={onEducationChange}
            onPracticalChange={onPracticalChange}
            addEducationEntry={addEducationEntry}
            addPracticalEntry={addPracticalEntry}
            />
      <hr />
      <Display state={state}/>
    </main>
  );
}

export default App;
