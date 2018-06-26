import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Auth } from 'services'
import PropTypes from 'prop-types'
import { Auth0Lock } from "auth0-lock";


const LoginButton = (props) => {


  const lockOptions = {
    auth: {
      redirectUrl: 'http://localhost:3000/callback',
      responseType: props.responseTypes.toString().replace(/,/g, ' '),
      params: {
        scope: props.scopes.toString().replace(/,/g, ' ')
      }
    }
  };

  var lock = new Auth0Lock(
    '6nD2eB5gqTaejUYinNTS0CXqu4Cumfvb',
    'jp-dev.auth0.com',
    lockOptions
  );


  const auth = new Auth({
    scope: props.scopes.toString().replace(/,/g, ' '),
    responseType: props.responseTypes.toString().replace(/,/g, ' '),
  })

  return (
    <Link
      to={window.location.pathname}
      onClick={() => auth.login()}
      className="btn-transparent btn-sm"
    >
      Log In
    </Link>
  )
}

LoginButton.proptypes = {
  scopes: PropTypes.arrayOf(PropTypes.string)
};

export default connect((state => ({
  scopes: state.scopes,
  responseTypes: state.responseTypes,
})))(LoginButton)