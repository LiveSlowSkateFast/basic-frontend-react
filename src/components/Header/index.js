import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeaderActions from './HeaderActions';
// import HeaderLinks from './HeaderLinks';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = (props) => {
  return (
    <header className="site-header" >
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <h1 className="navbar-brand"><a href="/"><span>Auth0</span></a></h1>
            </div>
            <div className="nav navbar-nav navbar-left">
              {/* <HeaderLinks auth={props.auth} /> */}
            </div>
            <div className="nav navbar-nav navbar-right">
              <HeaderActions auth={props.auth} />
            </div>
          </div>
        </nav>
    </header>
  );
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
