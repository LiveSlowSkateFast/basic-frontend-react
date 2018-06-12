import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Auth } from 'services'
import PropTypes from 'prop-types'


const LoginButton = (props) => {

  const auth = new Auth({
    scope: props.scopes.toString().replace(/,/g, ' ')
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

export default connect((state => ({ scopes: state.scopes })))(LoginButton)