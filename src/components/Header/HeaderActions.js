import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const HeaderActions = (props) => {
  const { auth } = props
  const actions = auth.isAuthenticated() ? (
    (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link
            to='/'
            className="btn-transparent btn-sm"
            onClick={() => auth.logout()}>
            Log Out
          </Link>
        </li>
      </ul>
    )
  ) : (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link
            to={window.location.pathname}
            onClick={() => auth.login()}
            className={"btn-transparent btn-sm"}>
            Log In
        </Link>
        </li>
      </ul>
    )
  return actions
}

HeaderActions.proptypes = {
  auth: PropTypes.object.isRequired
};

export default HeaderActions