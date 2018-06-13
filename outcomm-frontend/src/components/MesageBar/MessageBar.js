import React, { Component } from 'react';
import { Sidebar, 
         Segment, 
         Menu, 
         Icon } from 'semantic-ui-react'

class MessageBar extends Component {
    

    isAuth = () => {
        if(this.props.isAuth){
            return(
                <div>

                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='overlay' direction='bottom' visible={this.props.visible} inverted color='teal'>
                                <Menu.Item name='hide' onClick = {this.props.toggle}>
                                    <Icon name='chevron down' />
                                </Menu.Item>
                                <Menu.Item name='download'>
                                    <Icon name='download' />
                                    save
                                </Menu.Item>
                                <Menu.Item name='upload'>
                                    <Icon name='upload' />
                                    use
                                </Menu.Item>
                                <Menu.Item name='star'>
                                    <Icon name='star' />
                                    favorites
                                </Menu.Item>
                            
                        </Sidebar>
                        <Sidebar.Pusher>
                            {this.props.children}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            )
        }
        else{
            return this.props.children
        }
    }
    
    render(){
        return(
            <div>
                {this.isAuth()}
            </div>
        )
    }
}

export default MessageBar;