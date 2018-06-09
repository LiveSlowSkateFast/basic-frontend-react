import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';
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

const Routes = (props) => {

  const { auth } = props

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

  return (
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
  )
}

Routes.proptypes = {
  auth: PropTypes.object.isRequired
}

export default Routes