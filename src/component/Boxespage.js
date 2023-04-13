import React from 'react';
import Box from './Box';
import './Boxespage.css';

function Boxespage(props) {
  return (
    <div className="box-container">
      <div className="box-row">
        <Box title="Environments" content="3" color="#f44336" />
        <Box title="Applications" content="10" color="#4caf50" />
        <Box title="Deployed" content="4" color="#2196f3" />
      </div>
      <div className="box-col">
        <Box title="Running Apps" content="6" color="#9c27b0" />
        <Box title="Failed Apps" content="8" color="#ff9800" />
        <Box title="Projects" content="8" color="#9c27b4" />
      </div>
    </div>
  );
}

export default Boxespage;
