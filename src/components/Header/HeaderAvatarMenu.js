import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from '@material-ui/core';

const HeaderAvatarMenu = (props) => {
  const { anchorEl, auth, handleClose } = props
  return(
    <Menu
      id='avatar-menu'
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      style={{outline: 'none' }}
      className='"col-xs-3"'>
      <ul style={{ listStyle: 'none', padding: '0px 10px 0px 10px', }}>
      <Link
        to='/'
        onClick={() => auth.logout()}>
        <li><span className="btn-icon icon-budicon-449" />{' '}Log Out</li>
      </Link>
      <Link
        to='/'
        onClick={() => auth.logout('deep')}>
        <li><span className="btn-icon icon-budicon-449" />{' '}Deep Log Out</li>
      </Link>
      <Link
        to='/'
        onClick={() => auth.logout('federated')}>
        <li><span className="btn-icon icon-budicon-449" />{' '}Federated Log Out</li>
      </Link>
      </ul>
    </Menu>
  )
}

export default HeaderAvatarMenu