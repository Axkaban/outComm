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
            showFaves: false,
            showMessages:false
        }
    }

    componentWillMount() {
        this.setState({ 
            profile: {},
            messages:[]
         });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
        User.saveUserInDb(profile)
        .then(id => history.replace(`/${id}`));
          });

        } else {
          this.setState({ profile: userProfile });
        User.saveUserInDb(this.state.profile)
        .then(id => history.replace(`${id}`));
        
      }
      
     Messages.getMessages().then(messages => this.setState({ messages }));
    }

    toggleFaving = (id, obj, bool) =>{
        let newObj = {
            text: obj.text,
            userId: obj.userId,
            favorite: bool
        }

        Messages.toggleFave(id, newObj);
        
    }

    loadMessages = () => {
        Messages.getMessages().then(messages => this.setState({ messages }));
    }

    showFav = () => {
        this.setState({
            showFaves: true
        })
    }

    showMes = () => {
        this.setState({
            showMessages: true
        })
    }
     
    

    renderFavorites = async() => {
        if (this.state.showFaves) {
            let faves = await Messages.getFaveMessages();
            console.log(faves);
            faves.map(fave => {
                console.log(fave);
                return (
                    <div>
                        <List.Content floated='right'>
                            <Button onClick={() => { Messages.deleteMessage(fave.id) }}>delete</Button>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button onClick={() => { this.toggleFaving(fave.id, fave, false) }}>Unfave</Button>
                        </List.Content>
                        <List.Content>{fave.text}</List.Content>
                    </div>
                )
            })
        }
    }

    renderMessages = () => {
        if (this.state.showMessages) {
            this.loadMessages();
            this.state.messages.map(message => {
                return (
                    <div>
                        <List.Content floated='right'>
                            <Button onClick={() => { Messages.deleteMessage(message.id) }}>delete</Button>
                        </List.Content>
                        <List.Content floated='right'>
                            <Button onClick={() => { this.toggleFaving(message.id, message, true) }}>fave</Button>
                        </List.Content>
                        <List.Content>{message.text}</List.Content>
                    </div>
                )
            })
    }
    }

      render(){
        const { profile } = this.state;

          return(
              <Modal trigger={this.props.trigger} onOpen = {() => {this.loadMessages}} dimmer = {'blurring'}>
                  <Modal.Header>{profile.name}</Modal.Header>
                  <Modal.Content image scrolling>
                  <Image size='medium' src={profile.picture} wrapped />
                      <p>{profile.email}</p>
                  </Modal.Content>
                  <Modal.Description>
                      <Header>Favorite Messages</Header>
                      <List>
                      {/* {this.renderFavorites()} */}
                      </List>
                      <Header>Saved Messages</Header>
                      <List>
                      {this.renderMessages()}
                      </List>
                  </Modal.Description>
              </Modal>
          )
      }
}
export default Profile;