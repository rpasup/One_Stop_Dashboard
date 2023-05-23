import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './Chartview.css';

// function Chartview() {
//   const initialData = [
//     { application: 'bbg', deployedDate: '09May-23' },
//     { application: 'cards', deployedDate: '30Mar-23' },
//     { application: 'Loans', deployedDate: '10May-23' },
//     { application: 'bbg', deployedDate: '23May-23' },
//     { application: 'bbg', deployedDate: '23Jun-23' },
//     { application: 'cards', deployedDate: '05Apr-23' },
//     { application: 'statementreder', deployedDate: '02Jan-23' },
//     { application: 'statementreder', deployedDate: '25Jan-23' },
//     { application: 'statementreder', deployedDate: '24Jan-22' },
//     { application: 'NewApp', deployedDate: '15May-23' },
//     { application: 'MyApp', deployedDate: '20Apr-23' },
//   ];
//   const [data] = useState(initialData);

  
//   const [selectedApplication, setSelectedApplication] = useState('');
//   const [selectedStartDate, setSelectedStartDate] = useState('');
//   const [selectedEndDate, setSelectedEndDate] = useState('');
function Chartview() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('../digital_team_dashboard/DeploymentsReports.txt');
        const text = await response.text();
        const lines = text.trim().split('\n');
        const parsedData = lines.map((line) => {
          const [application, deployedDate] = line.split(',');
          return { application, deployedDate };
        });
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const [selectedApplication, setSelectedApplication] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
  
  const filteredData = data.filter((item) => {
    const isApplicationMatch =
      selectedApplication === '' ||
      item.application.toLowerCase() === selectedApplication.toLowerCase();

    const isDateRangeMatch =
      (selectedStartDate === '' && selectedEndDate === '') ||
      (selectedStartDate !== '' &&
        selectedEndDate !== '' &&
        new Date(item.deployedDate) >= new Date(selectedStartDate) &&
        new Date(item.deployedDate) <= new Date(selectedEndDate));

    return isApplicationMatch && isDateRangeMatch;
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const chartData = {
    labels: months,
    datasets: Array.from(new Set(filteredData.map((item) => item.application))).map((application) => {
      const data = months.map((month) => {
        const count = filteredData.filter(
          (item) => item.application === application && item.deployedDate.includes(month)
        ).length;
        return count;
      });

      // Generate a random color for each application
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

      return {
        label: application,
        data: data,
        backgroundColor: randomColor,
      };
    }),
  };

  const chartOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        type: 'linear',
        beginAtZero: true,
        ticks: {
          precision: 0,
          stepSize: 1,
        },
      },
    },
  };
// const chartOptions = {
//     indexAxis: 'y', // Set the index axis to 'y' for vertical bars
//     scales: {
//       x: {
//         stacked: true,
//         ticks: {
//           precision: 0,
//           stepSize: 1,
//         },
//       },
//       y: {
//         stacked: true,
//         type: 'category', // Set the y-axis type to 'category'
//         labels: filteredData.map((item) => item.application), // Use application names as labels
//       },
//     },
//     plugins: {
//       legend: {
//         display: false, // Hide the legend
//       },
//       datalabels: {
//         align: 'end', // Position the labels at the end of the bars
//         anchor: 'end',
//         color: '#333', // Set the color of the labels
//       },
//     },
//   };

  

  const ApplicationFilter = () => (
    <select value={selectedApplication} onChange={(e) => setSelectedApplication(e.target.value)}>
      <option value="">All Applications</option>
      {Array.from(new Set(data.map((item) => item.application))).map((application) => (
        <option key={application} value={application}>
          {application}
        </option>
      ))}
    </select>
  );

  const DateRangeFilter = () => (
    <div>
      <input
        type="date"
        value={selectedStartDate}
        onChange={(e) => setSelectedStartDate(e.target.value)}
      />
      <input
        type="date"
        value={selectedEndDate}
        onChange={(e) => setSelectedEndDate(e.target.value)}
      />
    </div>
  );

  return (
    <div className="deployment-details">
      <h1>Deployment Stats</h1>
      <div className="filters">
        <div className="filter">
          <label htmlFor="application-filter">Application:</label>
          <ApplicationFilter />
        </div>
        <div className="filter">
          <label htmlFor="date-range-filter">Date Range:</label>
          <DateRangeFilter />
        </div>
      </div>
      {filteredData.length === 0 ? (
        <div>No data available.</div>
      ) : (
        <div className="chart-container">
          <Bar key={JSON.stringify(filteredData)} data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}

export default Chartview;
