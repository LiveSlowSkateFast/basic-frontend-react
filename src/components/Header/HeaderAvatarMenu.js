import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const HeaderAvatarMenu = (props) => {
  const { anchorEl, auth, handleClose } = props
  return(
    <Menu
      id='avatar-menu'
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className='"dropdown-menu"'>
      <MenuItem
        to='/'
        className="btn-transparent btn-sm"
        onClick={() => auth.logout()}>
        Log Out
      </MenuItem>
      <MenuItem
        to='/'
        className="btn-transparent btn-sm"
        onClick={() => auth.logout('deep')}>
        Deep Log Out
      </MenuItem>
      <MenuItem
        to='/'
        className="btn-transparent btn-sm"
        onClick={() => auth.logout('federated')}>
        Federated Log Out
      </MenuItem>
    </Menu>
  )
}

export default HeaderAvatarMenu