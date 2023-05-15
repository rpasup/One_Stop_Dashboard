import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle,FaMinusCircle } from "react-icons/fa";
import './UAT_projects_overview.css'

function UAT_projects_overview() {
  const [data, setData] = useState([]);

  const getStatusIcon = (status) => {
    if (status === "success") {
      return <FaCheckCircle color="green"/>;
    }else if (status === "NA") {
      return <FaMinusCircle color="gray" />;
    }else
      return <FaTimesCircle color="red"/>;
  };


  useEffect(() => {
    fetch('../digital_team_dashboard/UAT_projects_Overview.txt')
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
            <th ></th>
            <th colSpan="4" >FrontEnd</th>
            <th colSpan="8" >BackEnd(DEH)</th>
          </tr>
          <tr>
            <th className="bordered"></th>
            <th colSpan="2" className="bordered">NODE1</th>
            <th colSpan="2" className="bordered">NODE2</th>
            <th colSpan="4" className="bordered">NODE1</th>
            <th colSpan="4">NODE2</th>
          </tr>
          <tr>
            <th className="bordered">ProjectName</th>
            <th>WebServer</th>
            <th className="bordered">AppServer</th>
            <th>WebServer</th>
            <th className="bordered">AppServer</th>
            <th>OAuth</th>
            <th>AuthMS</th>
            <th>SMECO</th>
            <th className="bordered">DB_Profile</th>
            <th>OAuth</th>
            <th>AuthMS</th>
            <th>SMECO</th>
            <th>DB_Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="bordered">{row.ProjectName}</td>
              <td title={row.Node1WebServer}>{getStatusIcon(row.Node1WebServer)}</td>
              <td className="bordered" title={row.Node1AppServer}>{getStatusIcon(row.Node1AppServer)}</td>
              <td title={row.Node2WebServer}>{getStatusIcon(row.Node2WebServer)}</td>
              <td className="bordered" title={row.Node2AppServer}>{getStatusIcon(row.Node2AppServer)}</td>
              <td title={row.Node1DEH_OAuth}>{getStatusIcon(row.Node1DEH_OAuth)}</td>
              <td title={row.Node1DEH_AuthMS}>{getStatusIcon(row.Node1DEH_AuthMS)}</td>
              <td title={row.Node1DEH_SMECO}>{getStatusIcon(row.Node1DEH_SMECO)}</td>
              <td className="bordered" title={row.Node1DEH_DB_Profile}>{getStatusIcon(row.Node1DEH_DB_Profile)}</td>
              <td title={row.Node2DEH_OAuth}>{getStatusIcon(row.Node2DEH_OAuth)}</td>
              <td title={row.Node2DEH_AuthMS}>{getStatusIcon(row.Node2DEH_AuthMS)}</td>
              <td title={row.Node2DEH_SMECO}>{getStatusIcon(row.Node2DEH_SMECO)}</td>
              <td title={row.Node2DEH_DB_Profile}>{getStatusIcon(row.Node2DEH_DB_Profile)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    {/* <table>
      <thead>
        <tr>
          <th>ProjectName</th>
          <th colSpan="2">FrontEnd</th>
          <th colSpan="4">DEH</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row[0]}</td>
            <td colSpan="2">{row[1]}</td>
            <td colSpan="4">{row[2]}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
    </div>
  );
}

export default UAT_projects_overview;
