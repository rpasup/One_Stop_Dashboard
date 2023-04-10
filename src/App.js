//import React, { useState, useEffect } from 'react';
import Boxespage from './component/Boxespage';
import Deployment_details from './component/Deployment_details';
import NavigationBar from './component/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Boxespage />
      <Deployment_details />
      
    </div>
  );
}

export default App;
