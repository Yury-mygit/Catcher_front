import React from 'react';

interface HeaderBlock {
  title: string;
  entries: Array<[string, any]>;
  outerclass: string;
}

const HeaderBlock: React.FC<HeaderBlock> = ({ title, entries, outerclass }) => {
  return (
    <div className={outerclass}>
      <h3 className="text-center">{title}</h3>
      {entries.map(([key, value], index) => (
        <div key={index} className="data container flex ml-5">
          <div className="w-1/4">
            <p className='text-left'>{key}:</p>
          </div>
          <div className="w-3/4">
            <p className='text-left'>{value.toString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderBlock;
