import React from 'react';

function Education(props) {
  const { onEducationChange, educationalEntry } = props;
  const entryId = educationalEntry.id;

  return (
    <section className="cv-section">
      <div className="label-input-pair">
        <label htmlFor={"university"+entryId}>University name</label>
        <input
          type="text"
          name={"university"+entryId}
          value={educationalEntry.university}
          onChange={evt => onEducationChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"address"+entryId}>University address</label>
        <input
          type="text"
          name={"address"+entryId}
          value={educationalEntry.address}
          onChange={evt => onEducationChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"degree"+entryId}>Degree</label>
        <input
          type="text"
          name={"degree"+entryId}
          value={educationalEntry.degree}
          onChange={evt => onEducationChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor="gpa">GPA</label>
        <input
          type="text"
          name={"gpa"+entryId}
          value={educationalEntry.gpa}
          onChange={evt => onEducationChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"startDate"+entryId}>Start date</label>
        <input
          type="text"
          placeholder="Month & Year"
          name={"startDate"+entryId}
          value={educationalEntry.startDate}
          onChange={evt => onEducationChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"endDate"+entryId}>End date</label>
        <input
          type="text"
          placeholder="Month & Year (or Present)"
          name={"endDate"+entryId}
          value={educationalEntry.endDate}
          onChange={evt => onEducationChange(evt, entryId)}
        />
      </div>
    </section>
  );
}

export default Education;
