import React, { Component } from 'react';

import '../styles/Display.css';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props;
    console.log(state);

    return (
      <div className="display">
        <div className="cv-paper">
          <header className="cv-header">
            <div className='cv-header-info'>
              <h1 className='cv-header-name'>{state.generalInfo.firstName} {state.generalInfo.lastName}</h1>
              <h2 className='cv-header-title'>{state.generalInfo.title}</h2>
              <div className='cv-general-info'>
                <div className='cv-general-entry cv-address'>
                  <h3 className="cv-general-title">Address: </h3>
                  <p>{state.generalInfo.address1}</p>
                  <p>{state.generalInfo.address2}, {state.generalInfo.address3}</p>
                </div>
                <div className='cv-general-entry cv-phone'>
                  <h3 className="cv-general-title">Phone: </h3>
                  <p>{state.generalInfo.phoneNumber}</p>
                </div>
                <div className='cv-general-entry cv-email'>
                  <h3 className="cv-general-title">Email: </h3>
                  <p>{state.generalInfo.email}</p>
                </div>
                <div className='cv-general-entry cv-website'>
                  <h3 className="cv-general-title">Website: </h3>
                  <p><a href={state.generalInfo.website} target='_blank' rel='noreferrer'>{state.generalInfo.website}</a></p>
                </div>
              </div>
            </div>
            <div className='cv-image'></div>
          </header>
          <main className="cv-body">

            <div className="cv-profile">
              <h3 className="cv-body-title">Profile</h3>
              <p>
                Do consequat ea qui sint velit ullamco officia incididunt tempor et velit. Nostrud ut irure occaecat duis pariatur ullamco aute elit aliqua enim amet qui reprehenderit. Consectetur mollit elit et excepteur esse incididunt ipsum.
                Enim amet nostrud et consequat anim. Dolore nulla laborum qui esse. Consectetur exercitation excepteur cupidatat eiusmod labore cillum esse laboris ipsum enim ex. Eu incididunt aliquip deserunt anim est deserunt tempor. Incididunt minim do qui labore. Laborum in sint ex voluptate minim enim minim enim labore consectetur labore. Adipisicing velit adipisicing sint culpa eu esse minim nisi et minim laboris.
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