import React, { Component } from 'react';
import { Menu, 
         Icon } from 'semantic-ui-react';


class MessageBar extends Component {
    constructor(props){
        super(props)
        
    }

    



    isAuth = () => {
        if(this.props.isAuth){
            return(

                <Menu widths = {2} color='teal'>
                    <Menu.Item name='download'onClick = {this.props.save}>
                        <Icon name='download' />
                        save
                    </Menu.Item>
                    <Menu.Item name='upload' onClick = {this.props.getAllMessages}>
                        <Icon name='upload' />
                        use
                    </Menu.Item>
                </Menu>

            )
        }
        else{
            return;
        }
    }
    
    render(){
        console.log(this.props.id)
        return(
            <div>
                {this.isAuth()}
            </div>
        )
    }
}

export default MessageBar;