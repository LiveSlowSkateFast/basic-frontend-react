import React from 'react';
import { Link } from 'react-router-dom'

const TestApiLink = () => (
  <Link to='/test'>
    <li>
      <span className="btn-icon icon-budicon-344" />{' '}Test API
    </li>
  </Link>
)

export default TestApiLink