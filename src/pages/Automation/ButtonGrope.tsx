import React from 'react';

type Props = {
  // Define any props that you need
};

export const ButtonGroup = (props: Props) => {
  return (
    <div className="flex flex-col">
      <button className="text-left text-xs">Params</button>
      <button className="text-left text-xs">Authorization</button>
      <button className="text-left text-xs">Header</button>
      <button className="text-left text-xs">Body</button>
    </div>
  );
};
