import General from './General';
import Education from './Education';
import Practical from './Practical';

import '../styles/Form.css';

import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      state,
      onGeneralChange,
      onEducationChange,
      onPracticalChange,
      addEducationEntry,
      addPracticalEntry
    } = this.props;

    return (
      <div>
        <form>
          <General onGeneralChange={onGeneralChange} generalInfo={state.generalInfo} />

          <hr />
          <p className="cv-section-label">Educational Experience</p>

          {state.educationalExp.map((entry, index) => {
            return (
              <div key={entry.id}>
                ({index+1})
                <Education onEducationChange={onEducationChange} educationalEntry={entry} />
                <br />
              </div>
            )
          })}
          <button onClick={addEducationEntry}>+ Add Entry</button>

          <hr />
          <p className="cv-section-label">Practical Experience</p>

          {state.practicalExp.map((entry, index) => {
            return (
              <div key={entry.id}>
                ({index+1})
                <Practical onPracticalChange={onPracticalChange} practicalEntry={entry} />
                <br />
              </div>
            )
          })}
          <button onClick={addPracticalEntry}>+ Add Entry</button>
        </form>
      </div>
    );
  }
}


export default Form;