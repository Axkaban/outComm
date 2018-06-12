import React, { Component } from 'react';
import './App.css';
import { Responsive } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Listen from '../Listen/Listen';
import Talk from '../Talk/Talk';



class App extends Component {
  
  

  // login = () => {
  //   this.props.auth.login();
  // }

  // logout = () => {
  //   this.props.auth.logout();
  // }

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
       <Responsive>
         <Nav isAuthenticated = {isAuthenticated()} login = {this.props.auth.login} logout = {this.props.auth.logout}>
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
