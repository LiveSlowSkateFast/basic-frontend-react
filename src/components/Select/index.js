import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, onChange, selected }) => (
  <select className="form-control" onChange={e => onChange(e)} >
    {options.map(option => (
      selected === option.value ?
        <option key={option.value} value={option.value} selected >
          {option.label}
        </option> :
        <option key={option.value} value={option.value} >
          {option.label}
        </option>))}
  </select>
)

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
  selected: PropTypes.string,
}

export default Select