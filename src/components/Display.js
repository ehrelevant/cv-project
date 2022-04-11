import React, { Component } from 'react';

import '../styles/Display.css';
import blankProfile from '../assets/blank-profile.png'

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props;
    const general = state.generalInfo;

    return (
      <div className="display">
        <div className="cv-paper">
          <header className="cv-header">
            <div className='cv-header-info'>
              <h1 className='cv-header-name'>{general.firstName} {general.lastName}</h1>
              <h2 className='cv-header-title'>{general.title}</h2>
              <div className='cv-general-info'>
                {
                  (general.address1 || general.address2 || general.address3) ? (
                    <div className='cv-general-entry cv-address'>
                      <h3 className="cv-general-title">Address: </h3>
                      <p>{general.address1}</p>
                      <p>{general.address2 + ((general.address2 && general.address3) ? ", " : "") + general.address3}</p>
                    </div>
                  ) : ""
                }
                {
                  (general.phoneNumber) ? (
                    <div className='cv-general-entry cv-phone'>
                      <h3 className="cv-general-title">Phone: </h3>
                      <p>{general.phoneNumber}</p>
                    </div>
                  ) : ""
                }
                {
                  (general.email) ? (
                    <div className='cv-general-entry cv-email'>
                      <h3 className="cv-general-title">Email: </h3>
                      <p>{general.email}</p>
                    </div>
                  ) : ""
                }
                {
                  (general.website) ? (
                    <div className='cv-general-entry cv-website'>
                      <h3 className="cv-general-title">Website: </h3>
                      <p><a href={general.website} target='_blank' rel='noreferrer'>{general.website}</a></p>
                    </div>
                  ) : ""
                }
              </div>
            </div>
            <div className='cv-image'>
              <img className='cv-image-content' src={general.photo ? URL.createObjectURL(general.photo) : blankProfile} alt="" />
            </div>
          </header>
          <main className="cv-body">

            <div className="cv-profile">
              <h3 className="cv-body-title">Profile</h3>
              <p>
                {general.profile}
              </p>
            </div>
            <div className="cv-education">
              <h3 className="cv-body-title">Education</h3>
              <div className="educational-entries">

                {state.educationalExp.map((entry) => {
                  return (
                    <div key={entry.id} className="educational-entry">
                      <div className="entry-left">
                        <p className="generic-entry-date">{entry.startDate} - {entry.endDate}</p>
                      </div>
                      <div className="entry-right">
                        <p className="educational-entry-degree">{entry.degree}</p>
                        <p className="educational-entry-university">{entry.university}</p>
                        <p className="educational-entry-address">{entry.address}</p>
                        <p className="educational-entry-gpa">GPA: {entry.gpa}</p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
            <div className="cv-practical">
              <h3 className="cv-body-title">Practical Experience</h3>
              <div className="practical-entries">

                {state.practicalExp.map((entry) => {
                  return (
                    <div className="practical-entry">
                      <div className="entry-left">
                        <p className="generic-entry-date">{entry.startDate} - {entry.endDate}</p>
                      </div>
                      <div className="entry-right">
                        <p className="practical-entry-position">{entry.position}</p>
                        <p className="practical-entry-company">{entry.company}</p>
                        <p className="practical-entry-address">{entry.address}</p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Display;