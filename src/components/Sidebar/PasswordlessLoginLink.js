import React from 'react';
import { Link } from 'react-router-dom'
import { Auth0LockPasswordless } from "auth0-lock";

var options = {
  allowedConnections: ['email'],
  passwordlessMethod: 'code',
  rememberLastLogin: false,
  auth: {
    redirectUrl: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    params: {
      scope: 'openid profile'
    },
  }
};

var lock = new Auth0LockPasswordless(
  '6nD2eB5gqTaejUYinNTS0CXqu4Cumfvb',
  'jp-dev.auth0.com',
  options
);

const PasswordlessLoginLink = () => (
  <Link
    to={window.location.pathname}
    onClick={() => lock.show()}>
    <li>
      <span className="btn-icon icon-budicon-285" />{' '}Passwordless Login
    </li>
  </Link>
)

export default PasswordlessLoginLink