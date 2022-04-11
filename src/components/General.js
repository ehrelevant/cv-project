import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onGeneralChange, generalInfo } = this.props;

    return (
      <div>
        <section className="cv-section">
          <div className="name-inputs">
            <div className="label-input-pair">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={generalInfo.firstName}
                onChange={onGeneralChange}
              />
            </div>
            <div className="label-input-pair">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={generalInfo.lastName}
                onChange={onGeneralChange}
              />
            </div>
          </div>
          <div className="label-input-pair">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={generalInfo.title}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="email">E-mail address</label>
            <input
              type="text"
              name="email"
              value={generalInfo.email}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              value={generalInfo.phoneNumber}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              value={generalInfo.website}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="address1">Address line 1</label>
            <input
              type="text"
              name="address1"
              value={generalInfo.address1}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="address2">Address line 2</label>
            <input
              type="text"
              name="address2"
              value={generalInfo.address2}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="address3">Address line 3</label>
            <input
              type="text"
              name="address3"
              value={generalInfo.address3}
              onChange={onGeneralChange}
            />
          </div>
          <div className="label-input-pair">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              name="photo"
              onChange={onGeneralChange}
            />
          </div>
        </section>

        <hr/>

        <section>
        <div className="label-input-pair">
            <label htmlFor="profile">Profile</label>
            <textarea
              name="profile"
              className="cv-profile-textarea"
              value={generalInfo.profile}
              onChange={onGeneralChange}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default General;
