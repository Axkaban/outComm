import React, { Component } from 'react';
import './App.css';
import { Responsive,
         Button,
         Icon } from 'semantic-ui-react';
import Nav from '../Nav/Nav';
import Listen from '../Listen/Listen';
import Talk from '../Talk/Talk';
import MessageBar from '../MesageBar/MessageBar';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        visible: false
    }

}

toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
       <Responsive>
         <Nav isAuthenticated = {isAuthenticated()} login = {this.props.auth.login} logout = {this.props.auth.logout} auth = {this.props.auth}>
         <br/>
         <div className='main-container'>
          <Listen/>
          <Talk />
          <MessageBar isAuth = {isAuthenticated()} visible = {this.state.visible} toggle = {this.toggleVisibility}> 
          <div><Button onClick={this.toggleVisibility} color='black' fluid><Icon name='chevron up' /></Button></div>
          </MessageBar>
          </div>
         </Nav>
       </Responsive>
      </div>
    );
  }
}

export default App;
