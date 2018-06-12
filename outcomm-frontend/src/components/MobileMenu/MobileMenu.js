import React, { Component } from 'react';
import { Responsive, 
    Sidebar, 
    Menu, 
    Segment } from 'semantic-ui-react';
 
class MobileMenu extends Component{

    constructor(props){
        super(props)
        this.state = {
            logName:'Log In',
        }
    }
    componentDidMount(){
    console.log(this.props.visible);
        
    }

    componentWillUpdate(){
    console.log(this.props.visible, "on updte?");

    }


    render(){
        
        return(
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <Sidebar.Pushable as={Segment} >
                        <Sidebar color = "teal" as={Menu} animation='overlay' direction='top' visible={this.props.visible} vertical inverted>
                            <Menu.Item name={this.state.logName} >
                                {this.state.logName}
                            </Menu.Item>
                            <Menu.Item>
                                <a src='#'> Sign Up</a>
                            </Menu.Item>
                        </Sidebar>
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