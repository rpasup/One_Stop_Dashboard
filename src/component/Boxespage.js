import React from 'react';
import Box from './Box';
import './Boxespage.css';

function Boxespage(props) {
  return (
    <div className="box-container">
      <div className="box-row">
        <Box title="Environments" content="3" color="#f44336" />
        <Box title="Servers" content="10" color="#4caf50" />
        <Box title="FrontEndApp's" content="4" color="#2196f3" />
      </div>
      <div className="box-col">
        <Box title="BackEndApp's" content="6" color="#9c27b0" />
        <Box title="Total Up and Running" content="6/10" color="#ff9800" />
      </div>
    </div>
  );
}

export default Boxespage;
