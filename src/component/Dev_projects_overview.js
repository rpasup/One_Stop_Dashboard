import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import './Dev_projects_overview.css'

function Dev_projects_overview() {
  const [data, setData] = useState([]);

  const getStatusIcon = (status) => {
    if (status === "success") {
      return <FaCheckCircle color="green"/>;
    } else
      return <FaTimesCircle color="red"/>;
  };


  useEffect(() => {
    fetch('../digital_team_dashboard/DEV_projects_Overview.txt')
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
              <td>{getStatusIcon(row.WebServer)}</td>
              <td>{getStatusIcon(row.AppServer)}</td>
              <td>{getStatusIcon(row.DEH_OAuth)}</td>
              <td>{getStatusIcon(row.DEH_AuthMS)}</td>
              <td>{getStatusIcon(row.DEH_SMECO)}</td>
              <td>{getStatusIcon(row.DEH_DB_Profile)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dev_projects_overview;
