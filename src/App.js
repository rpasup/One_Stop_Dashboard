//import React, { useState, useEffect } from 'react';
// import React from 'react';
// import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boxespage from './component/Boxespage';
import Deploymentdetails from './component/Deploymentdetails';
import NavigationBar from './component/NavigationBar';
import ApplicationInfo from './component/ApplicationInfo';
import Logs_details from './component/Log_details';
import './component/NavigationBar.css';
// import StatusTable from './component/StatusTable';

function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <NavigationBar />
      {/* <Switch> */}
      <Routes>
        <Route path="/digital_team_dashboard" element={<Boxespage />} />
        <Route path="/digital_team_dashboard/Deployment_Info" element={<Deploymentdetails />} />
        <Route path="/digital_team_dashboard/Application_Info" element={<ApplicationInfo />} />
        {/* <Route path="/digital_team_dashboard/StatusTable" element={<StatusTable />} /> */}
        <Route path="/digital_team_dashboard/Log_details" element={<Logs_details />} />
        {/* <Route path="About" component={Deploymentdetails} /> */}
      {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;


// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';
// import './Navibar.css';

// function App() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand href="https://google.com">
//         <img
//           src="logo.png"
//           width="30"
//           height="30"
//           className="d-inline-block align-top"
//           alt="Logo raja"
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Item>
//             <Nav.Link href="https://google.com">Home</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="https://google.com">About</Nav.Link>
//           </Nav.Item>
//           <NavDropdown title="Dropdown 1" id="dropdown-1">
//             <NavDropdown.Item href="https://google.com">Action 1</NavDropdown.Item>
//             <NavDropdown.Item href="https://google.com">Action 2</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="https://google.com">Action 3</NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown title="Dropdown 2" id="dropdown-2">
//             <NavDropdown.Item href="https://google.com">Action 1</NavDropdown.Item>
//             <NavDropdown.Item href="https://google.com">Action 2</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="https://google.com">Action 3</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Nav>
//           <NavDropdown title={<FaUserCircle size={24} />} id="user-dropdown">
//             <NavDropdown.Item href="https://google.com">Profile</NavDropdown.Item>
//             <NavDropdown.Item href="https://google.com">Settings</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="https://google.com">Log out</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default App;

