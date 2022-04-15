import React from 'react';

function Practical(props) {
  const { onPracticalChange, practicalEntry } = props;
  const entryId = practicalEntry.id;

  return (
    <section className="cv-section">
      <div className="label-input-pair">
        <label htmlFor={"company"+entryId}>Company name</label>
        <input
          type="text"
          name={"company"+entryId}
          value={practicalEntry.company}
          onChange={evt => onPracticalChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"address"+entryId}>Company address</label>
        <input
          type="text"
          name={"address"+entryId}
          value={practicalEntry.address}
          onChange={evt => onPracticalChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"position"+entryId}>Position</label>
        <input
          type="text"
          name={"position"+entryId}
          value={practicalEntry.position}
          onChange={evt => onPracticalChange(evt, entryId)}
        />
      </div>
      <br></br>
      <div className="label-input-pair">
        <label htmlFor={"startDate"+entryId}>Start date</label>
        <input
          type="text"
          placeholder="Month & Year"
          name={"startDate"+entryId}
          value={practicalEntry.startDate}
          onChange={evt => onPracticalChange(evt, entryId)}
        />
      </div>
      <div className="label-input-pair">
        <label htmlFor={"endDate"+entryId}>End date</label>
        <input
          type="text"
          placeholder="Month & Year (or Present)"
          name={"endDate"+entryId}
          value={practicalEntry.endDate}
          onChange={evt => onPracticalChange(evt, entryId)}
        />
      </div>
    </section>
  );
}

export default Practical;
