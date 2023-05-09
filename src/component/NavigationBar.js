import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../RAKBANK_LOGO.png'
import './NavigationBar.css';

function NavigationBar() {
    const getLastRefreshedTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
    };
  return (
      <Navbar sticky="top" bg="dark" expand="xl">
      {/* <Navbar.Brand href="/digital_team_dashboard"> */}
      <img
          src={logo} // use your logo image here
          height="35"
          width="200"
          className="d-inline-block align-top"
          alt="Logo"
        />
      {/* </Navbar.Brand> */}
      <Navbar.Text className="text-white font-weight-bold" style={{fontSize: "1.5rem"}}>
      <a href="/digital_team_dashboard" className="text-white font-weight-bold" style={{textDecoration: "none"}}>
        Digital Team Dashboard
      </a>
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link><Link to="/digital_team_dashboard">Home</Link></Nav.Link> */}
          <Nav.Link><Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none' }}>Deployment Overview</Link></Nav.Link>
          {/* <Dropdown style={{marginRight: "20px"}}>
            <Dropdown.Toggle variant="dark" id="collasible-nav-dropdown">
              Deployment Overview
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Development</Link></Dropdown.Item>
              
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">UAT</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Deployment_Info">Production</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
           */}
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="collasible-nav-dropdown">
              Projects Overview
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/digital_team_dashboard/Dev_projects_overview">Development</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/UAT_projects_overview">UAT</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/digital_team_dashboard/Production_projects_overview">Production</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="last-refreshed-time">Last Refreshed Time: {getLastRefreshedTime()}</span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
