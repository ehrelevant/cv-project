import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-section">
        <div class="label-input-pair">
          <label>University name</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Degree</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>University address</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Start date</label>
          <input
            type="text"
            placeholder="Month & Year"
          />
        </div>
        <div class="label-input-pair">
          <label>End date</label>
          <input
            type="text"
            placeholder="Month & Year (or Present)"
          />
        </div>
        <div class="label-input-pair">
          <label>GPA</label>
          <input
            type="text"
          />
        </div>
      </div>
    );
  }
}

export default Education;
