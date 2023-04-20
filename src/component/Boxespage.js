import React, { useState, useEffect } from 'react';
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

  return (
    <div className="box-container">
      <div className="box-row">
        <Box title="Environments" content={new Set(data.map(row => row[0])).size - 1} color="#f44336" />
        <Box title="Applications" content={data.filter(row => row[1]).length - 1} color="#4caf50" />
        <Box title="Deployed" content={data.filter(row => row[2] === 'Deployed').length} color="#2196f3" />
      </div>
      <div className="box-col">
        <Box title="Running Apps" content={data.filter(row => row[3] === 'up_running').length} color="#9c27b0" />
        <Box title="Failed Apps" content={data.filter(row => row[3] === 'not_up_running').length} color="#ff9800" />
        {/* <Box title="Projects" content={new Set(data.map(row => row[0])).size} color="#9c27b4" /> */}
        <Box title="Projects" content='--' color="#9c27b4" /> 
      </div>
    </div>
  );
}

export default Boxespage;
