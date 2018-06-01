import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const HeaderLinks = (props) => {
  const { auth } = props
  const actions = auth.isAuthenticated() ? (
    (
        <ul className="nav navbar-nav navbar-left no-basic">
          <li><Link to='/token'> View Tokens </Link></li>
        </ul>
    )
  ) : (
      <ul></ul>
    )
  return actions
}

HeaderLinks.proptypes = {
  auth: PropTypes.object.isRequired
};

export default HeaderLinks