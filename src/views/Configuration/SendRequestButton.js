import React from 'react'
import { connect } from 'react-redux'
import { updateResponseBody } from 'actions'
import { Auth } from 'services'
import PropTypes from 'prop-types'


const SendRequestButton = ({
  audience, scopes, responseTypes, updateResponseBody }) => {

  const auth = new Auth({
    scope: scopes.toString().replace(/,/g, ' '),
    responseType: responseTypes.toString().replace(/,/g, ' '),
    audience: audience,
  })

  const sendRequest = () => {
    updateResponseBody('{}')
    auth.checkSession()
      .then(authResponse => updateResponseBody(JSON.stringify(authResponse, null, 2)))
      .catch(err => updateResponseBody(JSON.stringify(err, null, 2)))
  }

  return (
    <button
      to={window.location.pathname}
      onClick={sendRequest}
      className="btn btn-success"
    >
      Send Request
    </button>
  )
}

SendRequestButton.proptypes = {
  scopes: PropTypes.arrayOf(PropTypes.string).isRequired,
  responseTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  audience: PropTypes.string.isRequired
};

export default connect((state => ({
  scopes: state.scopes,
  responseTypes: state.responseTypes,
  audience: state.audience,
})), { updateResponseBody })(SendRequestButton)