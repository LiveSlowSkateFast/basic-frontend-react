import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addScope, removeScope } from 'actions'
import { ScopeToggle } from 'components'

const availableScopes = [
  'profile',
  'email',
]

const ScopesList = ({ scopes, addScope, removeScope }) => {

  const toggleScope = scope => (
    scopes.includes(scope) ? () => removeScope(scope) : () => addScope(scope)
  )

  return (
    <div className="scopes-list" >
      <ScopeToggle scope='openid' onClick={()=>{}} checked disabled />
      {availableScopes.map(scope =>
        <ScopeToggle
          key={scope}
          scope={scope}
          onClick={toggleScope(scope)}
          checked={scopes.includes(scope)} />
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

export default connect((state => ({ scopes: state.scopes })), { addScope, removeScope })(ScopesList)