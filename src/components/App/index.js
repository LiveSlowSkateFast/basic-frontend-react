import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Header, Sidebar } from "components";
import { Footer } from '@auth0/styleguide-react-components';
import { Auth, history } from 'services';
import Routes from './Routes';

const styles = {
  rootContainer: {
    minHeight: 400
  }
}

const auth = new Auth();

class App extends Component {
  constructor() {
    super()
    this.state = {
      isCheckingSession: true,
      isLoggedIn: false,
    };
  }

  checkSession = () => {
    auth.checkSession().catch((e) => { }).finally(() =>
      auth.isAuthenticated() ? this.setState({ isLoggedIn: true }) : null
    )
  }

  componentWillMount() {
    if (!auth.isAuthenticated()) {
      this.checkSession()
    }
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Header auth={auth} />
          <div className="container root-container" style={styles.rootContainer}>
            <Sidebar auth={auth} />
            <div className="col-xs-9 wrapper">
              <Routes auth={auth} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </Router >
    )
  }
}

export default App;
