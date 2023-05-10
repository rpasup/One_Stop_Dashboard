import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import './Deploymentdetails.css'

function Deploymentdetails() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [maintenanceMessage, setMaintenanceMessage] = useState(null);

  const getStatusIcon = (status) => {
    if (status === "up_running") {
      return <FaCheckCircle color="green"/>;
    } else {
      return <FaTimesCircle color="red"/>;
    }
  };

  useEffect(() => {
    fetch('../digital_team_dashboard/deployment_details.txt')
      .then(response => response.text())
      .then(text => {
        const rows = text.trim().split('\n');
        // const rows = text.split('\n');
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

      fetch('../digital_team_dashboard/maintenance_updates.txt')
      .then(response => response.text())
      .then(text => {
        setMaintenanceMessage(text.trim());
      })
      .catch(error => console.error(error));
  }, []);

  const filteredData = data.filter((row) =>
    row["Application"] && row["Application"].toLowerCase().includes(filterText.toLowerCase())
);


  return (
    <div className="deployment-details">
      <div className="filter">
      {maintenanceMessage && (
        <div className="maintenance-message"><span>{maintenanceMessage}</span></div>
      )}
        {/* //Filter By Application: */}
        <span></span>
        <input
          type="text"
          placeholder="Search by Application..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Environment</th>
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
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.Environment}</td>
              <td>{row.Application}</td>
              <td>{row.DeploymentStatus}</td>
              <td title={row.Application_Status}> {getStatusIcon(row.Application_Status)}</td>
              <td>{row.Build_Number}</td>
              <td>
                <a href={row.logs} target="_blank" rel="noopener noreferrer">
                  <BsFillFileEarmarkTextFill />
                </a>
              </td>
              <td>{row.DeployedBy}</td>
              <td className="wrap-text">{row.Last_Deployed_On}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Deploymentdetails;
