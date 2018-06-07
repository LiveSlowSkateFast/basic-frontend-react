import React from 'react'
import PropTypes from 'prop-types';

const Spinner = (props) => {
  const { size, logo } = props
  const className = 'spinner spinner-' +
    (size ? size : 'md') +
    (logo ? ' is-auth0' : '')
  console.log(className)
  return (
    <div className={className}>
      <div className="circle"></div>
    </div>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  logo: PropTypes.bool
}

export default Spinner