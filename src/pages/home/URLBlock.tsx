import React from 'react';

interface DetailsPropsURL {
  title: string;
  url: string;
  outerclass: string;
}

const URLBlock: React.FC<DetailsPropsURL> = ({ title, url, outerclass }) => (
  <div className={outerclass}>
    <h3>{title}</h3>
    <div className="ml-5">
      <div>{url}</div>
    </div>
  </div>
);

export default URLBlock;
export {};