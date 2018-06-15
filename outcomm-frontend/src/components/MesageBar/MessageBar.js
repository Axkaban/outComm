import React, { Component } from 'react';
import { Menu, 
         Icon } from 'semantic-ui-react'

class MessageBar extends Component {
    constructor(props){
        super(props)
    }
    

    isAuth = () => {
        if(this.props.isAuth){
            return(

                <Menu widths = {3} color='teal'>
                    <Menu.Item name='download' color = 'teal' onClick = {this.props.save}>
                        <Icon name='download' />
                        save
                                </Menu.Item>
                    <Menu.Item name='upload' color = 'teal'>
                        <Icon name='upload' />
                        use
                                </Menu.Item>
                    <Menu.Item name='star' color = 'teal'>
                        <Icon name='star' />
                        favorites
                    </Menu.Item>
                </Menu>

            )
        }
        else{
            return;
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