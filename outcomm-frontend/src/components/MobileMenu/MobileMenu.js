import React, { Component } from 'react';
import { Responsive, 
    Sidebar, 
    Menu, 
    Segment } from 'semantic-ui-react';
import Profile from '../Profile/Profile';
 
class MobileMenu extends Component{

    constructor(props){
        super(props)
        this.state = {
           
        }
    }
   
    renderLogButton = () => {
        if(this.props.isAuth){
            return(
                <Sidebar color="teal" as={Menu} animation='overlay' direction='top' visible={this.props.visible} vertical inverted>
                   
                   <Profile trigger = { <Menu.Item>
                        Profile
                    </Menu.Item>}
                    auth = {this.props.auth}/>
                    <Menu.Item onClick = {this.props.logout}> 
                        Log Out
                    </Menu.Item>
                  
                </Sidebar>
            )
        }else{
            return(
                <Sidebar color="teal" as={Menu} animation='overlay' direction='top' visible={this.props.visible} vertical inverted>
                    <Menu.Item onClick = {this.props.login}>
                        Log In / Sign up
                     </Menu.Item>
                </Sidebar>
            )
        }
    }

    render(){
        
        return(
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <Sidebar.Pushable as={Segment} >
                        {this.renderLogButton()}
                        <Sidebar.Pusher>
                            {this.props.children}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Responsive>
            </div>
        )
    }
}

export default MobileMenu;