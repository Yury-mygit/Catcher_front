import React from 'react';

interface DetailsPropsURL {
  title: string;
  url: string;
}

const URLBlock: React.FC<DetailsPropsURL> = ({ title, url }) => (
  <div className="border-black-500 font-bold flex-grow mr-5">
    <h3>{title}</h3>
    <div className="ml-5">
      <div>{url}</div>
    </div>
  </div>
);

export default URLBlock;
export {};