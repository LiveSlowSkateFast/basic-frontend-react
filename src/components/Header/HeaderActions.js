import React from 'react'
import PropTypes from 'prop-types';
import HeaderAvatar from './HeaderAvatar';
import LoginButton from './LoginButton';


const HeaderActions = (props) => {
  const { auth } = props
  const actions = auth.isAuthenticated() ? (
    (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <HeaderAvatar {...props} />
        </li>
      </ul>
    )
  ) : (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <LoginButton />
        </li>
      </ul>
    )
  return actions
}

HeaderActions.proptypes = {
  auth: PropTypes.object.isRequired
};

export default HeaderActions