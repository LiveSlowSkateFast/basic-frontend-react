import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  SignUpButton,
  LogInButton
} from "components";

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
              <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
              </button>
              <h1 className="navbar-brand"><a href="/"><span>Auth0</span></a></h1>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <div className="nav navbar-nav navbar-right">
                <LogInButton className="btn-transparent btn-sm"/>
                <SignUpButton className="btn btn-success btn-sm"/>
              </div>
            </div>
          </div>
        </nav>
    </header>
  );
}

Header.propTypes = {
};

export default withStyles(styles)(Header);
