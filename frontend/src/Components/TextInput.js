import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <>
    <h1>hi</h1>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
     />
    </>
  );
};

export default TextInput;