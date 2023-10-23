import React from 'react';

export const Filter = ({ type, name, value, onChange }) => (
  <label>
    Find contacts by name:
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);
