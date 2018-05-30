import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from "components";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Footer } from '@auth0/styleguide-react-components';
import NoContent from './views/NoContent/NoContent';

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

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Header />
      <NoContent />
      <Footer />
    </MuiThemeProvider>
  </React.Fragment>
)

export default App;
