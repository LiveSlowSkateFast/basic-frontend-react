import React from 'react';
import { Link } from 'react-router-dom'
import { Auth0Lock } from "auth0-lock";

var lockOptions = {
  language: 'es',
  auth: {
    redirectUrl: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    params: {
      scope: 'openid profile'
    }
  }
};

var lock = new Auth0Lock(
  '6nD2eB5gqTaejUYinNTS0CXqu4Cumfvb',
  'jp-dev.auth0.com',
  lockOptions
);

const EmbeddedLoginLink = () => (
  <Link
    to={window.location.pathname}
    onClick={() => lock.show()}>
    <li>
      <span class="btn-icon icon-budicon-285" />{' '}Embedded Login
    </li>
  </Link>
)

export default EmbeddedLoginLink