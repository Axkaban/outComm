import React, { Component } from 'react';
import { Button,
        Header,
        Image,
        Modal,
        List } from 'semantic-ui-react';
import User from '../../services/Users';
import history from '../../history';
import Messages from '../../services/Messages';

class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {
            messages: [],
            favorites: []
            
        }
    }

    componentWillMount() {
        this.setState({ 
            profile: {},
            id: ''
         });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
        User.saveUserInDb(profile)
        .then(id => {
            history.replace(`/${id}`);
           this.setState({id});
        });
          });

        } else {
          this.setState({ profile: userProfile });
        User.saveUserInDb(this.state.profile)
        .then(id => {
            history.replace(`${id}`);
           this.setState({id}); 
        });
        
      }
     
    }

    toggleFaving = (id, obj, bool) =>{

        let favorites = this.state.favorites;
        let messages = this.state.messages;
        let newObj = {
            text: obj.text,
            userId: obj.userId,
            favorite: bool
        }

       Messages.toggleFave(id, newObj);


        if (bool === true || bool === "true"){
            
            favorites.push(newObj);
            messages = messages.filter(m => m !== true || m !== 'true' );
           
           this.setState({
                    favorites,
                    messages
                })
                console.log(bool, "bool", favorites, "obj", this.state.favorites, "state favs");
          
        } else {

            messages.push(newObj);
            favorites = favorites.filter(f => f === true || f === 'true');
            this.setState({
                    messages,
                    favorites
                })
                console.log(bool, "bool", messages, "obj", this.state.messages, "state mesages");
            
        }
        
    }

    loadMessages = async() => {
       await Messages.getMessages(this.state.id).then(messages => {
            this.setState({ messages });
            
        });

        await Messages.getFaveMessages(this.state.id).then(favorites => {
            this.setState({ favorites })
        })
        console.log(this.state.messages,"the messages", this.state.favorites,"favs");
    }

    delete = (message, id) => {
        Messages.deleteMessage(id);
       let messagesAfter = this.state.messages.filter(m => m !== message);
        this.setState({ 
            messages: messagesAfter
        });
        console.log(this.state.messages);
    }
    

    renderFavorites = () => {

        if (this.state.favorites) {
           return this.state.favorites.map((fave,i) => {
                console.log(fave);
                return (
                    <List.Item key = {i}>
                    <List.Content floated='left'>
                         <Header as= 'h4' textAlign = 'center' floated ='right'>{fave.text}</Header>
                         </List.Content>
                        <List.Content floated='right'>
                            <Button onClick={() => { this.delete(fave, fave.id) }}>delete</Button>
                            <Button onClick={() => { this.toggleFaving(fave.id, fave, false) }}>Unfave</Button>
                        </List.Content>
                    </List.Item>
                )
            })
        }
    }

    renderMessages = () => {
        
       if(this.state.messages){
           console.log(this.state.messages)
           
           return this.state.messages.map((message, i) => {

            if(message.favorite !== "true"){

                
                return (
                    <List.Item key = {i}>
                         <List.Content floated='left'>
                            <Header as= 'h4' textAlign = 'center' floated ='right'>{message.text}</Header>
                         </List.Content>
                        <List.Content floated='right'>
                            <Button onClick={() => { this.delete(message, message.id) }}>delete</Button>
                            <Button onClick={() => { this.toggleFaving(message.id, message, true) }}>fave</Button>
                        </List.Content>
                    </List.Item> 
                )
            }
            })
        }
    }

      render(){
        const { profile } = this.state;

          return(
              <Modal trigger={this.props.trigger} onOpen={ this.loadMessages } dimmer={'blurring'}>
                  <Modal.Header>{profile.name}</Modal.Header>
                  <Modal.Content image scrolling>
                      <Image size='medium' src={profile.picture} wrapped />
                      <p>{profile.email}</p>
                     
                      <Modal.Description>
                      <Header>Favorite Messages</Header>
                      <List>
                          {this.renderFavorites()}
                      </List>
                      <Header>Saved Messages</Header>
                      <List>
                          {this.renderMessages()}
                      </List>
                  </Modal.Description>
                  </Modal.Content>
                 
              </Modal>
          )
      }
}
export default Profile;