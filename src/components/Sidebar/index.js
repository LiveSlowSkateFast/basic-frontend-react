import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Sidebar = (props) => {
  const {isAuthenticated } = props.auth

  const protectedLink = (link) => {
    return isAuthenticated() ? link : null
  }

  return (
    <div id="sidebar-root-container" className="col-xs-2">
      <div className="sidebar-fixed">
        <ul style={{ listStyle: 'none', padding: 0, }}>
          {protectedLink(
          <Link to='/token'>
            <li>
              <span class="btn-icon icon-budicon-493" />{' '}Inspect Tokens
            </li>
          </Link>)}
        </ul>
      </div>
    </div>
  );
}


Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
// export default Sidebar;
