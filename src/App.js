import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from "components";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Footer } from '@auth0/styleguide-react-components';
import { Auth, history } from 'services';
import {
  Callback,
  NoContent,
  ViewToken,
  NotFound
} from 'views';


const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Fakt',
    ].join(','),
    body1: {
      fontSize: 14,
    },
  },
})

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => {
  return (
    <Router history={history} >
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Header auth={auth} />
          <Switch>
            <Route exact path="/" render={(props) => <NoContent {...props} />} />
            <Route path="/token" render={(props) => <ViewToken {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
            <Route render={(props) => <NotFound {...props} />} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </React.Fragment>
    </Router>
  )
}


export default App;
