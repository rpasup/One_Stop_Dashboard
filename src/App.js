//import React, { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boxespage from './component/Boxespage';
import Deployment_details from './component/Deployment_details';
import NavigationBar from './component/NavigationBar';
import ApplicationInfo from './component/ApplicationInfo';
import Logs_details from './component/Log_details';

function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <NavigationBar />
      {/* <Switch> */}
      <Routes>
        <Route path="/digital_team_dashboard" element={<Boxespage />} />
        <Route path="/digital_team_dashboard/Deployment_Info" element={<Deployment_details />} />
        <Route path="/digital_team_dashboard/Application_Info" element={<ApplicationInfo />} />
        <Route path="/digital_team_dashboard/Log_details" element={<Logs_details />} />
        <Route path="About" component={Deployment_details} />
      {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;
