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
    <header class="site-header" >
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
              </button>
              <h1 class="navbar-brand"><a href="/"><span>Auth0</span></a></h1>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
              <div class="nav navbar-nav navbar-right">
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
