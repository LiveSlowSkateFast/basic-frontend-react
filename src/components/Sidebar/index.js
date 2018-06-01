import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InspectTokensLink from './InspectTokensLink';
import EmbeddedLoginLink from './EmbeddedLoginLink';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Sidebar = (props) => {
  const {isAuthenticated } = props.auth

  const requiresAuthentication = (link) => {
    return isAuthenticated() ? link : null
  }

  return (
    <div id="sidebar-root-container" className="col-xs-2">
      <div className="sidebar-fixed">
        <ul style={{ listStyle: 'none', padding: 0, }}>
          {!isAuthenticated() ? <EmbeddedLoginLink /> : null}
          {requiresAuthentication(<InspectTokensLink />)}
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
