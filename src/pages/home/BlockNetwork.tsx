import React from 'react';

interface Networkblock {
  title: string;
  entries: Array<[string, any]>;
  outerclass: string;
}

const NetworkBlock: React.FC<Networkblock> = ({ title, entries , outerclass}) => (
  <div className={outerclass}>
    <h3 className="underline">{title}</h3>
    <div className="border-red-500 p-2 mt-2.5 flex flex-row flex-nowrap justify-start">
      {entries.map(([key, value]) => (
        <p key={key} className="underline">
          <strong>{key}:</strong> {value.toString() }
        </p>
      ))}
    </div>
  </div>
);

export default NetworkBlock;