import React, { Component } from 'react';
import { Responsive,
    Sidebar, 
    Container,
    Image } from 'semantic-ui-react';
import mobileLogo from '../../sources/logo_outcomm.png';
import DesktopMenu from '../DeskopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';


class Nav extends Component {
    constructor(){
        super()
        this.state = {
            visible: false
        }
    }

    handleToggle = () => {
        console.log("click", this.state.visible);
        this.setState({ visible: !this.state.visible })
    };

    render() {
        return(
            <Responsive>
                <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pusher onClick= {this.handleToggle} >
                    <Image size = 'tiny' src = {mobileLogo} centered/>
                </Sidebar.Pusher>
                <MobileMenu visible={this.state.visible}>
                    <Container>{this.props.children}</Container>
                </MobileMenu>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <DesktopMenu />
                    <Container>{this.props.children}</Container>
                </Responsive>
            </Responsive>
        )
    }
}
export default Nav;