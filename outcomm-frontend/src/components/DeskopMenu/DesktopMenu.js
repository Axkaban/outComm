import React, { Component } from 'react';
import { Responsive, Menu, Image } from 'semantic-ui-react';
import logo from '../../sources/Artboard1.png';

class DesktopMenu extends Component{

    constructor(){
        super()
        this.state = {
            logName:'Log In',
        }
    }

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render(){
        return(
            <div>
                <Responsive>
                    <Menu>
                        <Menu.Item position = 'left'>
                            <Image size = 'small' src = {logo} spaced/>
                        </Menu.Item>
                        <Menu.Item name={this.state.logName} position='right' link>
                            {this.state.logName}
                        </Menu.Item>
                        <Menu.Item link>
                            <a src='#'> Sign Up</a>
                        </Menu.Item>
                    </Menu>
                </Responsive>
            </div>
        )
    }
}

export default DesktopMenu;