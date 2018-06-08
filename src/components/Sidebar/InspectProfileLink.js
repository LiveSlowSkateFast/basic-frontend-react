import React from 'react';
import { Link } from 'react-router-dom'

const InspectProfileLink = () => (
  <Link to='/profile'>
    <li>
      <span className="btn-icon icon-budicon-289" />{' '}Inspect Profile
    </li>
  </Link>
)

export default InspectProfileLink