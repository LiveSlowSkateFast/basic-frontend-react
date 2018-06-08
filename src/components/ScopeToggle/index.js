import React from 'react'
import PropTypes from 'prop-types'

const ScopeToggle = ({ onClick, scope, checked, disabled }) => (
  <div className="scope-toggle" onClick={onClick}>
    <input
      className="scope-input"
      type="checkbox"
      value={scope}
      checked={checked ? "checked" : ""}
      disabled={disabled ? "disabled" : ""}
    />
    <label className="status">{scope}</label>
  </div>
)

ScopeToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  scope: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default ScopeToggle