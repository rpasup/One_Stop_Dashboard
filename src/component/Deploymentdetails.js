import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import './Deploymentdetails.css'

function Deploymentdetails() {
  const [data, setData] = useState([]);
  const getStatusIcon = (status) => {
    if (status === "up_running") {
      return <FaCheckCircle color="green"/>;
    } else {
      return <FaTimesCircle color="red"/>;
    }
  };

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
            <th>Logs</th>
            <th>Deployed_By</th>
            <th>Last_Deployed_On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Application}</td>
              <td>{row.DeploymentStatus}</td>
              <td> {getStatusIcon(row.Application_Status)}</td>
              <td>{row.Build_Number}</td>
              <td><a href={row.logs}><button>Click_Here</button></a></td>
              <td>{row.DeployedBy}</td>
              <td>{row.Last_Deployed_On}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Deploymentdetails;
