import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../RAKBANK_LOGO.png'
import './NavigationBar.css';

function NavigationBar() {
  return (
      <Navbar sticky="top" bg="dark" expand="xl">
      <Navbar.Brand href="/digital_team_dashboard">
      <img
          src={logo} // use your logo image here
          height="35"
          width="200"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Text className="text-white font-weight-bold">
        Digital Team Dashboard
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link><Link to="/digital_team_dashboard">Home</Link></Nav.Link> */}
          {/* <Nav.Link><Link to="/digital_team_dashboard/Deployment_Info">Deployment_Info</Link></Nav.Link> */}
          <Dropdown>
            <Dropdown.Toggle variant="light" id="collasible-nav-dropdown">
              Deploymentdetails
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Development</Link></Dropdown.Item>
              
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">UAT</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Production</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown>
            <Dropdown.Toggle variant="light" id="collasible-nav-dropdown">
              Application Overview
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to="/digital_team_dashboard/Application_Info">Development</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Application_Info">UAT</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Application_Info">Production</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <div className="navbar-end">
            <div className="navbar-item has-text-white">
              Last Reload Time: {lastReloadTime}
            </div>
          </div> */}
          {/* <Nav.Link><Link to="/digital_team_dashboard/Application_Info">Application_Info</Link></Nav.Link> */}
          {/* <Nav.Link><Link to="/digital_team_dashboard/StatusTable">StatusTable</Link></Nav.Link> */}
          {/* <Nav.Link href="#">Last Autoupdated at : 12th April 2023,18:00:00 GST</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
