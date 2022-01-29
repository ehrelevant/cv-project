import React, { Component } from 'react';

class Practical extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="cv-section">
        <div className="label-input-pair">
          <label>Company name</label>
          <input
            type="text"
          />
        </div>
        <div className="label-input-pair">
          <label>Company address</label>
          <input
            type="text"
          />
        </div>
        <div className="label-input-pair">
          <label>Position</label>
          <input
            type="text"
          />
        </div>
        <br></br>
        <div className="label-input-pair">
          <label>Start date</label>
          <input
            type="text"
            placeholder="Month & Year"
          />
        </div>
        <div className="label-input-pair">
          <label>End date</label>
          <input
            type="text"
            placeholder="Month & Year (or Present)"
          />
        </div>
      </section>
    );
  }
}

export default Practical;
