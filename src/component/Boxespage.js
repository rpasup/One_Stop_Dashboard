import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import './Boxespage.css';

function Boxespage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../digital_team_dashboard/deployment_details.txt');
      const text = await response.text();
      const rows = text.split('\n').map(row => row.split(','));
      setData(rows);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  // const projects = await fetch('../digital_team_dashboard/DEV_projects_Overview.txt');
  // const project_names = await projects.text();
  // const projects_count = project_names.split('\n').map(row => row.split(','));
  // setData(projects_count);
  // }
  // fetchData();
  // }, []);

  return (
    <div className="box-container">
      <div className="box-row">
      <Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none' }}>
        <Box title="Environments" content={new Set(data.map(row => row[0])).size - 1} color="#f44336" />
      </Link>
      <Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none' }}>
        <Box title="Applications" content={data.filter(row => row[1]).length - 1} color="#4caf50" />
      </Link>
      <Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none' }}>
        <Box title="Deployed" content={data.filter(row => row[2] === 'Deployed').length} color="#2196f3" />
      </Link>
      </div>
      <div className="box-col">
      <Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none' }}>
        <Box title="Running Apps" content={data.filter(row => row[3] === 'up_running').length} color="#9c27b0" />
      </Link>
      <Link to="/digital_team_dashboard/Deployment_Info" style={{ textDecoration: 'none' }}>
        <Box title="Failed Apps" content={data.filter(row => row[3] === 'not_up_running').length} color="#ff9800" />
      </Link>
      <Link to="/digital_team_dashboard/Dev_projects_overview" style={{ textDecoration: 'none' }}>
        <Box title="Projects" content={new Set(data.map(projects_count => projects_count[0])).size - 1} color="#4c29b4" /> 
      </Link>
      </div>
    </div>
  );
}

export default Boxespage;
