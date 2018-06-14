import React from 'react'
import { connect } from 'react-redux'
import { updateResponseBody } from 'actions'
import { Auth } from 'services'
import PropTypes from 'prop-types'


const SendRequestButton = ({ scopes, responseTypes, updateResponseBody }) => {

  const auth = new Auth({
    scope: scopes.toString().replace(/,/g, ' '),
    responseType: responseTypes.toString().replace(/,/g, ' '),
  })

  const sendRequest = () => (
    auth.checkSession()
      .then(authResponse => updateResponseBody(JSON.stringify(authResponse, null, 2)))
      .catch(err => console.log(err))
  )

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
  scopes: PropTypes.arrayOf(PropTypes.string)
};

export default connect((state => ({
  scopes: state.scopes,
  responseTypes: state.responseTypes,
})), { updateResponseBody })(SendRequestButton)