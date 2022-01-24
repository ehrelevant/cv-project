import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-section">
        <div className="name-inputs">
          <div class="label-input-pair">
            <label>First Name</label>
            <input
              type="text"
            />
          </div>
          <div class="label-input-pair">
            <label>Last Name</label>
            <input
              type="text"
            />
          </div>
        </div>
        <div class="label-input-pair">
          <label>E-mail address</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Phone number</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Website</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Address line 1</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Address line 2</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Address line 3</label>
          <input
            type="text"
          />
        </div>
        <div class="label-input-pair">
          <label>Photo</label>
          <input
            type="file"
          />
        </div>
      </div>
    );
  }
}

export default General;
