import React, { Component } from 'react';

import './App.css';
import { Responsive } from 'semantic-ui-react';
import Callback from '../../Callback/Callback';
import Auth from '../../Auth/Auth';
import history from '../../history';
import Nav from '../Nav/Nav';
import Listen from '../Listen/Listen';
import Talk from '../Talk/Talk';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {

  

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  render() {
    const { isAuthenticated } = auth;

    return (
      <div className="App">
       <Responsive>
         <Nav>
         <br/>
         <div className='main-container'>
          <Listen/>
          <Talk/>
          </div>
         </Nav>
       </Responsive>
      </div>
    );
  }
}

export default App;
