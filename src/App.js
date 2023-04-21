import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boxespage from './component/Boxespage';
import Deploymentdetails from './component/Deploymentdetails';
import NavigationBar from './component/NavigationBar';
import Devprojectsoverview from './component/Dev_projects_overview';
import UATprojectsoverview from './component/UAT_projects_overview';
import './component/NavigationBar.css';

function App() {
  const [setLastReloadTime] = useState("");

  useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
      setLastReloadTime(getCurrentTime());
    };

    const intervalId = setInterval(reloadPage, 5 * 60 * 1000); // reload the page every 5 minutes

    return () => {
      clearInterval(intervalId);
    };
  }, [setLastReloadTime]);

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/digital_team_dashboard" element={<Boxespage />} />
        <Route path="/digital_team_dashboard/Deployment_Info" element={<Deploymentdetails />} />
        <Route path="/digital_team_dashboard/Dev_projects_overview" element={<Devprojectsoverview />} />
        <Route path="/digital_team_dashboard/UAT_projects_overview" element={<UATprojectsoverview />} />
      </Routes>
    </Router>
  );
}
export default App;