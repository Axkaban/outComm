import React, { Component } from 'react';
import { Grid,
        Image,
        Form, 
        TextArea} from 'semantic-ui-react';
import synthesize from 'watson-speech/text-to-speech/synthesize';
import lipsLogo from '../../sources/mouth.png';
import './Talk.css';
import MessageBar from '../MesageBar/MessageBar';


class Talk extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    onSubmitText = () => {
        fetch('http://localhost:3002/api/text-to-speech/token')
           .then((response) => {
             return response.text();
           }).then((token) => {
    
             synthesize({
               text: this.state.text,
               token: token
             })
           })
    }

    handleChage= (e) => {
        this.setState({
            text: e.target.value
        })
        console.log(this.state.text);
    }

    render() {
        return (
            <Grid columns={2} as='div' className='text-to-speech'>
                <Grid.Column color='purple'>
                    <br />
                    <Form>
                        <TextArea autoHeight placeholder='Start typing here and press the lips for it to be heard!' onChange = {this.handleChage}/>
                    </Form>
                    <br />

                </Grid.Column>
                <Grid.Column color='purple'>
                    <Image className='lips' size='medium' src={lipsLogo} onClick = {this.onSubmitText} centered />
                </Grid.Column>
                
            </Grid>
        )
    }
}
export default Talk;