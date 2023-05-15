import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaMinusCircle } from 'react-icons/fa';
import './Dev_projects_overview.css'

function Dev_projects_overview() {
  const [data, setData] = useState([]);

  const getStatusIcon = (status) => {
    if (status === "success") {
      return <FaCheckCircle color="green"/>;
    } else if (status === "NA") {
      return <FaMinusCircle color="gray" />;
    } else
      return <FaTimesCircle color="red"/>;
  };


  useEffect(() => {
    fetch('../digital_team_dashboard/DEV_projects_Overview.txt')
      .then(response => response.text())
      .then(text => {
        // const rows = text.split('\n');
        const rows = text.trim().split('\n'); // to remove the new line at the end 
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
      {/* <h1 align ='center'> Application Information </h1>  */}
      <table>
        <thead>
          <tr>
          <th></th>
          <th colSpan="2">FrontEnd</th>
          <th colSpan="4">BackEnd(DEH)</th>
          </tr>
          <tr>
            <th>ProjectName</th>
            <th>WebServer</th>
            <th>AppServer</th>
            <th>DEH_OAuth</th>
            <th>DEH_AuthMS</th>
            <th>DEH_SMECO</th>
            <th>DEH_DB_Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.ProjectName}</td>
              <td title={row.WebServer}>{getStatusIcon(row.WebServer)}</td>
              <td title={row.AppServer}>{getStatusIcon(row.AppServer)}</td>
              <td title={row.DEH_OAuth}>{getStatusIcon(row.DEH_OAuth)}</td>
              <td title={row.DEH_AuthMS}>{getStatusIcon(row.DEH_AuthMS)}</td>
              <td title={row.DEH_SMECO}>{getStatusIcon(row.DEH_SMECO)}</td>
              <td title={row.DEH_DB_Profile}>{getStatusIcon(row.DEH_DB_Profile)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dev_projects_overview;
