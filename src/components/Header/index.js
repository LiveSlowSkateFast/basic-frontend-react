import React from 'react';
import PropTypes from 'prop-types';
import HeaderActions from './HeaderActions';
// import HeaderLinks from './HeaderLinks';

const styles = {
  siteHeader: {
    padding: '10px 0',
  },
  navBarDefault: {
    borderBottom: '1px solid #f1f1f1',
  }
};

const Header = (props) => {
  return (
    <header className="site-header" style={styles.siteHeader}>
        <nav className="navbar navbar-default" style={styles.navBarDefault}>
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

export default Header;
