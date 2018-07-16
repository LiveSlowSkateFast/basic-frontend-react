import history from 'services/history';
import auth0 from 'auth0-js';

export default class Auth {
  constructor(config) {
    this.domain = config.domain || 'jp-dev.auth0.com'
    this.clientID = config.clientID || '6nD2eB5gqTaejUYinNTS0CXqu4Cumfvb'
    this.callbackUrl = config.callbackUrl || 'http://localhost:3000/callback'
    this.logoutUrl = config.logoutUrl || 'http://localhost:3000'
    this.audience = config.audience || 'https://basic-backend-express'
    this.responseType = config.responseType || 'token id_token'
    this.scope = config.scope || 'openid profile'

    this.auth0 = new auth0.WebAuth({
      domain: this.domain,
      clientID: this.clientID,
      redirectUri: this.callbackUrl,
      audience: this.audience,
      responseType: this.responseType,
      scope: this.scope
    })
  }

  login(config) {
    const conf = config ? config : {}
    this.auth0.authorize(conf);
  }

  signUp(config) {
    const conf = config ? Object.assign(config, { initialScreen: 'signUp' }) : { initialScreen: 'signUp' }
    this.auth0.authorize(conf)
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
    // With no type: Clear access token and ID token from local storage
    // With a type definition: remove the auth0 session cookie
    // With the type 'federated': attempt to logout from 3rd party IdP
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
    if (type) {
      this.auth0.logout({
        returnTo: this.logoutUrl,
        client_id: this.clientID,
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
        audience: this.audience,
        responseType: this.responseType,
      }, (err, authResult) => {
        if (err) {
          reject(err)
        } else {
          resolve(authResult)
          // this.setSession(authResult).then(() => resolve())
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