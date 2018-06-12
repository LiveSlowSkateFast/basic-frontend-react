import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addResponseType, removeResponseType } from 'actions'
import { ScopeToggle } from 'components'

const availableresponseTypes = [
  'token',
  'id_token',
  'code',
]

const ResponseTypesList = ({ responseTypes, addResponseType, removeResponseType }) => {

  const toggleResponseType = responseType => (
    responseTypes.includes(responseType) ? () => removeResponseType(responseType) : () => addResponseType(responseType)
  )

  return (
    <div className="responseTypes-list" >
      {availableresponseTypes.map(responseType =>
        <ScopeToggle
          key={responseType}
          scope={responseType}
          onClick={toggleResponseType(responseType)}
          checked={responseTypes.includes(responseType)} />
      )}
    </div>
  )
}

ResponseTypesList.propTypes = {
  addResponseType: PropTypes.func.isRequired,
  removeResponseType: PropTypes.func.isRequired,
  responseTypes: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ),
}

export default connect((state => ({ responseTypes: state.responseTypes })), { addResponseType, removeResponseType })(ResponseTypesList)