import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { useTable, useSortBy } from 'react-table';
// import MarkdownViewer from './MarkdownViewer';
import './Deploymentdetails.css';
// import { useNavigate } from 'react-router-dom';

function Deploymentdetails() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [maintenanceMessage, setMaintenanceMessage] = useState(null);

  const getStatusIcon = (status) => {
    if (status === 'up_running') {
      return <FaCheckCircle color="green" />;
    } else {
      return <FaTimesCircle color="red" />;
    }
  };

  useEffect(() => {
    fetch('../digital_team_dashboard/deployment_details.txt')
      .then((response) => response.text())
      .then((text) => {
        const rows = text.trim().split('\n');
        const headers = rows[0].split(',');
        const data = rows
          .slice(1)
          .map((row) => row.split(','))
          .map((values) =>
            headers.reduce((obj, header, index) => {
              obj[header] = values[index];
              return obj;
            }, {})
          );
        setData(data);
      })
      .catch((error) => console.error(error));

    fetch('../digital_team_dashboard/maintenance_updates.txt')
      .then((response) => response.text())
      .then((text) => {
        setMaintenanceMessage(text.trim());
      })
      .catch((error) => console.error(error));
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'Environment', accessor: 'Environment' },
      { Header: 'Application', accessor: 'Application' },
      { Header: 'DeploymentStatus', accessor: 'DeploymentStatus' },
      {
        Header: 'Application_Status',
        accessor: 'Application_Status',
        Cell: ({ value }) => (
          <div title={value}>{getStatusIcon(value)}</div>
        ),
      },
      { Header: 'Build_Number', accessor: 'Build_Number' },
      {
        Header: 'ReleaseNote',
        accessor: 'Change_Logs',
        Cell: ({ value }) => {
          // const navigate = useNavigate();
      
          const handleClick = (e) => {
            e.preventDefault(); // Prevent opening in current page
            // navigate(`/digital_team_dashboard/Release_Notes/${value}`);
            // Open the link in a new tab
            window.open('/digital_team_dashboard/Release_Notes/'+ value, '_blank');
          };
          return (
            <div>
              <a href={value} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <MdOutlineNoteAlt />
              </a>
            </div>
          );
        },
      },    
      
      { Header: 'Deployed_By', accessor: 'DeployedBy' },
      {
        Header: 'Last_Deployed_On',
        accessor: 'Last_Deployed_On',
        Cell: ({ value }) => <div className="word-wrap">{value}</div>,
      },
      {
        Header: 'Logs',
        accessor: 'logs',
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <BsFillFileEarmarkTextFill />
          </a>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: [{ id: 'Application', desc: false }], // Set initial sorting by Application column in ascending order
    },
    useSortBy
  );

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredData = rows.filter((row) =>
    row.original['Application']
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  return (
    <div className="deployment-details">
      <div className="filter">
        {maintenanceMessage && (
          <div className="maintenance-message">
            <span>{maintenanceMessage}</span>
          </div>
        )}
        {/* //Filter By Application: */}
        <span></span>
        <input
          type="text"
          placeholder="Search by Application..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-caret-up"></i>
                      ) : (
                        <i className="fa fa-caret-down"></i>
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {filteredData.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Deploymentdetails;
