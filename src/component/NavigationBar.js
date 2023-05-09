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
      <img
        src={logo}
        height="35"
        width="200"
        className="d-inline-block align-top"
        alt="Logo"
      />
      <Navbar.Text className="text-white font-weight-bold" style={{ fontSize: "1.5rem", marginLeft: "105px" }}>
        <a href="/digital_team_dashboard" className="text-white font-weight-bold" style={{ textDecoration: "none" }}>
          Digital Team Dashboard
        </a>
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none',marginLeft: "85px" }}>Deployment Overview</Link></Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="collasible-nav-dropdown">
              Projects Overview
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/digital_team_dashboard/Dev_projects_overview">
                Development
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/digital_team_dashboard/UAT_projects_overview">
                UAT
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/digital_team_dashboard/Production_projects_overview">
                Production
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="last-refreshed-time">Last Refreshed Time: {getLastRefreshedTime()}</span>
        </Nav>
      </Navbar.Collapse>
      <style>
        {`
          .navbar-nav {
            display: flex;
            align-items: center;
          }

          .nav-link {
            margin-right: 20px;
          }

          .nav-link:last-child {
            margin-right: 0;
          }

          .navbar-collapse {
            justify-content: flex-end;
          }
        `}
      </style>
    </Navbar>
  );
}

export default NavigationBar;
