import React, { Component } from 'react';
import { Grid,
        Image,
        Message, 
        Container,
        Header } from 'semantic-ui-react';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';
import earLogo from '../../sources/ear.png';
import './Listen.css';

class Listen extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    onListen = () => {
        console.log('clicked on listen');

        fetch('http://localhost:3002/api/speech-to-text/token')
        .then((response) => {
            return response.text();
        }).then((token) => {
         let stream = recognizeMicrophone({
              token: token,
              objectMode: true, // send objects instead of text
              keepMicrophone:true,
              extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
              format: false // optional - performs basic formatting on the results such as capitals an periods
          });

          stream.on('data', (data) => {
            console.log(data);
            
            this.setState({
                message: data.alternatives[0].transcript
            })
            console.log(this.state.message, "<--- state|incoming -->", data.alternatives[0].transcript);
          });

          stream.on('error', (err) => {
              console.log(err);
          });

        }).catch(function(error) {
            console.log(error);
        });

    }

    checkInput = () => {
        if(this.state.message === ''){
            return(
                <Container >
                    <Header as='h2'>
                        Out<span>Comm</span>
                        <Header.Subheader >
                            An Easier Way
                            To Communicate.
                        </Header.Subheader>
                    </Header>
                </Container>
            );
        } else{
            return(<p className ='incoming-text'>{this.state.message}</p>);
        }
    }

    render() {
        return(
            <Grid columns={2} as='div' className='speech-to-text' >
            <Grid.Column color = 'purple'>
                <Image className = 'ear'  size = 'medium' src = {earLogo} centered onClick = {this.onListen} />
            </Grid.Column>
            <Grid.Column color = 'purple'>
                <br/>
                <Message floating>
                    {this.checkInput()}
                </Message>
                <br/>
            </Grid.Column>
            </Grid>
        )
    }
}
export default Listen;