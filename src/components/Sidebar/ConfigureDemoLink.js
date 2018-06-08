import React from 'react';
import { Link } from 'react-router-dom'

const ConfigureDemoLink = () => (
    <Link to='/configuration'>
    <li>
      <span className="btn-icon icon-budicon-327" />{' '}Configure Demo
    </li>
  </Link>
)

export default ConfigureDemoLink