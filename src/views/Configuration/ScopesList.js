import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addScope, removeScope } from 'actions'
import { ScopeToggle } from 'components'

const ScopesList = ({ scopes, addScope, removeScope, availableScopes }) => {

  const toggleScope = scope => (
    scopes.includes(scope) ? () => removeScope(scope) : () => addScope(scope)
  )

  return (
    <div className="scopes-list" >
      {availableScopes.map(scope =>
        <ScopeToggle
          key={scope.value}
          scope={scope.value}
          onClick={toggleScope(scope.value)}
          checked={scopes.includes(scope.value)} />
      )}
    </div>
  )
}

ScopesList.propTypes = {
  addScope: PropTypes.func.isRequired,
  removeScope: PropTypes.func.isRequired,
  scopes: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ),
}

export default connect((state => ({
  scopes: state.scopes
})), { addScope, removeScope })(ScopesList)