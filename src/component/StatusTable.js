import React from 'react';
import './styles.css'; // Import your CSS file

const StatusTable = () => {
  return (
    <div className="table-container">
      <table className="status-table">
        <thead>
          <tr>
            <th>Server Name</th>
            <th>Status</th>
            <th>Last Checked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Server 1</td>
            <td><span className="status-indicator up"></span> Up and running</td>
            <td>10 minutes ago</td>
          </tr>
          <tr>
            <td>Server 2</td>
            <td><span className="status-indicator down"></span> Down</td>
            <td>1 hour ago</td>
          </tr>
          <tr>
            <td>Server 3</td>
            <td><span className="status-indicator warning"></span> Maintenance mode</td>
            <td>3 days ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatusTable;
