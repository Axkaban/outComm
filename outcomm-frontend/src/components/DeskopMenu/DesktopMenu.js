import React, { Component } from 'react';
import { Responsive,
         Menu,
         Image,
         Icon } from 'semantic-ui-react';
import logo from '../../sources/Artboard1.png';

class DesktopMenu extends Component{


    renderLogButton = () => {
        if(this.props.isAuth){
            return(
                <Menu>
                    <Menu.Item position='left'>
                        <Image size='small' src={logo} spaced />
                    </Menu.Item>
                    <Menu.Item position='right' link>
                        <Icon name='user circle' color='teal' />
                    </Menu.Item>
                    <Menu.Item onClick = {this.props.logout} link>
                        Log Out
                    </Menu.Item>
                </Menu>
            )
        } else {
            return(
                <Menu>
                    <Menu.Item position='left'>
                        <Image size='small' src={logo} spaced />
                    </Menu.Item>
                    <Menu.Item position='right' onClick = {this.props.login} link>
                        Log In / Sign up
                    </Menu.Item>
                </Menu>
            )
        }
    }

    render(){
        return(
            <div>
                <Responsive>
                    {this.renderLogButton()}
                </Responsive>
            </div>
        )
    }
}

export default DesktopMenu;