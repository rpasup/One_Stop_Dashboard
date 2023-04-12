import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../RAKBANK_LOGO.png'

function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/digital_team_dashboard">
      <img
          src={logo} // use your logo image here
          height="35"
          width="250"
          className="d-inline-block align-top"
          alt="Logo"
        />
        Digital Team Dashboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link><Link to="/digital_team_dashboard">Home</Link></Nav.Link>
          {/* <Nav.Link><Link to="/digital_team_dashboard/Deployment_Info">Deployment_Info</Link></Nav.Link> */}
          <Nav.Link><Link to="/digital_team_dashboard/Application_Info">Application_Info</Link></Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Deployment_details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Development</Link></Dropdown.Item>
              
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">UAT</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Production</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Logs_details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to="/digital_team_dashboard/Log_details">Development</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">UAT</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Production</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#">Autoupdated at : </Nav.Link>
          <text>raha</text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
