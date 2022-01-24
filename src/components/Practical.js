import React, { Component } from 'react';

class Practical extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-section">
        <div class="label-input-pair">
          <label>Company name</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Company address</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Position</label>
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
      </div>
    );
  }
}

export default Practical;
