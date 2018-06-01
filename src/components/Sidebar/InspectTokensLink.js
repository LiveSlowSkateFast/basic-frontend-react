import React from 'react';
import { Link } from 'react-router-dom'

const InspectTokensLink = () => (
    <Link to='/token'>
    <li>
      <span class="btn-icon icon-budicon-493" />{' '}Inspect Tokens
    </li>
  </Link>
)

export default InspectTokensLink