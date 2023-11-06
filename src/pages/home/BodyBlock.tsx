import React from 'react';

interface Bodyblock {
  title: string;
  entries: Array<[string, any]>;
  outerclass: string;
}

const BodyBlock: React.FC<Bodyblock> = ({ title, entries, outerclass }) => {

return (
  <div className={outerclass}>
    <h3>{title}</h3>
    <div className="inner ml-5">
      {entries.map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {value.toString() }
        </p>
      ))}
    </div>
  </div>
);}

export default BodyBlock;