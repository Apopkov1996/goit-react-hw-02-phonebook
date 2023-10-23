import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ type, name, value, onChange }) => (
  <label>
    Find contacts by name:
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
