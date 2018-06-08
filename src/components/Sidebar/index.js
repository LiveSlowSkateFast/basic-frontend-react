import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InspectTokensLink from './InspectTokensLink';
import EmbeddedLoginLink from './EmbeddedLoginLink';
import PasswordlessLoginLink from './PasswordlessLoginLink';
import InspectProfileLink from './InspectProfileLink';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Sidebar = (props) => {
  const { isAuthenticated } = props.auth

  const requiresAuth = (link) => {
    return isAuthenticated() ? link : null
  }

  return (
    <div id="sidebar-root-container" className="col-xs-3">
      <div className="sidebar-fixed">
        <ul style={{ listStyle: 'none', padding: 0, }}>
          {!isAuthenticated() ? <EmbeddedLoginLink /> : null}
          {!isAuthenticated() ? <PasswordlessLoginLink /> : null}
          {requiresAuth(
            <React.Fragment>
              <InspectTokensLink />
              <InspectProfileLink />
            </React.Fragment>
          )}
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
