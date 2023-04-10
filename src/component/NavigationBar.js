import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';
import './Navigation.css';
function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{''}
        RAKBANK DIGITAL TEAM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Details" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://google.com">Application</NavDropdown.Item>
            <NavDropdown.Item href="https://google.com">Deployment</NavDropdown.Item>
            <NavDropdown.Item href="https://google.com">Logs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://google.com">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
