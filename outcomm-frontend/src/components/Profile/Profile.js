import React, { Component } from 'react';
import { Button,
        Header,
        Image,
        Modal } from 'semantic-ui-react';
import User from '../../services/Users';

class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
            console.log(profile, "from no user");
        User.saveUserInDb(profile);
          });

        } else {
          this.setState({ profile: userProfile });
          console.log(this.state.profile , "from else");
        User.saveUserInDb(this.state.profile);
        }
        
      }

      render(){
        const { profile } = this.state;

          return(
              <Modal trigger={this.props.trigger}>
                  <Modal.Header>{profile.name}</Modal.Header>
                  <Modal.Content image scrolling>
                  <Image size='medium' src={profile.picture} wrapped />
                      
                  </Modal.Content>
              </Modal>
          )
      }
}
export default Profile;