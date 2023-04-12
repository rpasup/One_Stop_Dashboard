import React, { useState, useEffect } from 'react';
import './Log_details.css'

function Logs_details() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../digital_team_dashboard/Application_information.txt')
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
      <h1 align ='center'> Logs Information </h1> 
      <table>
        <thead>
          <tr>
            <th>ApplicationName</th>
            <th>Environment</th>
            <th>Deployedon</th>
            <th>Logs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.ApplicationName}</td>
              <td>{row.Environment}</td>
              <td>{row.Deployedon}</td>
              <td>
                <a href={row.Logs}>
                <button>Click Here</button>
              </a>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logs_details;
