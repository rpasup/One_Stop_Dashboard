import React, { useState, useEffect } from 'react';
import './Deployment_details.css'

function Deployment_details() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../digital_team_dashboard/data.txt')
      .then(response => response.text())
      .then(text => {
        const rows = text.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => {
          const values = row.split(',');
          return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
          }, {});
        });
        setData(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
        <div>
      <h1 align ='center'> Development </h1> 
      <table>
        <thead>
          <tr>
            <th>Application</th>
            <th>DeploymentStatus</th>
            <th>Application_Status</th>
            <th>Build_Number</th>
            <th>Last_Deployed_On</th>
            <th>Deployed_By</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Application}</td>
              <td>{row.DeploymentStatus}</td>
              <td>{row.Application_Status}</td>
              <td>{row.Build_Number}</td>
              <td>{row.Last_Deployed_On}</td>
              <td>{row.Deployed_By}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Deployment_details;