import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, onChange }) => (
  <select className="form-control" onChange={onChange}>
    {options.map( option =>
      <option key={option.value} value={option.value} >
        {option.label}
      </option>
    )}
  </select>
)

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
}

export default Select