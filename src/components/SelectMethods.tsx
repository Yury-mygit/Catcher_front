import React, { ChangeEvent } from 'react';

interface SelectMethodProps {
  value: string;
  onChange: (val: string) => void;
}

const SelectMethod: React.FC<SelectMethodProps> = ({ value, onChange }) => {
  const options = ['GET', 'POST', 'PUT', 'DELETE'];

  return (
    <select 
      value={value} 
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={"text-xs border"}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectMethod;
