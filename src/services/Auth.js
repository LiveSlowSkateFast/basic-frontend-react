import history from 'services/history';
import auth0 from 'auth0-js';

const AUTH_CONFIG = {
  domain: 'jp-dev.auth0.com',
  clientId: '6nD2eB5gqTaejUYinNTS0CXqu4Cumfvb',
  callbackUrl: 'http://localhost:3000/callback'
}

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.errorDescription}`);
      }
    });
  }

  setSession = (authResult) => {
    return new Promise((resolve) => {
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      resolve()
    })
  }

  logout = (type) => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
    if (type) {
      this.auth0.logout({
        returnTo: 'http://localhost:3000',
        client_id: AUTH_CONFIG.clientId,
        federated: type === 'federated'
      })
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  checkSession() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({
        audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        responseType: 'token id_token',
      }, (err, authResult) => {
        if (err) {
          reject(err)
        } else {
          this.setSession(authResult).then(() => resolve())
        }
      })
    })
  }

  getProfile = (cb) => {
    this.auth0.client.userInfo(
      localStorage.getItem('access_token'),
      (err, user) => cb(err, user)
    )
  }

}