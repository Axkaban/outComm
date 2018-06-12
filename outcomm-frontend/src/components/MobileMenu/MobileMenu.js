import React, { Component } from 'react';
import { Responsive, 
    Sidebar, 
    Menu, 
    Segment,
    Icon } from 'semantic-ui-react';
 
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
                    <Menu.Item>
                        <Icon name='user circle' color='teal' />
                    </Menu.Item>
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