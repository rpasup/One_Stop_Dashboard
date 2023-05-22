import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boxespage from './component/Boxespage';
import Deploymentdetails from './component/Deploymentdetails';
import NavigationBar from './component/NavigationBar';
import Devprojectsoverview from './component/Dev_projects_overview';
import UATprojectsoverview from './component/UAT_projects_overview';
import WorkInProgress from './component/WorkInProgress';
import './component/NavigationBar.css';
import MarkdownViewer from "./component/MarkdownViewer";

function App() {

  useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
    };

    const intervalId = setInterval(reloadPage, 5 * 60 * 1000); // reload the page every 5 minutes

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/digital_team_dashboard" element={<Boxespage />} />
        <Route path="/digital_team_dashboard/Deployment_Info" element={<Deploymentdetails />} />
        <Route path="/digital_team_dashboard/Dev_projects_overview" element={<Devprojectsoverview />} />
        <Route path="/digital_team_dashboard/UAT_projects_overview" element={<UATprojectsoverview />} />
        <Route path="/digital_team_dashboard/Production_projects_overview" element={<WorkInProgress />} />
        {/* <Route path="/digital_team_dashboard/Release_Notes" element={<MarkdownViewer fileName={'/digital_team_dashboard/Webapply_change.md'} />} /> */}
        {/* <Route path="/digital_team_dashboard/Release_Notes/:fileName" component={MarkdownViewer} /> */}
        {/* <Route path="/digital_team_dashboard/Release_Notes" element={<MarkdownViewer />} /> */}
        <Route path="/digital_team_dashboard/Release_Notes/:fileName" element={<MarkdownViewer />} />
        {/* <Route path="/digital_team_dashboard/Release_Notes" element={<MarkdownViewer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
