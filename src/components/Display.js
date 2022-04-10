import React, { Component } from 'react';

import '../styles/Display.css';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="display">
        <div className="cv-paper">
          <header className="cv-header">
            <div className='cv-header-info'>
              <h1 className='cv-header-name'>Jean Valjean</h1>
              <h2 className='cv-header-title'>Cool Prison Man</h2>
              <div className='cv-general-info'>
                <div className='cv-general-entry cv-address'>
                  <h3>Address: </h3>
                  <p>16 John St.</p>
                  <p>Sad City, Philippines</p>
                </div>
                <div className='cv-general-entry cv-phone'>
                  <h3>Phone: </h3>
                  <p>1234567890</p>
                </div>
                <div className='cv-general-entry cv-email'>
                  <h3>Email: </h3>
                  <p>kindaexists@gmail.com</p>
                </div>
                <div className='cv-general-entry cv-website'>
                  <h3>Website: </h3>
                  <p><a href='https://github.com/KindaExists' target='_blank' rel='noreferrer'>https://github.com/KindaExists</a></p>
                </div>
              </div>
            </div>
            <div className='cv-image'></div>
          </header>
          <main className="cv-body">

            <div className="cv-profile">
              <h3>Profile</h3>
              <p>
                I am Jean Valjean.
                Do consequat ea qui sint velit ullamco officia incididunt tempor et velit. Nostrud ut irure occaecat duis pariatur ullamco aute elit aliqua enim amet qui reprehenderit. Consectetur mollit elit et excepteur esse incididunt ipsum.
                Enim amet nostrud et consequat anim. Dolore nulla laborum qui esse. Consectetur exercitation excepteur cupidatat eiusmod labore cillum esse laboris ipsum enim ex. Eu incididunt aliquip deserunt anim est deserunt tempor. Incididunt minim do qui labore. Laborum in sint ex voluptate minim enim minim enim labore consectetur labore. Adipisicing velit adipisicing sint culpa eu esse minim nisi et minim laboris.
              </p>
            </div>
            <div className="cv-education">
              <h3 className="cv-section-title">Education</h3>
              <div className="educational-entries">

                <div className="educational-entry">
                  <div className="entry-left">
                    <p className="generic-entry-date">June 2016 - Mar 2018</p>
                  </div>
                  <div className="entry-right">
                    <p className="educational-entry-degree">Bachelor in Computer Things</p>
                    <p className="educational-entry-university">Universe University</p>
                    <p className="educational-entry-address">CT City, Philippines</p>
                    <p className="educational-entry-gpa">GPA: 4.00</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="cv-practical">
              <h3 className="cv-section-title">Practical Experience</h3>
              <div className="practical-entries">

                <div className="practical-entry">
                  <div className="entry-left">
                    <p className="generic-entry-date">Nov 2020 - Feb 2021</p>
                  </div>
                  <div className="entry-right">
                    <p className="practical-entry-position">Senior Procrastinator</p>
                    <p className="practical-entry-company">Gugol Company</p>
                    <p className="practical-entry-address">CT City, Philippines</p>
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Display;