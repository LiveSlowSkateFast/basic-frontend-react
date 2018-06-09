import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Sidebar } from "components";
import { Footer } from '@auth0/styleguide-react-components';
import { Auth, history } from 'services';
import {
  Callback,
  Configuration,
  NoContent,
  NotFound,
  Profile,
  Unauthorized,
  ViewToken,
  Welcome,
} from 'views';


const styles = {
  rootContainer: {
    minHeight: 400
  }
}

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const rootPage = (props) => {
  return auth.isAuthenticated() ? <Welcome {...props} /> :
    <NoContent {...props} auth={auth} />
}

const requiresAuth = (view) => {
  return auth.isAuthenticated() ? view :
    <Unauthorized auth={auth} />
}

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
          <CssBaseline />
          <Header auth={auth} />
          <div className="container root-container" style={styles.rootContainer}>
            <Sidebar auth={auth} />
            <div className="col-xs-9 wrapper">
              <Switch>
                <Route exact path="/" render={(props) =>
                  rootPage(props)} />
                <Route path="/configuration" render={(props) =>
                  <Configuration {...props} />} />
                <Route path="/token" render={(props) =>
                  requiresAuth(<ViewToken {...props} />)} />
                <Route path="/profile" render={(props) =>
                  requiresAuth(<Profile {...props} auth={auth} />)} />
                <Route path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} />
                }} />
                <Route render={(props) => <NotFound {...props} />} />
              </Switch>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </Router >
    )
  }
}

export default App;
