import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import SepetOzeti from './SepetOzeti';

export default class Navi extends Component {

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen : false
    };
  }

  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar>
        <NavbarBrand href="/">Online Alışveriş Sitesi</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <SepetOzeti sepet={this.props.sepet}></SepetOzeti>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}
