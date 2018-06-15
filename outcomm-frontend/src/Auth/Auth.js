// Thanks to the thorough docs of AuthO and their starting code.


import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {

  //setting up the instance of an AuthO session
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile' // this will give you open access to what the user allows of their info
  });


  userProfile;

  login = () => {
    this.auth0.authorize();
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession = (authResult) => {
    // Set time for access token to expire
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    
    history.replace('/');
  }

  logout = () => {
    // Clear access token and ID token from local storage and redirect
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    history.replace('/');
  }

  isAuthenticated = () => {
    // Check if current time is past the expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No Access Token found');
    }
    return accessToken;
  }

  // get what's stored of the user profile from AuthO
  getProfile = (cb) => {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}
